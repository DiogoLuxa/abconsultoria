import styled from 'styled-components';

const SobreStyled = styled.div`
  padding-top: 200px;
  width: 100%;
  margin-bottom: 7rem;
  .equipe {
    text-align: center;
    margin-bottom: 3rem;
    .equipe-text {
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
    .equipe-img {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 7rem;
      row-gap: 5rem;
    }
  }
`;

export default SobreStyled;
