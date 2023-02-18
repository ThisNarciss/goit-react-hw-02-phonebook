import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

export class Filter extends Component {
  filterInputId = nanoid();

  handleFilterChange = e => {
    this.props.onChange(e.target.value.trim());
  };

  render() {
    const { filterText } = this.props;
    return (
      <FilterBox>
        <FilterLabel htmlFor={this.filterInputId}>{filterText}</FilterLabel>
        <FilterInput
          id={this.filterInputId}
          type="text"
          name="filter"
          onChange={this.handleFilterChange}
        />
      </FilterBox>
    );
  }
}
