import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: #0e194e;
  padding: 1rem;
  .footer-navbar {
    display: grid;
    row-gap: 1rem;
    text-align: center;
    .footer-navbar-brand {
      /* background-color: salmon; */
      h2 {
        color: #fff;
        span {
          font-weight: 300;
        }
      }
      p {
        color: #fff;
      }
    }
    .footer-navbar-nav {
      /* background-color: aliceblue; */
      a {
        color: #fff;
      }
    }
    .footer-navbar-socials {
      /* background-color: greenyellow; */
      display: flex;
      justify-content: center;
      align-items: center;
      a:nth-child(2) {
        margin: 0 1rem;
      }
    }
  }
  .copyright {
    color: #fff;
    text-align: center;
    margin-top: 2rem;

    a {
      color: #f55353;
    }
  }
  @media (min-width: 1024px) {
    .footer-navbar {
      grid-template-columns: repeat(3, 1fr);
      .footer-navbar-brand {
        text-align: left;
      }
    }
  }
`;

export default FooterStyled;
