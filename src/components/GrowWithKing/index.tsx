// import required modules
import { useState } from "react";
import styles from "./styles.module.scss";

export default function GrowWithKing() {
  const [copywriterOpen, setCopywriterOpen] = useState(true);
  const [designerOpen, setDesignerOpen] = useState(false);
  const [seoOpen, setSeoOpen] = useState(false);
  const [trafficOpen, setTrafficOpen] = useState(false);

  const toggleCopywriterAccordion = () => {
    setCopywriterOpen(!copywriterOpen);
    setDesignerOpen(false);
    setSeoOpen(false);
    setTrafficOpen(false);
  };

  const toggleDesignerAccordion = () => {
    setDesignerOpen(!designerOpen);
    setCopywriterOpen(false);
    setSeoOpen(false);
    setTrafficOpen(false);
  };

  const toggleSeoAccordion = () => {
    setSeoOpen(!seoOpen);
    setDesignerOpen(false);
    setCopywriterOpen(false);
    setTrafficOpen(false);
  };

  const toggleTrafficAccordion = () => {
    setTrafficOpen(!trafficOpen);
    setDesignerOpen(false);
    setCopywriterOpen(false);
    setSeoOpen(false);
  };
  return (
    <>
      <section className={styles.growWithKingSection}>
        <div className={styles.containerText}>
          <div className={styles.leftSide}>
            <h2>
              É POSSÍVEL <span>CRESCER SEM O REI DOS SITES?</span>
            </h2>
            <p>
              Para replicar o que o Rei dos Sites faz pela sua empresa, você
              precisaria de no mínimo, 4 funcionários:
            </p>
            <ul>
              <li>um Copyrighter</li>
              <li>um Designer Gráfico</li>
              <li>um Especialista em SEO</li>
              <li>um Analista de Business Intelligence</li>
            </ul>
            <p>
              Com o Rei dos Sites você consegue suprir esses profissionais
              através de um especialista na área!
            </p>
            <p>
              E ainda poupa tempo e dinheiro por não se preocupar com essa mão
              de obra.
            </p>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.accordion}>
              <div
                className={`${styles.header} ${
                  copywriterOpen ? styles.open : ""
                }`}
                onClick={toggleCopywriterAccordion}
              >
                <h2 className={styles.title}>Copywriter</h2>
                <div className={styles.icon}>
                  {copywriterOpen ? (
                    <img src="/images/Vector.svg"></img>
                  ) : (
                    <img src="/images/VectorClosed.svg"></img>
                  )}
                </div>
              </div>
              {copywriterOpen && (
                <div className={styles.content}>
                  Copywriting é o processo de produção de textos persuasivos
                  para ações de Marketing e Vendas, como o conteúdo de emails,
                  sites, catálogos, anúncios e cartas de vendas. O profissional
                  responsável pelo desenvolvimento do texto é conhecido como
                  Copywriter.
                </div>
              )}
            </div>
            <div className={styles.accordion}>
              <div
                className={`${styles.header} ${
                  designerOpen ? styles.open : ""
                }`}
                onClick={toggleDesignerAccordion}
              >
                <h2 className={styles.title}>Designer Gráfico</h2>
                <div className={styles.icon}>
                  {designerOpen ? (
                    <img src="/images/Vector.svg"></img>
                  ) : (
                    <img src="/images/VectorClosed.svg"></img>
                  )}
                </div>
              </div>
              {designerOpen && (
                <div className={styles.content}>
                  Um designer gráfico é capaz de criar uma identidade visual
                  para a empresa, ou seja, um conjunto de elementos gráficos que
                  representam a marca, como logotipos, cores, tipografias, entre
                  outros. Essa identidade visual ajuda a empresa a se destacar
                  no mercado, a ser reconhecida pelos clientes e a transmitir
                  seus valores e propósito.
                </div>
              )}
            </div>
            <div className={styles.accordion}>
              <div
                className={`${styles.header} ${seoOpen ? styles.open : ""}`}
                onClick={toggleSeoAccordion}
              >
                <h2 className={styles.title}>Especialista em SEO</h2>
                <div className={styles.icon}>
                  {seoOpen ? (
                    <img src="/images/Vector.svg"></img>
                  ) : (
                    <img src="/images/VectorClosed.svg"></img>
                  )}
                </div>
              </div>
              {seoOpen && (
                <div className={styles.content}>
                  Com a otimização das páginas e conteúdos do site, é possível
                  aumentar a visibilidade da empresa nos resultados de busca,
                  fazendo com que ela seja encontrada por mais pessoas. Isso
                  pode gerar mais tráfego orgânico (sem a necessidade de
                  investir em publicidade) e, consequentemente, mais
                  oportunidades de negócio.
                </div>
              )}
            </div>
            <div className={styles.accordion}>
              <div
                className={`${styles.header} ${trafficOpen ? styles.open : ""}`}
                onClick={toggleTrafficAccordion}
              >
                <h2 className={styles.title}>Gestor de tráfego</h2>
                <div className={styles.icon}>
                  {trafficOpen ? (
                    <img src="/images/Vector.svg"></img>
                  ) : (
                    <img src="/images/VectorClosed.svg"></img>
                  )}
                </div>
              </div>
              {trafficOpen && (
                <div className={styles.content}>
                  Com um gestor de tráfego capacitado, a empresa é capaz de
                  otimizar seus investimentos em publicidade digital,
                  maximizando o retorno sobre o investimento (ROI). Isso é
                  possível porque o gestor de tráfego tem habilidades para
                  identificar as melhores estratégias de anúncios e segmentação
                  de público, minimizando desperdícios e direcionando os
                  recursos para as campanhas mais efetivas.
                </div>
              )}
            </div>
          </div>
        </div>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!"
        >
          <button>QUERO CRESCER MAIS</button>
        </a>
      </section>
    </>
  );
}
