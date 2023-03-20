// import required modules
import styles from "./styles.module.scss";

export default function HeadLine() {
  return (
    <>
      <section className={styles.headline}>
        <h1>
          Tenha um time de especialistas atuando
          <span> diretamente no crescimento do seu negócio.</span>
        </h1>
        <button>QUERO SABER COMO MONTAR MEU TIME DE ESPECIALISTAS</button>
      </section>
    </>
  );
}
