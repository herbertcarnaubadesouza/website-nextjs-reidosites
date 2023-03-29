// import required modules
import FooterAnimation from "../LottieAnimation/FooterAnimation";
import styles from "./styles.module.scss";
export default function Footer() {
  const handleTopArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className={styles.footerSection}>
        <div className={styles.footerContent}>
          <FooterAnimation></FooterAnimation>
          <div className={styles.descriptionBlock}>
            <p>
              Como cliente do Rei dos Sites, tem até 30 dias para solicitar o
              cancelamento de seu contrato.
            </p>
            <p>
              {" "}
              Sua <span>satisfação é completamente assegurada.</span>
            </p>
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!"
            >
              <button>QUERO ALAVANCAR MINHAS VENDAS</button>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.lastBlock}>
        <div className={styles.footerLastBlockContent}>
          <img className={styles.logo} src="/images/logoSVG.png"></img>
          <p>2023 © Todos os direitos reservados | Rei dos Sites</p>
          <div className={styles.rightSide}>
            <img
              className={styles.topArrow}
              src="/images/topArrow.svg"
              onClick={handleTopArrowClick}
            ></img>
            <span>Retornar ao topo</span>
          </div>
        </div>
      </section>
    </>
  );
}
