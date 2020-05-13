import styled from 'styled-components';
import { emphasis } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  text-align: left;
  line-height: 1.2em;
  padding: 0 29%;
  color: ${emphasis};
  font-size: 24px;
  font-family: georgia, "Times New Roman", serif;

  ${MEDIA.TABLET`
    padding: 0 1em;
  `}
`;
