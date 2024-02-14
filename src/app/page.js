import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Learn, Create, Document.</h1>
        <p className={styles.desc}>
          Mr. Otter's Block is a blog dedicated to the process of learning concepts, creating projects, and documenting results.
        </p>
        <div className={styles.buttons}>
          <Link href="/register" className={styles.button} >Register</Link>
          <Link href="/login" className={styles.button} >Login</Link>
        </div>
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="" alt="" fill className={styles.heroImg}/>
      </div>
      <Register />
    </div>
  );
}
