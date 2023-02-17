import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Filter extends Component {
  filterInputId = nanoid();

  handleFilterChange = e => {
    this.props.onChange(e.target.value.trim());
  };

  render() {
    const { filterText } = this.props;
    return (
      <div>
        <label htmlFor={this.filterInputId}>{filterText}</label>
        <input
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}
