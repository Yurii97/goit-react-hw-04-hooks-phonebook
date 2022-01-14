import styled from '@emotion/styled';

export const FormStyled = styled.form`
  /* display: flex;
  flex-direction: column; */
  padding: 20px;
  width: 300px;
  border: 1px solid black;

  & label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  & button {
    margin-top: 20px;
    :hover,
    :focus {
      background-color: blue;
      color: white;
    }
  }
`;
