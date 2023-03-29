// import required modules
import GraphAnimation from "../LottieAnimation/GraphAnimation";
import GraphMobileAnimation from "../LottieAnimation/GraphMobileAnimation";
import styles from "./styles.module.scss";

export default function GraphSection() {
  return (
    <>
      <section className={styles.graphsection}>
        <div className={styles.leftSide}>
          <h2>
            VOCÊ ESTÁ <span>SATISFEITO</span> COM O SEU FATURAMENTO?
          </h2>
          <ul>
            <li>
              Se a resposta for <span>não</span>, o método de desenvolvimento do
              Rei dos Sites pode te ajudar.
            </li>
            <li>
              Nosso foco principal é que você venda mais e nunca pare de
              crescer.
            </li>
            <li>
              Sabemos que a velha forma de fazer sites{" "}
              <span>não traz os mesmos resultados.</span>
            </li>
            <li>
              Agora, adotar o “novo método” e transformar seu negócio numa{" "}
              <span>máquina de fazer dinheiro</span> pela internet, isso pode
              fazer o seu negócio crescer.
            </li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <GraphAnimation />
        </div>
        <div className={styles.mobileRightSide}>
          <GraphMobileAnimation />
        </div>
        <div className={styles.mobileYLine}></div>
      </section>
    </>
  );
}
