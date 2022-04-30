import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
  padding: 3rem 0 1rem 0;
  .custom-shape-divider-top-1650812547 {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(223% + 1.3px);
      height: 106px;
    }
    .shape-fill {
      fill: #0e194e;
    }
  }
  a {
    font-weight: 500;
    font-size: 1.1rem;
  }
  .brand {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-toggler {
    border: none;
    color: transparent;
  }
  .navbar-nav {
    text-align: center;
  }

  @media (max-width: 992px) {
    .brand {
      .navbar-brand {
        img {
          width: 95%;
        }
      }
    }
  }
  @media (min-width: 992px) {
    a:nth-child(2) {
      margin: 0 1.5rem;
    }
  }
`;

export default HeaderStyled;
