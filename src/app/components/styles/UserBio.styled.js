import styled from 'styled-components';

export const UserBio = styled.p`
  grid-area: UserBio;
  line-height: 2;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.userBio};
`;
