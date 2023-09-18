import React, { useState } from 'react';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

export default function App() {
  const [contacts, setContacts] = useState([]);
  const settingEnteredInputsInState = (contact) => {
    setContacts([...contacts, contact]);
  }
  return (
    <div>
      <Header />
      <AddContact settingEnteredInputsInState={settingEnteredInputsInState} />
      <ContactList contacts={contacts} />
    </div>
  )
}