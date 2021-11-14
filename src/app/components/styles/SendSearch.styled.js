import styled from 'styled-components';
import { device } from './styled-utils/device';

export const SendSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-size: 1.3rem;
    display: none;
    color: ${({ theme }) => theme.errorText};
    font-weight: bold;

    @media ${device.tablet} {
      display: block;
    }
  }
`;
