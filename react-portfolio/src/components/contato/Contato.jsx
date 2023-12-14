import './styleContato.css';
const Contato = () => (
  <div className="containerContato">
    <div className="contato">
      <div className="linha">
        <h1>Entre em Contato</h1>
      </div>
      <div>
        <p>
          Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente estou procurando por um
          cargo e aberto para várias oportunidades. Minha preferência é uma oportunidade em uma empresa Britânica.
          Mas também estou feliz em escutar sobre oportunidades remotas. Sou uma pessoa trabalhadora e positiva
          que sempre fará as tasks com um senso de propósito e atenção aos detalhes. Fique livre para checar meu
          perfis abaixo e entrar em contato utilizando o formulário.
        </p>
      </div>
    </div>
    <div className="form">
      <div className="linha">
        <h1>Contato</h1>
      </div>
      <div className="formulario">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" />
        <label htmlFor="mensagem">Mensagem</label>
        <input className="msg" type="text" id="mensagem" />
        <button>ENVIAR</button>
      </div>
    </div>
  </div>
);

export default Contato;
