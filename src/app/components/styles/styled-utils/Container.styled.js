import styled from 'styled-components';
import { device } from './device';

export const Container = styled.div`
  width: 90%;

  @media ${device.tablet} {
    width: 73rem;
  }
  margin: 0 auto;
`;
