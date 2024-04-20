import React, { Suspense } from "react";
import { IMG_URL, MOVIE_DETAIL_URL, options } from "../../constants";
import styles from "../../styles/movie-info.module.scss";
import MovieCredits from "../movie/info/movie-credits";
import Image from "next/image";
import Spinner from "../commons/Spinner";
import getBase64 from "../../utils/getBase64";

export const getMovie = async ({ id, type }: { id: string; type: string }) => {
  const response = await fetch(
    `${MOVIE_DETAIL_URL}/${type}/${id}?append_to_response=credits&language=ko`,
    options
  );
  return response.json();
};

export default async function TvInfo({ id, type }) {
  const movie = await getMovie({ id, type });

  const {
    title,
    poster_path,
    name,
    overview,
    homepage,
    vote_average,
    first_air_date,
    genres,
    credits,
    created_by,
  } = movie;
  const {
    base64,
    img: { width, height },
  } = await getBase64(`${IMG_URL}${poster_path}`);

  return (
    <div className={styles.container}>
      <Image
        className={styles.poster}
        src={`${IMG_URL}${poster_path}`}
        alt={title || name}
        priority={true}
        width={width}
        height={height}
        sizes='500px'
        placeholder='blur'
        blurDataURL={base64}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{title || name}</h1>
        <div className={styles.genres}>
          {genres.map((genre, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className={styles.text} key={genre.id}>
                  {genre.name}
                </div>
                {idx !== genres.length - 1 && <span>{" ・ "}</span>}
              </React.Fragment>
            );
          })}
        </div>
        <div className={styles.infoCustom}>
          {vote_average > 0 && (
            <>
              <h3>⭐️{vote_average.toFixed(1)}</h3>
              <span>|</span>
            </>
          )}
          <h3>{first_air_date}</h3>
          {created_by[0] && (
            <>
              <span>|</span> <h3>감독 {created_by[0]?.original_name}</h3>
            </>
          )}
        </div>
        <div className={styles.overview}>{overview}</div>
        {homepage && (
          <a href={homepage} target={"_blank"}>
            website
          </a>
        )}

        <Suspense fallback={<Spinner />}>
          <MovieCredits id={id} credits={credits} />
        </Suspense>
      </div>

      <Image
        className={styles.blurredBg}
        src={`${IMG_URL}${poster_path}`}
        alt={title || name}
        fill
        sizes='500px'
      />
    </div>
  );
}
