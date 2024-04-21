import { db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { ILike } from "../types/type";

// 좋아요 다 불러오는 함수

export async function fetchLikesByUser(userId: string): Promise<ILike[]> {
  const likesRef = collection(db, "movie"); // "movie" 컬렉션 참조
  const likesQuery = query(likesRef, where("userId", "==", userId));

  try {
    const querySnapshot = await getDocs(likesQuery);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return [];
    }
    let results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
    return results;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}

// 영화에 맞는 좋아요 불러오는 함수
export async function fetchLikesByUserAndPost(
  userId: string,
  movieId: number,
): Promise<ILike[]> {
  const likesRef = collection(db, "movie"); // "movie" 컬렉션 참조
  const likesQuery = query(
    likesRef,
    where("userId", "==", userId), // "uId" 필드가 특정 이메일과 동일
    where("movieId", "==", movieId), // "mId" 필드가 특정 영화 ID와 동일
  );

  try {
    const querySnapshot = await getDocs(likesQuery);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return [];
    }
    let results = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
    return results;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}

// 좋아요 토글 함수
export async function toggleLike(
  userId: string,
  movieId: number,
  type: string,
): Promise<ILike[]> {
  const likesRef = collection(db, "movie"); // "likes" 컬렉션 참조
  const q = query(
    likesRef,
    where("userId", "==", userId),
    where("movieId", "==", movieId),
  );

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      // 좋아요 문서가 없으므로 추가
      const docRefData = {
        userId: userId as string,
        movieId: movieId as number,
        type: type as string,
        likedAt: new Date() as Date,
      };
      const docRef = await addDoc(likesRef, docRefData);
      return [docRefData];
    } else {
      // 좋아요 문서가 있으므로 삭제
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      console.log("Like removed");
      return [];
    }
  } catch (error) {
    console.error("Error toggling like:", error);
    return "Error";
  }
}
