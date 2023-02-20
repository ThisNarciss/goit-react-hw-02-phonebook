import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  UserForm,
  InputBox,
  Label,
  ButtonAdd,
  FormInput,
  Error,
} from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  number: yup.string().min(12).max(13).trim().required(),
});

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    nameText: PropTypes.string.isRequired,
    numberText: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();

  // Варіант з onChange

  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  handleFormSubmit = (values, { resetForm }) => {
    this.setState({ ...values }, () => {
      this.props.onSubmit({ id: nanoid(), ...this.state });
    });
    resetForm();
  };

  render() {
    const { nameText, numberText, btnText } = this.props;

    return (
      <Formik
        validationSchema={schema}
        initialValues={this.state}
        onSubmit={this.handleFormSubmit}
      >
        <UserForm>
          <InputBox>
            <Label htmlFor={this.nameInputId}>{nameText}</Label>
            <FormInput
              // onChange={this.handleFormChange}
              id={this.nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Error name="name" components="p" />
          </InputBox>

          <InputBox>
            <Label htmlFor={this.numberInputId}>{numberText}</Label>
            <FormInput
              // onChange={this.handleFormChange}
              id={this.numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Error name="number" component="p" />
          </InputBox>

          <ButtonAdd type="submit">{btnText}</ButtonAdd>
        </UserForm>
      </Formik>
    );
  }
}
