import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
