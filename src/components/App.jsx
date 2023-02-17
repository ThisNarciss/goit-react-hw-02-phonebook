import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onBtnDeleteClick = id => {
    this.setState(prevState => {
      const filter = prevState.contacts.filter(contacts => contacts.id !== id);
      return { contacts: [...filter] };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={obj => {
              if (
                contacts.find(
                  contact =>
                    contact.name.toLowerCase() === obj.name.toLowerCase()
                )
              ) {
                alert(`${obj.name} is already in contacts`);
                return;
              }
              this.setState(prevState => {
                console.log(prevState.contacts);
                return { contacts: [...prevState.contacts, obj] };
              });
            }}
            nameText="Name"
            numberText="Number"
            btnText="Add contact"
          />
        </Section>
        <Section title="Contacts">
          <Filter
            filterText="Find contacts by name"
            onChange={name => this.setState({ filter: name })}
          />
          <ContactList
            contactsList={contacts}
            filterName={filter}
            onBtnClick={this.onBtnDeleteClick}
          />
        </Section>
      </div>
    );
  }
}
