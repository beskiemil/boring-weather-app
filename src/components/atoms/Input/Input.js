import styled from 'styled-components';

export const Input = styled.input`
  margin: 10px;
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  font-family: 'Montserrat', sans-serif;
  line-height: 16.4px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export default Input;
