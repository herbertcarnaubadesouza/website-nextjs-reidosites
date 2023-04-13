import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function PrivacyPolicy() {
  const [showPrivacySection, setShowPrivacySection] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("hasAcceptedCookies");
    if (!hasAcceptedCookies) {
      setShowPrivacySection(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem("hasAcceptedCookies", "true");
    setShowPrivacySection(false);
  };

  if (!showPrivacySection) return null;

  return (
    <>
      <div className={styles.privacySection}>
        <p>
          Utilizamos cookies e outras tecnologias semelhantes para melhorar a
          sua experiência em nossos sites e recomendar produtos e conteúdos de
          acordo com o seu interesse. Ao continuar navegando, você concorda com
          estas condições e com nossa{" "}
          <Link href="/privacy">política de privacidade.</Link>
        </p>
        <button onClick={handleAllowCookies}>Permitir</button>
      </div>
    </>
  );
}
