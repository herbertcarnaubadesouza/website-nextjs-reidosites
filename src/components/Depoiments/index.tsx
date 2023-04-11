// import required modules
import { useState } from "react";
import styles from "./styles.module.scss";

const testimonials = [
  {
    id: 1,
    name: "Herbert Araujo",
    date: "13.Maio, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.webp",
    content:
      "O Rei dos Sites me surpreendeu muito com suas métricas e processos totalmente alinhados com a verdadeira demanda da área de vendas de qualquer empresa que sempre será VENDER MAIS ! SHOW!!!!",
    image: "/images/hebert-araujo.webp",
  },
  {
    id: 2,
    name: "Flavia Alessandra",
    date: "22.Abril, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.webp",
    content:
      "Estou extremamente satisfeita com a parceria que fiz com O Rei dos Sites. Eles criaram um site profissional e eficiente para minha loja que me surpreendeu positivamente com suas métricas e processos totalmente alinhados com a verdadeira demanda da área de vendas.",
    image: "/images/flavia.webp",
  },
  {
    id: 3,
    name: "Vitor Kuster",
    date: "06.Março, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.webp",
    content:
      "Trabalhar com a equipe da O Rei dos Sites foi uma experiência incrível. Eles foram muito profissionais e atenciosos em todos os aspectos da criação do meu site. Eles foram capazes de capturar perfeitamente a essência da minha marca e transformá-la em um site funcional e atraente que realmente se destaca.",
    image: "/images/kuster.webp",
  },
  {
    id: 4,
    name: "Gustavo Nigre",
    date: "10.Janeiro, 2022",
    rating: "/images/stars.webp",
    verified: "/images/verificationLogo.png",
    content:
      "Quando eu decidi criar um site para a minha empresa, eu estava um pouco apreensivo sobre como seria o processo. Mas a equipe da O Rei dos Sites fez tudo parecer tão fácil! Eles foram muito profissionais e experientes em todo o processo, desde a concepção até a entrega final do site.",
    image: "/images/nigre.webp",
  },
  {
    id: 5,
    name: "Rodrigo Silverio",
    date: "25.Novembro, 2021",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.webp",
    content:
      "Trabalhar com a equipe da O Rei dos Sites foi uma experiência muito gratificante. Eles foram muito atenciosos e prestativos durante todo o processo de criação do meu site. Eles me mantiveram informado em cada etapa do projeto e foram muito ágeis em responder a todas as minhas perguntas e solicitações.",
    image: "/images/rodrigoStig.webp",
  },
];

export default function Depoiments() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  return (
    <section className={styles.depoimentSection}>
      <div className={styles.depoimentContainerSection}>
        <img
          className={styles.iconeRoxo}
          src="/images/iconeVoltaRoxa.webp"
          alt="O Rei dos Sites"
        ></img>
        <h3>O QUE NOSSOS CLIENTES DIZEM</h3>
        <div className={styles.depoimentContainer}>
          <img
            className={`${styles.arrow} ${styles.leftArrow}`}
            src="/images/ArrowSection.webp"
            alt="O Rei dos Sites"
            onClick={previousTestimonial}
          ></img>
          <div className={styles.contentDepoiment}>
            <div className={styles.userInfoBlock}>
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt="O Rei dos Sites"
              ></img>
              <div className={styles.userName}>
                <h4>{testimonials[currentTestimonialIndex].name}</h4>
                <p>{testimonials[currentTestimonialIndex].date}</p>
              </div>
            </div>
            <div className={styles.avaliationImgs}>
              <img src={testimonials[currentTestimonialIndex].rating} alt="O Rei dos Sites"></img>
              <img src={testimonials[currentTestimonialIndex].verified} alt="O Rei dos Sites"></img>
            </div>
            <div className={styles.avaliationDescriptions}>
              <p>{testimonials[currentTestimonialIndex].content}</p>
            </div>
            <img
              className={styles.googleImage}
              src="/images/googleImage.webp"
              alt="O Rei dos Sites"
            ></img>
          </div>
          <img
            className={`${styles.arrow} ${styles.rightArrow}`}
            src="/images/ArrowSectionRight.webp"
            alt="O Rei dos Sites"
            onClick={nextTestimonial}
          ></img>
        </div>
        <div className={styles.arrowsMobile}>
          <img
            className={`${styles.arrow} ${styles.leftArrow}`}
            src="/images/ArrowSection.webp"
            alt="O Rei dos Sites"
            onClick={previousTestimonial}
          ></img>
          <img
            className={`${styles.arrow} ${styles.rightArrow}`}
            src="/images/ArrowSectionRight.webp"
            alt="O Rei dos Sites"
            onClick={nextTestimonial}
          ></img>
        </div>
      </div>
    </section>
  );
}
