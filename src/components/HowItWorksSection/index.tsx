// import required modules
import ClientAnimation from "../LottieAnimation/ClientAnimation";
import ConfigAnimation from "../LottieAnimation/ConfigAnimation";
import IncreaseAnimation from "../LottieAnimation/IncreaseAnimation";
import ReactAnimation from "../LottieAnimation/ReactAnimation";
import styles from "./styles.module.scss";

export default function HowItWorksSection() {
  return (
    <>
      <section className={styles.HowItWorksSection}>
        <h2>
          <span>COMO</span> FUNCIONA?
        </h2>
        <div className={styles.secondBlock}>
          <div className={styles.row}>
            <div className={styles.containerIcon}>
              <ClientAnimation></ClientAnimation>
              <h4>
                Experiência <span>de Qualidade</span>
              </h4>
              <p>
                Nós temos anos de experiência em desenvolvimento de sites e já
                ajudamos mais de 100 clientes a atingirem seus objetivos online.{" "}
              </p>
            </div>
            <div className={styles.containerIcon}>
              <ReactAnimation></ReactAnimation>
              <h4>
                Totalmente <span>Personalizado</span>
              </h4>
              <p>
                Nós trabalharemos em estreita colaboração com você para entender
                suas necessidades específicas e criar um site que reflita a
                identidade visual e os valores de sua empresa.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.containerIcon}>
              <ConfigAnimation></ConfigAnimation>
              <h4>
                Suporte <span>e Atendimento</span>
              </h4>
              <p>
                Nós estamos sempre disponíveis para ajudar em qualquer etapa do
                processo de desenvolvimento do site e, após o lançamento,
                oferecemos suporte contínuo para garantir que tudo funcione
                perfeitamente.
              </p>
            </div>
            <div className={styles.containerIcon}>
              <IncreaseAnimation></IncreaseAnimation>
              <h4>
                Crescimento <span>Acelerado</span>
              </h4>
              <p>
                Encontramos as métricas necessárias para escalar o seu negócio
                com maior valocidade. Dessa forma, colocaremos a sua empresa em
                patamares jamais esperimentados antes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
