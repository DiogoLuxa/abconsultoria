import { React, useState, useRef } from 'react';

import { Container } from 'react-bootstrap';

import ContatoStyled from '../styles/Contato.styled';

import emailjs from '@emailjs/browser';

const Contato = () => {
  const prevDataForm = {
    name: '',
    email: '',
    tel: '',
    about: '',
    message: '',
  };

  const [dataForm, setDataForm] = useState(prevDataForm);
  const [onSubmitMessage, setonSubmitMessage] = useState(false);

  const form = useRef();

  const onInputChange = (e) => {
    setDataForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_0cxlgyp', form.current, 'zDiVPISibjbXnM71T')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setDataForm((prevState) => {
      return { ...prevState, ...prevDataForm };
    });
    setonSubmitMessage(true);
  };

  return (
    <ContatoStyled formSubmit={onSubmitMessage}>
      <Container>
        <div className="contact">
          <div className="contact-text" data-aos="fade-down">
            <h4>Contato</h4>
            <h1>Contato Para Qualquer Dúvida</h1>
            <div className="line-dec"></div>
          </div>
          <div className="contact-form" data-aos="fade-up" data-aos-delay="150">
            <form
              ref={form}
              onSubmit={onSubmitClick}
              method="POST"
              name="contact-form"
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={dataForm.name}
                onChange={onInputChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={dataForm.email}
                onChange={onInputChange}
                required
              />
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Telefone"
                value={dataForm.tel}
                onChange={onInputChange}
                required
              />
              <input
                type="text"
                id="about"
                name="about"
                placeholder="Assunto"
                value={dataForm.about}
                onChange={onInputChange}
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                id="message"
                cols="30"
                rows="10"
                value={dataForm.message}
                onChange={onInputChange}
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <p className="submit-message">Mensagem enviada</p>
        </div>
      </Container>
    </ContatoStyled>
  );
};

export default Contato;
