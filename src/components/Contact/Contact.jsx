import { ButtonStyled } from './Contact.styled';

export default function Contact({ id, name, number, deleteContact }) {
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <ButtonStyled type="button" onClick={() => deleteContact(id)}>
        Delete
      </ButtonStyled>
    </>
  );
}
