import styled from 'styled-components';

const ButtonStyled = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 2.5rem;
  right: 2.5rem;

  .btn-whats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    background-color: #1ad03f;
    transition: transform 0.5s;
    #btn-whats {
      font-size: 3rem;
      color: #fff;
    }
  }
  .btn-whats-container:hover {
    transform: scale(1.2);
  }
`;

export default ButtonStyled;
