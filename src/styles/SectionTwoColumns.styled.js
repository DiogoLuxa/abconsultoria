import styled from 'styled-components';

const SectionTwoColumnsStyled = styled.section`
  width: 100%;
  text-align: center;
  display: grid;
  row-gap: 3rem;
  margin-bottom: 7rem;
  position: relative;
  
  &:before {
    content: '';
    background-color: #e5e5f7;
    opacity: 0.10;
    background-image:  linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%);
    background-position:  10px 0, 10px 0, 0 0, 0 0;
    background-size: 10px 10px;
    background-repeat: repeat;
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: ${(props) => {
      return props.whoFirst === 'img' ? '210px' : '10px';
    }};
    left: ${(props) => {
      return props.whoFirst === 'img' ? null : '5px';
    }};
    right: ${(props) => {
      return props.whoFirst === 'img' ? '50px' : null;
    }};
    z-index: -1
  }
  .text-column {
    h3, h4 {
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
    p {
      color: #b3b3b3;
      margin: 2rem 0;

      span {
          color: #FEB139;
      }
    }
    a {
      padding: 0;
      color: #f55353;
      border: 1.9px solid #f55353;
      display: inline-block;
      padding: 0.3rem 1.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: 1px;
      border-radius: 5px;
    }
    a:hover {
      color: white;
      background-color: #f55353;
    }
  }
  .img-column {
    text-align: center;
    img {
      width: 60%;
      border-left: ${(props) => {
        return props.whoFirst === 'img' ? '4px dashed #ccc' : null;
      }};
      box-shadow: -50px 20px 0px 4px rgba(0,0,0,0.05);
    }
  }
  @media (min-width: 1024px) {
    &:before {
      top: ${(props) => {
        return props.whoFirst === 'img' ? '15px' : '-10px';
      }};
      left: ${(props) => {
        return props.whoFirst === 'img' ? null : '-35px';
      }};
      right: ${(props) => {
        return props.whoFirst === 'img' ? '100px' : null;
      }};
    }
    text-align: left;
    grid-template-columns: repeat(2, 1fr);
    .text-column {
      .line-dec {
        margin: 1rem 0;
      }
    }
    .img-column {
      text-align: ${(props) => {
        return props.whoFirst === 'img' ? 'left' : 'right';
      }}
      }
      img {
        width: 70%;
      }
    }
  }
`;

export default SectionTwoColumnsStyled;
