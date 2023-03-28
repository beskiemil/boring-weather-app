import styled from 'styled-components';

export const Box = styled.div`
  min-width: 300px;
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Box;
