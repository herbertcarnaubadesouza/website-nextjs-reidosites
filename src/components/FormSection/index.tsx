// import required modules
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

export default function FormSection() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Check if all fields are filled
    let isFormComplete = true;
    for (let value of formData.values()) {
      if (!value) {
        isFormComplete = false;
        break;
      }
    }

    if (!isFormComplete) {
      toast.error("Por favor, preencha todos os campos.", { theme: "dark" });
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Formulário enviado com sucesso!", { theme: "dark" });
      } else {
        toast.error("Erro ao enviar formulário", { theme: "dark" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar formulário", { theme: "dark" });
    }
  };

  return (
    <>
      <section className={styles.graphsection}>
        <div className={styles.titleSection}>
          <h2>
            Preencha o formulário para ter um{" "}
            <span>time de especialistas </span>
            montado <span>pelo Rei dos Sites.</span>
          </h2>
        </div>
        <div className={styles.formSection}>
          <div className={styles.leftSection}>
            <img className={styles.logo} src="/images/reifoto.png"></img>
          </div>
          <div className={styles.rightSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Qual é o seu nome?"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e seu Email?"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="telefone"
                  id="telefone"
                  name="telefone"
                  placeholder="Qual é o seu telefone/WhatsApp?"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="nomeEmpresa"
                  id="nomeEmpresa"
                  name="nomeEmpresa"
                  placeholder="Qual é o nome da sua empresa?"
                />
              </div>
              <div className={styles.inputGroup}>
                <select id="segmento" name="segmento">
                  <option value="">Qual é o seu segmento?</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Varejo">Varejo</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Trânsito">Trânsito</option>
                  <option value="Esporte">Esporte</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <select id="segmento" name="segmento">
                  <option value="">Quantos funcionários você tem hoje?</option>
                  <option value="1 - 5">1 - 5</option>
                  <option value="5 - 50">5 - 50</option>
                  <option value="50 - 300">50 - 300</option>
                  <option value="Acima de 300">Acima de 300</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <select id="faturamento" name="faturamento">
                  <option value="">
                    Qual é o faturamento mensal da sua empresa?
                  </option>
                  <option value="R$1.000 - 5.000">R$1.000 - 5.000</option>
                  <option value="R$5.000 - 50.000">R$5.000 - 50.000</option>
                  <option value="R$50.000 - 300.000">R$50.000 - 300.000</option>
                  <option value="Acima de R$300.000">Acima de R$300.000</option>
                </select>
              </div>
              <button type="submit" className={styles.button}>
                RECEBER O CONTATO DO REI DOS SITES
              </button>
            </form>
          </div>
          <img
            className={styles.sombraRoxo}
            src="/images/sombraRoxo .png"
          ></img>
        </div>
      </section>
    </>
  );
}
