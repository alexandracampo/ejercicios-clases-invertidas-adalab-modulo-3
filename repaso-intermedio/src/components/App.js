import '../styles/App.scss';
import { useState, useEffect } from 'react';
import data from '../data/data.json'

function App() {

  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  const renderContacts = () => {
    return contacts.map((contact, i) => {

      return <li className="contact__item" key={i}>
        <p className="contact__name">
          <label className="contact__label">Nombre:</label>{contact.name} {contact.lastname}
        </p>
        <p className="contact__phone">
          <label className="contact__label">Teléfono:</label>
          <a href={`tel:${contact.phone}`} title={`Pulsa aquí para llamar a ${contact.name}`}>
            {contact.phone}
          </a>
        </p>
        <p className="contact__mail">
          <label className="contact__label">Email:</label>
          <a href={`mailto:${contact.email}`} title={`Pulsa aquí para escribir a ${contact.name}`}>
            {contact.email}
          </a>
        </p>
      </li>
    });
  }

  const handleSearch = (ev) => {
    console.log(ev.target.value);
    setSearch(ev.target.value);
    console.log(contacts);
  }

  useEffect(() => {
    console.log('entra en useEffect')
    const filteredContacts = contacts.filter((contact) => {
      console.log("Contact Name: ", contact.name)
      console.log("Search: ", search)
      return contact.name === search
    })
    console.log("Filtered Contacts: ", filteredContacts)
    if (filteredContacts.length > 0) {
      console.log("We have filtered contacts: ", filteredContacts)
      setContacts([...filteredContacts]);
    } else {
      setContacts([...data]);
    }
  }, [search]);


  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleSearch}
          />
        </form>
      </header>

      <main>
        <ul className="contact__list">
          {renderContacts()}
        </ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
