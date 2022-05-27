import { React, useState } from 'react';

import SectionTwoColumns from '../components/SectionTwoColumns';
import CardAbout from '../components/CardAbout';
import { Container } from 'react-bootstrap';

import { GiClick } from 'react-icons/gi';

import SobreStyled from '../styles/Sobre.styled';

const Sobre = () => {
  const [flipCard1, setFlipCard1] = useState(false);
  const [flipCard2, setFlipCard2] = useState(false);

  return (
    <SobreStyled>
      <Container>
        <SectionTwoColumns>
          <div className="text-column" data-aos="fade-right">
            <h1>Sobre a AB Consultoria</h1>
            <p>
              Fundada na cidade de São Paulo em 2014, a AB Consultoria atendeu
              dezenas de clientes dos mais diversos segmentos, se especializando
              em pequenas e médias empresas. Através de métodos clássicos sob
              visão inovadora, a AB consultoria atingiu uma taxa de sucesso de
              mais de 90%.
            </p>
          </div>
          <div className="img-column" data-aos="fade-left">
            <img src="./images/done.svg" alt="done avatar" />
          </div>
        </SectionTwoColumns>
        <section className="equipe">
          <div
            className="equipe-text"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <h4>CEOs</h4>
            <h1>Nossos fundadores</h1>
            <div className="line-dec"></div>
          </div>
          <div className="equipe-img">
            <CardAbout flip={flipCard1} name={'alex'}>
              <div className="card-container">
                <div
                  className="card-img"
                  id="card1"
                  onClick={
                    window.innerWidth >= 1440
                      ? null
                      : () => setFlipCard1((prev) => !prev)
                  }
                  onMouseEnter={
                    window.innerWidth >= 1440
                      ? () => setFlipCard1((prev) => !prev)
                      : null
                  }
                  onMouseLeave={
                    window.innerWidth >= 1440
                      ? () => setFlipCard1((prev) => !prev)
                      : null
                  }
                >
                  <div className="img">
                    <GiClick />
                  </div>
                  <div className="back">
                    <p>
                      Alex Figer Bork cursou Ciências Econômicas e Administração
                      na FAAP e é certificado em Análise de Empresas por
                      Wharton. Atuou no mercado financeiro pela Walpires,
                      corretora de valores mobiliários como analista sênior e
                      agente autônomo. Em seguida, foi para área de consultoria
                      empresarial, aonde foi consultor sênior na CEA por 4 anos.
                      Após esse período, foi convidado a tornar JuniorPartner,
                      porém decidiu que sua melhor rota seria criar um modelo
                      inovador de consultoria.
                    </p>
                  </div>
                </div>
                <div className="card-text">
                  <h3>Alex Figer Bork</h3>
                  <p>CEO</p>
                </div>
              </div>
            </CardAbout>
            <CardAbout flip={flipCard2} name={'bruno'}>
              <div className="card-container">
                <div
                  className="card-img"
                  id="card2"
                  onClick={
                    window.innerWidth >= 1440
                      ? null
                      : () => setFlipCard2((prev) => !prev)
                  }
                  onMouseEnter={
                    window.innerWidth >= 1440
                      ? () => setFlipCard2((prev) => !prev)
                      : null
                  }
                  onMouseLeave={
                    window.innerWidth >= 1440
                      ? () => setFlipCard2((prev) => !prev)
                      : null
                  }
                >
                  <div className="img">
                    <GiClick />
                  </div>
                  <div className="back">
                    <p>
                      Bruno Haratez Iteanu cursou Relações Internacionais na
                      FAAP, Ciências Econômicas no Mackenzie e concluiu uma
                      pós-graduação em finanças no Insper. Dentre diversas
                      experiências profissionais, ganhou conhecimento no
                      diferente funcionamento e operação do mercado financeiro
                      através de corretoras de valores mobiliários, Asset
                      Management e Boutiques de M&A.
                    </p>
                  </div>
                </div>
                <div className="card-text">
                  <h3>Bruno Haratez Iteanu</h3>
                  <p>CEO</p>
                </div>
              </div>
            </CardAbout>
          </div>
        </section>
      </Container>
    </SobreStyled>
  );
};

export default Sobre;
