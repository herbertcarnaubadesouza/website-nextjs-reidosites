// import required modules
import AlertAnimation from "../LottieAnimation/AlertAnimation";
import AlertAnimationMobile from "../LottieAnimation/AlertAnimationMobile";
import MiniAlertAnimation from "../LottieAnimation/MiniAlertSection";
import styles from "./styles.module.scss";
export default function AlertSection() {
  return (
    <>
      <section className={styles.containerSection}>
        <div className={styles.alertSection}>
          <MiniAlertAnimation></MiniAlertAnimation>
          <h2>
            Agora, <span> ATENÇÃO</span>
          </h2>
          <h2>O que é preciso para contratar os serviços do Rei dos Sites?</h2>
          <p>
            Muito simples, basta clicar no botão abaixo e preencher o formulário
            para que nossa equipe de especialistas entre em contato com você.
          </p>
          <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!">
            <button>FALAR COM UM DOS NOSSOS ESPECIALISTAS</button>
          </a>
        </div>
        <div className={styles.absolute}>
          <AlertAnimation></AlertAnimation>
        </div>
        <div className={styles.animationMobile}>
          <AlertAnimationMobile />
        </div>
      </section>
    </>
  );
}
