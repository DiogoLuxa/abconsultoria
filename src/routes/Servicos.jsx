import React from 'react';
import { Container } from 'react-bootstrap';
import CardService from '../components/CardService';

import ServicoStyled from '../styles/Servicos.styled';

const Servicos = () => {
  return (
    <ServicoStyled>
      <Container>
        <div className="services">
          <div className="services-text" data-aos="fade-down">
            <h4>Serviços</h4>
            <h1>Quais soluções oferecemos</h1>
            <div className="line-dec"></div>
          </div>
          <div className="services-cards">
            <CardService dataAos="zoom-in" dataAosDelay="150">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M22 11h-1.1c-.5-4.2-3.8-7.5-7.9-7.9V2c0-.5-.5-1-1-1s-1 .5-1 1v1.1c-4.2.4-7.5 3.7-7.9 7.9H2c-.5 0-1 .5-1 1s.5 1 1 1h1.1c.5 4.2 3.8 7.5 7.9 7.9V22c0 .5.5 1 1 1s1-.5 1-1v-1.1c4.2-.5 7.5-3.8 7.9-7.9H22c.5 0 1-.5 1-1s-.5-1-1-1zm-9 7.9V18c0-.5-.5-1-1-1s-1 .5-1 1v.9C7.9 18.5 5.5 16 5.1 13H6c.5 0 1-.5 1-1s-.5-1-1-1h-.9c.4-3.1 2.8-5.5 5.9-5.9V6c0 .5.5 1 1 1s1-.5 1-1v-.9c3.1.4 5.5 2.9 5.9 5.9H18c-.5 0-1 .5-1 1s.5 1 1 1h.9c-.4 3.1-2.8 5.5-5.9 5.9z"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                </g>
              </svg>
              <h4>Consultoria Estratégica</h4>
              <p>Direcionamento Empresarial</p>
              <p>Planejamento Futuro</p>
              <p>Estudos de Tendências Mercadológicas</p>
              <p>Utilitarismo Revertido por Teoria dos Jogos</p>
              <p>Diferencial e Destaque no Mercado</p>
            </CardService>
            <CardService dataAos="zoom-in" dataAosDelay="250">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M21.5 3C20.1 3 19 4.1 19 5.5c0 .7.3 1.4.8 1.8l-3.5 5.8c-.3-.1-.5-.2-.8-.2-.5 0-1 .2-1.4.4l-3.5-3.5c.2-.3.4-.8.4-1.3C11 7.1 9.9 6 8.5 6S6 7.1 6 8.5c0 .7.3 1.4.8 1.8l-3.5 5.8c-.2 0-.5-.1-.8-.1C1.1 16 0 17.1 0 18.5S1.1 21 2.5 21 5 19.9 5 18.5c0-.7-.3-1.4-.8-1.8l3.5-5.8c.2 0 .5.1.8.1.5 0 1-.2 1.4-.4l3.5 3.5c-.2.4-.4.9-.4 1.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.7-.3-1.4-.8-1.8l3.5-5.8c.2 0 .5.1.8.1C22.9 8 24 6.9 24 5.5S22.9 3 21.5 3z"></path>
                </g>
              </svg>
              <h4>Consultoria Financeira</h4>
              <p>Análise Histórica da Empresa</p>
              <p>Diagnósticos Empresariais</p>
              <p>Otimização de Custos</p>
              <p>Projeções de Resultados e Metas</p>
              <p>Ciclo de Implementação com Apoio Completo</p>
            </CardService>
            <CardService dataAos="zoom-in" dataAosDelay="350">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M21 6l-2-2-1.7 1.7C16 4.8 14.6 4.2 13 4.1V3h1c.5 0 1-.5 1-1s-.5-1-1-1h-4c-.5 0-1 .5-1 1s.5 1 1 1h1v1.1c-1.6.1-3 .7-4.3 1.6L5 4 3 6l1.7 1.7C3.6 9.2 3 11 3 13c0 5 4 9 9 9s9-4 9-9c0-2-.6-3.8-1.7-5.3L21 6zm-4.1 11.9L12 13V6c3.9 0 7 3.1 7 7 0 1.9-.8 3.7-2.1 4.9z"></path>
                </g>
              </svg>
              <h4>Consultoria Operacional</h4>
              <p>Estruturação Organizacional</p>
              <p>Treinamento Posicional de C-Level</p>
              <p>Modelagem Gamificada</p>
              <p>Direcionamento Focal de EcoMKT</p>
            </CardService>
            <CardService dataAos="zoom-in" dataAosDelay="450">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M20 22s1-4 0-5-1 1-3 1c-1 0-3-1-3-3s2-3 3-3c2 0 2 2 3 1s0-5 0-5c-1 0-5 1-6 0s1-1 1-3c0-1-1-3-3-3S9 4 9 5c0 2 2 2 1 3S4 8 4 8v12c0 1.1.9 2 2 2h14z"></path>
                </g>
              </svg>
              <h4>Tanque de Pensamento</h4>
              <p>Inovação e Praticidade</p>
              <p>Valuation e Investidores</p>
              <p>Aplicação de Teorias Disruptivas</p>
              <p>Aumento de Faturamento</p>
            </CardService>
          </div>
        </div>
      </Container>
    </ServicoStyled>
  );
};

export default Servicos;
