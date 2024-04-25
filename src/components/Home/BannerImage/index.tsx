import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function BannerImage() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (typeof window !== "undefined") {
        const bannerClosed = JSON.parse(
          localStorage.getItem("bannerClosed") || "{}"
        );
        const currentTime = new Date().getTime();
        if (!bannerClosed.closed || bannerClosed.expiryTime < currentTime) {
          setShowBanner(true);
        }
      }
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  function handleBannerClose() {
    const expiryTime = new Date().getTime() + 3 * 60 * 1000;
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "bannerClosed",
        JSON.stringify({ closed: true, expiryTime })
      );
    }
    setShowBanner(false);
  }

  return (
    <>
      {showBanner && (
        <div className={styles.overlay}>
          <section className={styles.image}>
            <Link href="https://wa.link/1c73zl" className={styles.container}>
              <img src="/Logo.gif" className={styles.logo} />
              <img
                className={styles.imageBanner}
                src="/preguica3.svg"
                alt="O Rei dos Sites"
              />
            </Link>
            <img
              className={styles.close}
              src="/images/close.png"
              alt="O Rei dos Sites"
              onClick={handleBannerClose}
            />
          </section>
          <section className={styles.imageMobile}>
            <Link href="https://wa.link/1c73zl" className={styles.container}>
              <img src="/Logo.gif" className={styles.logo} />
              <img
                className={styles.imageBanner}
                src="/preguicaCelular.svg"
                alt="O Rei dos Sites"
              />
            </Link>
            <img
              className={styles.close}
              src="/images/close.png"
              onClick={handleBannerClose}
              alt="O Rei dos Sites"
            />
          </section>
        </div>
      )}
    </>
  );
}
