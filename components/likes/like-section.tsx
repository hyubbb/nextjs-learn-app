"use client";
import { Suspense, useEffect, useState } from "react";
import { fetchLikesByUser } from "../../firebase/firestore";
import { User } from "firebase/auth";
import { ILike } from "../../types/type";
import styles from "./like-section.module.scss";
import LikeCard from "./section/like-card";
import Spinner from "../commons/Spinner";
import { useRouter } from "next/navigation";
import { userState } from "../../state/atom";
import { useRecoilState } from "recoil";
import Logout from "../navigation/logout";

export default function LikeSection({ session }) {
  const router = useRouter();
  const [userData, _] = useRecoilState<User | null>(userState);
  const [filteredData, setFilteredData] = useState<{ [key: string]: ILike[] }>(
    {}
  );
  const [likeType, setLikeType] = useState("movie");
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    const fetchFunc = async () => {
      if (userData) {
        const response = await fetchLikesByUser(userData.email!);
        const filtered = response.reduce((acc, curr) => {
          if (!acc[curr.type]) {
            acc[curr.type] = [];
          }
          acc[curr.type].push(curr);
          return acc;
        }, {});
        setFilteredData(filtered);
      }
    };
    fetchFunc();
  }, [userData]);

  // 로그아웃시 메인 페이지로 리디렉트
  useEffect(() => {
    if (!userData && !session) {
      alert("로그인을 해야 이용할 수 있는 페이지 입니다.");
      router.push("/");
    }
  }, []);

  const handleType = (type: string) => {
    setLikeType(type);
    const newType = type === "movie" ? true : false;
    setIsActive(newType);
  };

  return (
    <div className={styles.container}>
      <Logout />
      <div className={styles.type}>
        <div
          onClick={() => handleType("movie")}
          className={isActive ? styles.active : styles.inActive}
        >
          <span>MOVIE</span>
          <span>{filteredData["movie"]?.length}</span>
        </div>
        <div
          onClick={() => handleType("tv")}
          className={!isActive ? styles.active : styles.inActive}
        >
          <span>TV</span>
          <span>{filteredData["tv"]?.length}</span>
        </div>
      </div>
      {filteredData[likeType]?.length > 0 ? (
        <>
          <div className={styles.count}>좋아요한 컨텐츠</div>
          <div className={styles.contents}>
            <Suspense fallback={<Spinner />}>
              <LikeCard data={filteredData[likeType]} type={likeType} />
            </Suspense>
          </div>
        </>
      ) : (
        <div className={styles.zeroLike}>좋아하는 작품을 추가해보세요</div>
      )}
    </div>
  );
}