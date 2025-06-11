import React from "react";
import "../styles/romantic.css";

const Home = () => {
  return (
    <div className="romantic-container">
      <header className="romantic-header">
        <h1>A minha melhor escolha 💖</h1>
        <p>Uma pequena lembrança do quanto somos especiais juntos.</p>
      </header>

      <main className="romantic-gallery">
        <div className="memory-card">
          <img src="https://i.ibb.co/mCknTLTG/praia.jpg" alt="carnaval" />
          <div className="memory-text">
            <h2>Nosso carnaval</h2>
            <p>
              Posso te contar um segredinho?, eu nem queria viajar kkkk só
              queria passar tempo com vc. Colecionei momentos e fiz menórias
              incíveis ao seu lado. cuidar de vc enquanto vc dormia na praia foi
              uma das coisas mais satisfatórias que já fiz kkkk
            </p>
          </div>
        </div>
        <div className="memory-card">
          <img src="https://i.ibb.co/N24FMHJm/samo.jpg" alt="carnaval" />
          <div className="memory-text">
            <h2>A descoberta do nosso restaurante</h2>
            <p>
              Um lugar que eu não consigo não associar ao nosso recomeço, cara
              eu sou simplismente incapaz de comer nesse lugar sem vc... ali foi
              nosso ponto de reconexão. um lugar aonde conversamos por horas sem
              qualquer tipo de sensura ou armadura, cara... como eu amo ir nessa
              porra com vc.
            </p>
          </div>
        </div>
        <div className="memory-card">
          <img src="https://i.ibb.co/QF76Qz9X/pra-a.jpg" alt="carnaval" />
          <div className="memory-text">
            <h2>Redescoberta da felicidade</h2>
            <p>
              Cara como eu posso dizer? sem vc a minha vida parece não fazer
              muito sentido, eu te amo já não descreve mais as coisas que eu
              sinto por vc, embora seja difícil as vezes, a possibilidade de não
              curtir a vida a seu lado na minha mente simplesmente não existe...
              crlh como eu amo o jeito que vc sorri, quando é palhaça e começa a
              dançar do nada, quando faz biquinho quando nervosa, e como fica
              com voz de neném sem perceber quando tá manhosa, triste ou
              querendo alguma coisa kkkkkk, cara a viver a vida é tão bom quando
              vc tá perto... ainda não são essas as palavras certas pra
              descrever oq eu sinto por você. mas prometo tentar passar o resto
              das nossas vidas tentando te fazer entender sz
            </p>
          </div>
        </div>
      </main>

      <footer className="romantic-footer">
        <p>Com amor, sempre. Edu+Mika ❤️</p>
      </footer>
    </div>
  );
};

export default Home;
