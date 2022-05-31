import { React, useState } from 'react';

import { Container } from 'react-bootstrap';

import ContatoStyled from '../styles/Contato.styled';

const Contato = () => {
  const prevDataForm = {
    name: '',
    email: '',
    tel: '',
    about: '',
    message: '',
  };

  const [dataForm, setDataForm] = useState(prevDataForm);
  const onInputChange = (e) => {
    setDataForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmitClick = (e) => {
    // e.preventDefault();
    setDataForm((prevState) => {
      return { ...prevState, ...prevDataForm };
    });
  };
  return (
    <ContatoStyled>
      <Container>
        <div className="contact">
          <div className="contact-text" data-aos="fade-down">
            <h4>Contato</h4>
            <h1>Contato Para Qualquer Dúvida</h1>
            <div className="line-dec"></div>
          </div>
          <div className="contact-form" data-aos="fade-up" data-aos-delay="150">
            <form
              onSubmit={onSubmitClick}
              method="POST"
              name="contact-form"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={dataForm.name}
                onChange={onInputChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={dataForm.email}
                onChange={onInputChange}
              />
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Telefone"
                value={dataForm.tel}
                onChange={onInputChange}
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
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </Container>
    </ContatoStyled>
  );
};

export default Contato;
