import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ id: nanoid(), ...this.state });
  };

  render() {
    const { nameText, numberText, btnText } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.nameInputId}>{nameText}</label>
        <input
          onChange={this.handleFormChange}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId}>{numberText}</label>
        <input
          onChange={this.handleFormChange}
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>{btnText}</button>
      </form>
    );
  }
}
