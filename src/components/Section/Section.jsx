import { Component } from 'react';
import { SectionBox, Title } from './Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionBox>
        <Title>{title}</Title>
        {children}
      </SectionBox>
    );
  }
}
