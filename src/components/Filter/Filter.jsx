import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';

import { IconSearch } from './Filter.styled';

export class Filter extends Component {
  filterInputId = nanoid();

  handleFilterChange = e => {
    this.props.onChange(e.target.value.trim());
  };
  // BiSearchAlt
  render() {
    const { filterText } = this.props;
    return (
      <FilterBox>
        <IconSearch size={20} />
        <FilterLabel htmlFor={this.filterInputId}>{filterText}</FilterLabel>
        <FilterInput
          id={this.filterInputId}
          type="text"
          name="filter"
          placeholder="Search"
          onChange={this.handleFilterChange}
        />
      </FilterBox>
    );
  }
}
