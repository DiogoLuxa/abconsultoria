import styled from 'styled-components';

const ContatoStyled = styled.div`
  /* background-color: salmon; */
  padding-top: 200px;
  margin-bottom: 7rem;
  .contact {
    /* background-color: pink; */
    text-align: center;
    .contact-text {
      margin-bottom: 3rem;
      h4 {
        color: #0e194e;
        font-weight: 700;
      }
      h1 {
        color: #2a2a2a;
        font-weight: bolder;
        text-transform: capitalize;
      }
      .line-dec {
        width: 50px;
        height: 2px;
        background-color: #0e194e;
        margin: 1rem auto;
      }
    }
    .contact-form {
      /* background-color: aliceblue; */
      form {
        & * {
          width: 100%;
        }
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        justify-content: center;
        align-items: center;

        input,
        textarea {
          padding: 0.5rem 1rem;
          border: none;
          border-bottom: 1px solid #b3b3b3;
        }
        button {
          border: none;
          background-color: #0e194e;
          color: #fff;
          padding: 0.5rem 0;
          border-radius: 5px;
          font-size: 1.3rem;
          letter-spacing: 2px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .contact {
      .contact-form {
        form {
          width: 70%;
        }
      }
    }
  }
`;

export default ContatoStyled;
