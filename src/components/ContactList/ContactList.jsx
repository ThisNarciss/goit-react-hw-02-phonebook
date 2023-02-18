import { Component } from 'react';
import { Item, List, ButtonDel, Text } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contactsList, filterName, onBtnClick } = this.props;

    const contacts = contactsList.filter(item => {
      return item.name.toLowerCase().includes(filterName.toLowerCase());
    });

    return (
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>
                {name}: {number}
              </Text>
              <ButtonDel
                type="button"
                onClick={() => {
                  onBtnClick(id);
                }}
              >
                Delete
              </ButtonDel>
            </Item>
          );
        })}
      </List>
    );
  }
}
