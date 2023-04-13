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
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!"
        >
          <button id="especialistas-button">
            QUERO SABER COMO MONTAR MEU TIME DE ESPECIALISTAS
          </button>
        </a>
      </section>
    </>
  );
}
