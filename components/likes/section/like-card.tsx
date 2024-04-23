"use client";
import { Suspense, useEffect, useState } from "react";
import { MOVIE_DETAIL_URL, options } from "../../../app/constants";
import Movie from "../../movie/movie";
import styles from "../like-section.module.scss";
import { IFilteredLike, IMovie } from "../../../types/type";
import Spinner from "../../commons/Spinner";
import { useRecoilState } from "recoil";
import { likeTypeState } from "../../../state/atom";
const getMovie = async ({ id, type }: { id: string; type: string }) => {
  const response = await fetch(
    `${MOVIE_DETAIL_URL}/${type}/${id}?language=ko`,
    options
  );

  return response.json();
};
export default function LikeCard({ filteredData: data }) {
  console.log(data);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [likeTypeData, setLikeTypeData] = useRecoilState<string>(likeTypeState);

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = data[likeTypeData].map((like) => {
        return getMovie({ id: like.movieId, type: like.type });
      });
      const movies = await Promise.all(promises);
      setMovies(movies);
    };

    fetchMovies();
  }, [likeTypeData]);

  console.log(likeTypeData);

  return (
    <>
      {data[likeTypeData]?.length > 0 ? (
        <>
          <div className={styles.count}>좋아요한 컨텐츠</div>
          <div className={styles.contents}>
            <Suspense fallback={<Spinner />}>
              <div className={styles.movies}>
                {movies.map((movie) => {
                  return (
                    <Movie key={movie.id} movie={movie} type={likeTypeData} />
                  );
                })}
              </div>
            </Suspense>
          </div>
        </>
      ) : (
        <div className={styles.zeroLike}>좋아하는 작품을 추가해보세요</div>
      )}
    </>
  );

  // <div className={styles.movies}>
  //   {movies?.map((movie) => {
  //     return <Movie key={movie.id} movie={movie} type={type} />;
  //   })}
  // </div>
}
