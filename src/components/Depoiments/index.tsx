// import required modules
import { useState } from "react";
import styles from "./styles.module.scss";

const testimonials = [
  {
    id: 1,
    name: "William Costa",
    date: "13.Maio, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.png",
    content:
      "O Rei dos Sites me surpreendeu muito com suas métricas e processos totalmente alinhados com a verdadeira demanda da área de vendas de qualquer empresa que sempre será VENDER MAIS ! SHOW!!!!",
    image: "/images/william.png",
  },
  {
    id: 2,
    name: "Sophia Jones",
    date: "22.Abril, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.png",
    content:
      "I am extremely satisfied with the services provided by Rei dos Sites. They helped me to create a professional and functional website for my business, and their team was always responsive and helpful.",
    image: "/images/cliente2.png",
  },
  {
    id: 3,
    name: "Juan Rodriguez",
    date: "06.Março, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.png",
    content:
      "Rei dos Sites has been instrumental in helping us to establish a strong online presence for our business. Their expertise in website design and digital marketing has been invaluable.",
    image: "/images/cliente3.png",
  },
  {
    id: 4,
    name: "Emma Johnson",
    date: "10.Janeiro, 2022",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.png",
    content:
      "I was impressed with how quickly and efficiently Rei dos Sites was able to design and launch my new website. Their attention to detail and commitment to customer satisfaction is unparalleled.",
    image: "/images/cliente4.png",
  },
  {
    id: 5,
    name: "Mohammed Ahmed",
    date: "25.Novembro, 2021",
    rating: "/images/stars.png",
    verified: "/images/verificationLogo.png",
    content:
      "Rei dos Sites exceeded my expectations in every way. They helped me to create a beautiful and functional website for my business, and their ongoing support has been invaluable.",
    image: "/images/cliente5.png",
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
          src="/images/iconeVoltaRoxa.png"
        ></img>
        <h3>O QUE NOSSOS CLIENTES DIZEM</h3>
        <div className={styles.depoimentContainer}>
          <img
            className={`${styles.arrow} ${styles.leftArrow}`}
            src="/images/ArrowSection.png"
            onClick={previousTestimonial}
          ></img>
          <div className={styles.contentDepoiment}>
            <div className={styles.userInfoBlock}>
              <img
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].name}
              ></img>
              <div className={styles.userName}>
                <h4>{testimonials[currentTestimonialIndex].name}</h4>
                <p>{testimonials[currentTestimonialIndex].date}</p>
              </div>
            </div>
            <div className={styles.avaliationImgs}>
              <img src={testimonials[currentTestimonialIndex].rating}></img>
              <img src={testimonials[currentTestimonialIndex].verified}></img>
            </div>
            <div className={styles.avaliationDescriptions}>
              <p>{testimonials[currentTestimonialIndex].content}</p>
            </div>
            <img
              className={styles.googleImage}
              src="/images/googleImage.png"
            ></img>
          </div>
          <img
            className={`${styles.arrow} ${styles.rightArrow}`}
            src="/images/ArrowSectionRight.png"
            onClick={nextTestimonial}
          ></img>
        </div>
        <div className={styles.arrowsMobile}>
          <img
            className={`${styles.arrow} ${styles.leftArrow}`}
            src="/images/ArrowSection.png"
            onClick={previousTestimonial}
          ></img>
          <img
            className={`${styles.arrow} ${styles.rightArrow}`}
            src="/images/ArrowSectionRight.png"
            onClick={nextTestimonial}
          ></img>
        </div>
      </div>
    </section>
  );
}
