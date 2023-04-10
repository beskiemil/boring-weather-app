import styled from 'styled-components';

export const Box = styled.div`
  min-width: 250px;
  border-radius: 25px;
  padding: 0 15px;
  margin: 5px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Box;
