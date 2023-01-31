import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/android-chrome-192x192.png"
        alt="Move Up Studio"
        width={100}
        height={100}
      />
      <h1>Move Up Studio</h1>
      <h2>Pole Dance i Aerial Hoop Częstochowa</h2>
      <div className={styles.socials}>
        <SocialIcon url="https://www.instagram.com/moveup.studio" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100085235157226" />
      </div>
    </main>
  );
}
