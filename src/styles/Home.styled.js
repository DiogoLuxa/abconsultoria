import styled from 'styled-components';

const HomeStyled = styled.section`
  .services {
    position: relative;
    margin-bottom: 7rem;
    .custom-shape-divider-top-1650834975 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;

      svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 44px;
      }

      .shape-fill {
        fill: #ccc;
      }
    }
    background-color: hsla(245, 17%, 29%, 0.1);
    padding: 5rem 0;
  }
  .services-wrapper {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    .services-text {
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
      margin-bottom: 3rem;
    }
    .services-img {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      .service {
        background-color: #ebebee;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 90px;
          height: 50px;
          background-color: black;
          bottom: 3px;
          right: 3px;
          z-index: -1;
          transform-origin: left;
          transform: skew(12deg) rotate(10deg);
          filter: blur(5px) opacity(6%);
        }
        padding: 1rem;
        h5 {
          color: #0e194e;
          font-weight: 400;

          span {
            color: #f55353;
          }
        }
        text-align: center;
        svg {
          width: 75px;
        }
      }
    }
  }
  .contact {
    text-align: center;
    padding: 1rem;
    margin-bottom: 7rem;

    .contact-text {
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
      margin-bottom: 3rem;
    }
    .contact-wrapper {
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.13);
      display: grid;
      align-items: center;
      row-gap: 2rem;
      .contact-map {
        width: 100%;
        height: 500px;
      }
      .contact-data {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        .contact-data-card {
          svg {
            width: 30px;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .contact {
      .contact-wrapper {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

export default HomeStyled;
