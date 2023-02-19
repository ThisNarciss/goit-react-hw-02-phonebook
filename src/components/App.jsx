import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ChildrenBox, Container } from './App.styled';

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
      const filter = prevState.contacts.filter(contact => contact.id !== id);

      return { contacts: [...filter] };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={obj => {
              if (
                contacts.find(
                  contact =>
                    contact.name.toLowerCase() === obj.name.toLowerCase()
                )
              ) {
                Notify.failure(`${obj.name} is already in contacts`);
                return;
              } else {
                Notify.success(`${obj.name} add to the contacts`);
              }
              this.setState(prevState => {
                return { contacts: [...prevState.contacts, obj] };
              });
            }}
            nameText="Name"
            numberText="Number"
            btnText="Add contact"
          />
        </Section>
        <Section title="Contacts">
          <ChildrenBox>
            <Filter
              filterText="Find contacts by name"
              onChange={name => this.setState({ filter: name })}
            />
            <ContactList
              contactsList={contacts}
              filterName={filter}
              onBtnClick={this.onBtnDeleteClick}
            />
          </ChildrenBox>
        </Section>
      </Container>
    );
  }
}
