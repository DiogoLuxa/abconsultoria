import { React, useEffect } from 'react';

import Map from '../components/Map';
import { Link } from 'react-router-dom';

import SectionTwoColumns from '../components/SectionTwoColumns';

import HomeStyled from '../styles/Home.styled';
import { Container } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <HomeStyled>
      <Container>
        <SectionTwoColumns whoFirst="text">
          <div className="text-column" data-aos="fade-right">
            <h3>AB Consultoria</h3>
            <h1>
              Nós transformamos empresas em negócios estruturados e lucrativos
            </h1>
            <p>
              Conheça e aplique métodos modernos e eficazes para organizar a sua
              empresa e prepará-la para oportunidades que levarão o seu negócio
              para outro patamar
            </p>
            <Link to="/contato" className="nav-link">
              Contato
            </Link>
          </div>
          <div
            className="img-column"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <img src="./images/analytics.svg" alt="analytics avatar" />
          </div>
        </SectionTwoColumns>
        <SectionTwoColumns whoFirst="img">
          <div
            className="img-column"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <img src="./images/goingup.svg" alt="going up avatar" />
          </div>
          <div className="text-column" data-aos="fade-left">
            <h4>Sobre Nós</h4>
            <h1>Consultoria com Propósito</h1>
            <div className="line-dec"></div>
            <p>
              Fundada na cidade de São Paulo em 2014, por Alex Figer Bork e
              Bruno Iteanu, a AB Consultoria atendeu dezenas de clientes dos
              mais
              <span> diversos segmentos</span>, se especializando em{' '}
              <span>pequenas e médias empresas</span>. Através de métodos
              clássicos sob visão inovadora, a AB consultoria atingiu uma{' '}
              <span>taxa de sucesso de mais de 90%</span>. Veja um pouco mais de
              nossa história e nosso fundadores.
            </p>
            <Link to="/sobre" className="nav-link">
              Saiba Mais
            </Link>
          </div>
        </SectionTwoColumns>
      </Container>
      <section className="services">
        <div className="custom-shape-divider-top-1650834975">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="services-wrapper">
          <div className="services-text" data-aos="fade-down">
            <h4>Nossos Serviços</h4>
            <h1>Soluções comerciais para o seu negócio</h1>
            <div className="line-dec"></div>
          </div>
          <div
            className="services-img"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M22 11h-1.1c-.5-4.2-3.8-7.5-7.9-7.9V2c0-.5-.5-1-1-1s-1 .5-1 1v1.1c-4.2.4-7.5 3.7-7.9 7.9H2c-.5 0-1 .5-1 1s.5 1 1 1h1.1c.5 4.2 3.8 7.5 7.9 7.9V22c0 .5.5 1 1 1s1-.5 1-1v-1.1c4.2-.5 7.5-3.8 7.9-7.9H22c.5 0 1-.5 1-1s-.5-1-1-1zm-9 7.9V18c0-.5-.5-1-1-1s-1 .5-1 1v.9C7.9 18.5 5.5 16 5.1 13H6c.5 0 1-.5 1-1s-.5-1-1-1h-.9c.4-3.1 2.8-5.5 5.9-5.9V6c0 .5.5 1 1 1s1-.5 1-1v-.9c3.1.4 5.5 2.9 5.9 5.9H18c-.5 0-1 .5-1 1s.5 1 1 1h.9c-.4 3.1-2.8 5.5-5.9 5.9z"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                </g>
              </svg>
              <h5>
                Consultoria <span>Estratégica</span>
              </h5>
            </div>
            <div className="service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M21.5 3C20.1 3 19 4.1 19 5.5c0 .7.3 1.4.8 1.8l-3.5 5.8c-.3-.1-.5-.2-.8-.2-.5 0-1 .2-1.4.4l-3.5-3.5c.2-.3.4-.8.4-1.3C11 7.1 9.9 6 8.5 6S6 7.1 6 8.5c0 .7.3 1.4.8 1.8l-3.5 5.8c-.2 0-.5-.1-.8-.1C1.1 16 0 17.1 0 18.5S1.1 21 2.5 21 5 19.9 5 18.5c0-.7-.3-1.4-.8-1.8l3.5-5.8c.2 0 .5.1.8.1.5 0 1-.2 1.4-.4l3.5 3.5c-.2.4-.4.9-.4 1.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.7-.3-1.4-.8-1.8l3.5-5.8c.2 0 .5.1.8.1C22.9 8 24 6.9 24 5.5S22.9 3 21.5 3z"></path>
                </g>
              </svg>
              <h5>
                Consultoria <span>Financeira</span>
              </h5>
            </div>
            <div className="service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M21 6l-2-2-1.7 1.7C16 4.8 14.6 4.2 13 4.1V3h1c.5 0 1-.5 1-1s-.5-1-1-1h-4c-.5 0-1 .5-1 1s.5 1 1 1h1v1.1c-1.6.1-3 .7-4.3 1.6L5 4 3 6l1.7 1.7C3.6 9.2 3 11 3 13c0 5 4 9 9 9s9-4 9-9c0-2-.6-3.8-1.7-5.3L21 6zm-4.1 11.9L12 13V6c3.9 0 7 3.1 7 7 0 1.9-.8 3.7-2.1 4.9z"></path>
                </g>
              </svg>
              <h5>
                Consultoria <span>Operacional</span>
              </h5>
            </div>
            <div className="service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#0E194E">
                  <path d="M20 22s1-4 0-5-1 1-3 1c-1 0-3-1-3-3s2-3 3-3c2 0 2 2 3 1s0-5 0-5c-1 0-5 1-6 0s1-1 1-3c0-1-1-3-3-3S9 4 9 5c0 2 2 2 1 3S4 8 4 8v12c0 1.1.9 2 2 2h14z"></path>
                </g>
              </svg>
              <h5>
                Tanque de <span>Pensamentos</span>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <section className="contact">
          <div className="contact-text" data-aos="fade-down">
            <h4>Contate-nos</h4>
            <h1>Saiba mais sobre nossas consultorias</h1>
            <div className="line-dec"></div>
          </div>
          <div className="contact-wrapper">
            <div className="contact-map">
              <Map />
            </div>
            <div className="contact-data">
              <div className="contact-data-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#0E194E">
                    <path d="M15 17c-2 0-8-6-8-8 0-1 2-2 2-3S6 0 5 0 0 3 0 4c0 8 12 20 20 20 1 0 4-4 4-5s-5-4-6-4-2 2-3 2z"></path>
                  </g>
                </svg>
                <p>+55 (11) 2696-4188</p>
              </div>
              <div className="contact-data-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#0E194E">
                    <path d="M1 5v14l7-7-7-7zm22 14V5l-7 7 7 7zm-11-3l-3.5-3.5L1 20h22l-7.5-7.5L12 16zM1 4l11 11L23 4H1z"></path>
                  </g>
                </svg>

                <p>contato@ab-consultoria.com</p>
              </div>
              <div className="contact-data-card">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#0E194E">
                    <path d="M12 1C7.6 1 4 4.6 4 9s8 14 8 14 8-9.6 8-14-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                  </g>
                </svg>

                <p>
                  Av. Faria Lima 1811, cj. 901
                  <br /> Jardim Paulista, São Paulo, SP
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </HomeStyled>
  );
};

export default Home;
