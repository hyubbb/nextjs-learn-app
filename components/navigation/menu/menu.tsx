"use client";
import { User } from "firebase/auth";
import Link from "next/link";
import { IoIosHeart, IoIosLogIn } from "react-icons/io";
import { useRecoilState } from "recoil";
import { userState } from "../../../state/atom";
import { onAuthStateChanged, signInWithGoogle } from "../../../firebase/auth";
import { createSession } from "../../../actions/auth-actions";
import styles from "../navigation.module.scss";
import { useEffect } from "react";
import nookies from "nookies";

export default function Menu({ session }) {
  const [userData, setUserData] = useRecoilState<User | null>(userState);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        const userCopy = JSON.parse(JSON.stringify(user));
        setUserData(userCopy);
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleAuth = async () => {
    const res = await signInWithGoogle();
    if (res) {
      await createSession(res.token);
    }
  };
  return (
    <>
      {!session ? (
        <button className={styles.search} onClick={handleAuth}>
          <IoIosLogIn />
        </button>
      ) : (
        <Link href={`/like`} className={styles.login}>
          <IoIosHeart />
        </Link>
      )}
    </>
  );
}
