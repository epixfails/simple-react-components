import React, { Component, Children } from 'react';
import { DropdownItem, Btn, ListItem, Content, Input } from './styledComponents';

class DropdownSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListDisplayed: false,
      selectorValue: 'choose your destiny',
      searchValue: '',
    };
  }
  render() {
    return (
      <DropdownItem>
        <Btn
          active={this.state.isListDisplayed}
          onClick={() => this.setState({ isListDisplayed: !this.state.isListDisplayed })}
        >
          {this.state.selectorValue}
        </Btn>
        {this.state.isListDisplayed &&
        <Content>
          <Input onChange={event => this.setState({ searchValue: event.target.value })} />
          <ul>
            {Children.map(this.props.children, child => {
              if (child.toLowerCase().indexOf(this.state.searchValue) != -1) {
                return (
                  <ListItem
                    onClick={() => this.setState(
                      { selectorValue: child, isListDisplayed: false, searchValue: '' }
                    )}
                  >{child}
                  </ListItem>
                );
              }
            })
          }
          </ul>
        </Content>
        }
      </DropdownItem>
    );
  }
}
export default DropdownSearch;
