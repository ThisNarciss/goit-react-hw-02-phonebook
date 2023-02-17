import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contactsList, filterName, onBtnClick } = this.props;

    const contacts = contactsList.filter(item => {
      return item.name.toLowerCase().includes(filterName.toLowerCase());
    });

    return (
      <ul>
        {contacts.map(({ id, name, number }, idx, array) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => {
                  onBtnClick(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
