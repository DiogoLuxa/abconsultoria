import styled from 'styled-components';

const ServicoStyled = styled.div`
  padding-top: 200px;
  margin-bottom: 7rem;
  .services {
    text-align: center;
    .services-text {
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
    .services-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }
`;

export default ServicoStyled;
