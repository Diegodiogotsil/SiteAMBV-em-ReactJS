import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <header>
        <h1>Cadastro de Candidatos</h1>
        <h3>Cadastre-se e faça parte de nós</h3>
      </header>
      <section>
        <h2>Entre em contato conosco para ajudar crianças</h2>
        <p>
          A Fundação AMBVE está aqui para ajudar, com enfoque em crianças e adolescentes, oferecemos proteção e moradia além de estudos e cuidados que todas as crianças devem ter. A nossa unidade fica sobre o Rio Tietê na cidade de Suzano. Qualquer denúncia que leve a crianças que estão sofrendo neste momento será averiguada por nossos agentes celestes, onde serão imediatamente despachadas viaturas ao local da denúncia para que sejam tomadas as devidas providências.
          <br /><br />
          <strong>COMO POSSO AJUDAR?</strong>
          <br /><br />
          Para ser um voluntário, basta entrar em contato com nosso telefone ou comparecer à sede mundial da Fundação AMBVE no endereço descrito no rodapé. Você poderá colaborar trabalhando internamente, em vários setores como sendo professor, agente da segurança, motorista de ônibus escolar, médico ou enfermeiro, cozinheiro, entre vários outros, além de poder fazer parte das equipes de ação, como COPOM para ocorrências policiais externas, e INDUSCOPOM, que é a parte de policiamento infantil e conselho tutelar. Seja voluntário e comece agora mesmo e ajude-nos a ajudar, nesta obra de amor.
          <br /><br />
          Mas caso você não queira nenhuma das opções acima, temos também a CTBC (Companhia Brasileira de Trens Celestiais), a CBOTUR (Companhia Brasileira de Ônibus e Turismo), a Prisma (Transporte Rápido sobre Trilhos - Metrô). Então, seja um voluntário oficial já...
        </p>
        <h4>Para ajudar basta discar JESUS em seu telefone</h4>
        <p>
          Ao discar JESUS em seu telefone, que representa respectivamente o número 53787, você será direcionado para nossa central INDUSCOPOM.
        </p>
        <ul>
          <li>Vagas maquinista (diversas operações)</li>
          <li>Vagas agente celeste COPOM</li>
          <li>Vagas agente celeste INDUSCOPOM</li>
          <li>Vagas motoristas (diversas operações)</li>
          <li>Outras oportunidades de vagas</li>
        </ul>
        <h6>Clique no link abaixo para fazer sua inscrição:</h6>
        <Link to="/about" className="about-button">cadastre-se e faça parte de nós</Link>
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

export default Home;
