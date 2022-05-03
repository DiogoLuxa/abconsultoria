import styled from 'styled-components';

const CardAboutStyled = styled.div`
  width: 350px;
  position: relative;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.13);
  .card-container {
    perspective: 1000px;
    cursor: pointer;
    .card-img {
      transition: all 1s linear;
      transform-style: preserve-3d;
      .img {
        pointer-events: none;
        position: relative;
        width: 80%;
        height: 500px;
        background-image: ${(props) => {
          return `url('./images/${props.name}.webp')`;
        }};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 2;
        backface-visibility: hidden;
        border-radius: 15px;
        position: relative;
        bottom: 20px;
        left: 50px;
      }
      .back {
        pointer-events: none;
        width: 80%;
        height: 500px;
        background-color: hsla(230, 70%, 18%, 1);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        transform: rotateY(180deg);
        padding: 1rem;
        border-radius: 15px;
        bottom: 20px;
        left: 50px;
        border: 1px solid white;

        p {
          pointer-events: none;
          color: #fff;
        }
      }
      ${(props) => {
        return props.flip
          ? 'transform: rotateY(180deg) translate(-30px, 0px)'
          : 'transform: rotateY(0deg)';
      }}
    }
    .card-text {
      text-align: left;
      padding: 2rem;
      h3 {
        font-size: 1.3rem;
      }
      p {
        color: #b3b3b3;
        font-weight: 400;
      }
    }
  }
  @media (min-width: 768px) {
    .card-container {
      .card-img {
        .img {
          width: 100%;
        }
        .back {
          width: 100%;
        }
        ${(props) => {
          return props.flip
            ? 'transform: rotateY(180deg) translate(-100px, 0px)'
            : 'transform: rotateY(0deg)';
        }}
      }
    }
  }
  @media (min-width: 1025px) {
    .card-container {
      .card-img {
        .img {
          svg {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .card-container {
      .card-img {
        .img {
          svg {
            border: 3px solid hsla(0, 0%, 0%, 0.5);
            border-radius: 50px;
            padding: 0.5rem;
            height: 3rem;
            width: 3rem;
            color: hsla(0, 0%, 0%, 0.5);
            position: absolute;
            bottom: 50px;
            transform: translateX(-50%);
            left: 50%;
          }
        }
      }
    }
  }
`;

export default CardAboutStyled;
