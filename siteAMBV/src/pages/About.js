import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function About() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const volunteerName = prompt('Por favor, digite seu nome completo:');
    const volunteerAge = prompt('Por favor, nos informe a sua idade:');
    setName(volunteerName);
    setAge(volunteerAge);
    
    let msg = `<p style='color: blue'>Seja bem-vindo(a) SR(A) ${volunteerName}, agradecemos sua participação.</p>`;
    if (volunteerAge >= 18) {
      msg += `<p style='color: blue'>Parabéns, sua inscrição foi aceita.</p>`;
      msg += `<p style='color: blue'>Um de nossos agentes entrará em contato em breve.</p>`;
    } else {
      msg += `<p style='color: blue'>Infelizmente você não possui idade suficiente, mas entraremos em contato para conversar com você. Muito obrigado.</p>`;
    }
    setMessage(msg);
  }, []);

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
        <Link to="/" className="home-button">Voltar para Home</Link>
        <div dangerouslySetInnerHTML={{ __html: message }} />
      </section>
      <footer>
        <h5><strong>Fundação AMBVE</strong></h5>
        Todos os direitos reservados
        <br />
        Ajude-nos a ajudar
        <br />
        Endereço:
        <br />
        Suzano SP, próximo à ponte Boa Vista sobre o Rio Tietê e Raposão.
      </footer>
    </div>
  );
}

export default About;
