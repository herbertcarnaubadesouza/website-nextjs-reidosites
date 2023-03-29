// import required modules
import styles from "./styles.module.scss";

export default function Description() {
  return (
    <>
      <section className={styles.descriptionSection}>
        <div className={styles.firstBlock}>
          <h2>
            <span>CRESÇA RÁPIDO</span> USANDO O PODER DA INTERNET
          </h2>
          <p>
            Se você quer acelerar o crescimento do seu negócio, precisa atrair
            mais pessoas e ter uma{" "}
            <span>estratégia montada para convertê- los em clientes.</span>
          </p>
          <p>
            E, nisso, o Rei dos Sites <span>vai te ajudar.</span>
          </p>
        </div>
        <div className={styles.secondBlock}>
          <h2>
            <span>O QUE O</span> REI DOS SITES <span>FAZ?</span>
          </h2>
          <p>
            O Rei dos Sites é um desenvolvedor de sites especializado em ajudar
            a sua empresa a vender mais. <br></br>
            <br></br>Fazemos isso através de sólidos processos metodológicos
            validados na última década.
          </p>
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!"
          >
            <button>QUERO SABER COMO VENDER MAIS</button>
          </a>
        </div>
      </section>
    </>
  );
}
