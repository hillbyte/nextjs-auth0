/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth0</title>
        <meta name="description" content="nextjs auth0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.description}>NextJS + Auth0</h1>

        <div className={styles.card}>
          <nav>
            {!user && (
              <Link href="/api/auth/login">
                <button className={styles.button}>LOGIN</button>
              </Link>
            )}
            {user && (
              <>
                <p className={styles.description}>Home Content</p>
                <br />
                <img src={user.picture} width={100} height={100} />
                <h3 className={styles.description}>Welcome {user.name}</h3>
                <p>{user.email}</p>
                <Link href="/api/auth/logout">
                  <button className={styles.button}>LOGOUT</button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
}
