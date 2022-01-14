import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error('contact with such name already exists');
      return;
    }
    setContacts(prevState => [newContact, ...prevState]);
    toast.success('contact added');
  };

  const deleteContact = idBtn => {
    setContacts(prevState => prevState.filter(contact => contact.id !== idBtn));
    toast.success('delete is complete');
  };

  const handleChangeFilter = e => {
    const value = e.target.value;
    setFilter(value);
  };

  return (
    <>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </>
  );
}

export default App;
