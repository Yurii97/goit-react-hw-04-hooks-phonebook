import Contact from '../Contact/Contact';
import { ListStyled } from './ContactList.styled';

export default function ContactList({ contacts, filter, deleteContact }) {
  return (
    <>
      <section>
        <ListStyled>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  deleteContact={deleteContact}
                />
              </li>
            ))}
        </ListStyled>
      </section>
    </>
  );
}
