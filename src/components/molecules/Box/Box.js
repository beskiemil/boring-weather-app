import styled from 'styled-components';

export const Box = styled.div`
  border-radius: 25px;
  padding: 0 20px;
  margin: 10px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Box;
