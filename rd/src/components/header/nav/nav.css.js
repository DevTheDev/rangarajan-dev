import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      img {
        fill: black;
        filter: contrast(0);
        transition: 0.15s;
        width: 30px;
        height: 30px;
        padding-left: 10px;
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
