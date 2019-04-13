import styled from '@emotion/styled/macro';

const Info = styled.nav`
  display: flex;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 0.75rem;
  background: #fff;

  a {
    margin: 0 0.75rem;
    padding: 1rem;
    font-family: 'VT323', monospace;
    font-weight: 100;
    font-size: 26px;
    color: #000;
    text-transform: lowercase;
    letter-spacing: 2px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);

    &:hover {
      text-decoration: none;
    }

    @media (max-width: 600px) {
      font-size: 22px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: space-around;
    right: 1rem;
  }
`;

export default Info;
