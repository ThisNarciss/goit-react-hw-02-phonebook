import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contactsList, filterName, onBtnClick } = this.props;

    return (
      <ul>
        {contactsList.map(({ id, name, number }) => {
          if (name.toLowerCase().includes(filterName.toLowerCase())) {
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
          }
        })}
      </ul>
    );
  }
}
