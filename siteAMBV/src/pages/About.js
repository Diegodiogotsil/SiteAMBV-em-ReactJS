import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  useEffect(() => {
    const volunteerName = prompt("Por favor, digite seu nome completo:");
    let volunteerAge = prompt("Por favor, nos informe a sua idade:");

    // Verifica se os prompts foram cancelados ou se os valores são inválidos
    if (!volunteerName || !volunteerAge || isNaN(volunteerAge)) {
      alert("Por favor, insira um nome e uma idade válidos.");
      return;
    }

    volunteerAge = parseInt(volunteerAge, 10);
    setName(volunteerName);
    setAge(volunteerAge);
    setIsEligible(volunteerAge >= 18);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>Cadastro de Candidatos</h1>
        <h3>Cadastre-se e faça parte de nós</h3>
      </header>
      <section>
        <h2>Entre em contato conosco para ajudar crianças</h2>
        <ul>
          <li>Vagas maquinista (diversas operações)</li>
          <li>Vagas agente celeste COPOM</li>
          <li>Vagas agente celeste INDUSCOPOM</li>
          <li>Vagas motoristas (diversas operações)</li>
          <li>Outras oportunidades de vagas</li>
        </ul>
        <h6>Faça sua inscrição:</h6>

        <div style={{ color: "blue", margin: "10px 0" }}>
          <p>
            Seja bem-vindo(a) <strong>{name}</strong>, agradecemos sua
            participação.
          </p>
          {isEligible ? (
            <>
              <p>Parabéns,  <strong>{name}</strong>, idade <strong>{age}</strong> sua inscrição foi aceita.</p>
              <p>Um de nossos agentes entrará em contato em breve.</p>
            </>
          ) : (
            <>
              <p>
                Infelizmente, você não possui idade suficiente, mas entraremos
                em contato para conversar com você. Muito obrigado.
              </p>
            </>
          )}
        </div>

        <Link to="/" className="home-button">
          Voltar para Home
        </Link>
      </section>
      <footer>
        <h5>
          <strong>Fundação AMBVE</strong>
        </h5>
        <p>Todos os direitos reservados</p>
        <p>Ajude-nos a ajudar</p>
        <p>
          Endereço: Suzano SP, próximo à ponte Boa Vista sobre o Rio Tietê e
          Raposão.
        </p>
      </footer>
    </div>
  );
}

export default About;
