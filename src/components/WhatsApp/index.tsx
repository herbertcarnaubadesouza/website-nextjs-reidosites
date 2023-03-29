// import required modules
import WhatsAnimation from "../LottieAnimation/WhatsAppAnimation";
import styles from "./styles.module.scss";

export default function WhatsApp() {
  return (
    <>
      <section className={styles.whatsApp}>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5511957978876&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20site!"
        >
          <WhatsAnimation />
        </a>
      </section>
    </>
  );
}
