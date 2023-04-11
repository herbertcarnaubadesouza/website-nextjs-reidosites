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
            <img
              className={styles.imageBanner}
              src="/images/backgroundRei.webp"
              alt="O Rei dos Sites"
            />
            <img
              className={styles.close}
              src="/images/close.webp"
              alt="O Rei dos Sites"
              onClick={handleBannerClose}

            />
          </section>
          <section className={styles.imageMobile}>
            <img
              className={styles.imageBanner}
              src="/images/backgroundReiMobile.webp"
              alt="O Rei dos Sites"
            />
            <img
              className={styles.close}
              src="/images/close.webp"
              onClick={handleBannerClose}
              alt="O Rei dos Sites"
            />
          </section>
        </div>
      )}
    </>
  );
}
