import styled from 'styled-components';
import { toolbar } from 'constants/theme';
import { emphasis } from 'constants/theme';

export const Container = styled.header`
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
