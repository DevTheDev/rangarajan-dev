import styled from 'styled-components';
import { toolbar } from 'constants/theme';
import { emphasis } from 'constants/theme';

export const Container = styled.header`
  @import url('https://use.typekit.net/fdq0hwg.css');
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: ${toolbar};
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 3.4rem;
    &:hover {
      color: ${emphasis};
    }
  }
`;

export const Signature = styled.header`
  text-decoration: none;
  font-family: 'shabby-chic', sans-serif;
  font-style: normal;
  font-weight: 800;
`;
