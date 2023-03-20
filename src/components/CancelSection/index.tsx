// import required modules
import CheckAnimation from "../LottieAnimation/CheckAnimation";
import styles from "./styles.module.scss";

export default function CancelSection() {
  return (
    <section className={styles.cancelSection}>
      <div className={styles.leftSide}>
        <h3>
          Cancele <span>quando quiser!</span>
        </h3>
        <p>
          O Rei dos Sites isenta o seu risco removendo a multa.{" "}
          <span>Se por algum motivo fora do comum</span>, você não estiver
          satisfeito com o trabalho, você pode{" "}
          <span>cancelar quando quiser sem pagar um centavo</span> sequer pela
          recisão contratual, desde que cumprido o aviso prévio.
        </p>
      </div>
      <div className={styles.rightSide}>
        <CheckAnimation></CheckAnimation>
      </div>
    </section>
  );
}
