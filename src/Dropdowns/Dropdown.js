import React, { Component, Children } from 'react';
import { DropdownItem, Btn, ListItem, Content } from './styledComponents';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListDisplayed: false,
      selectorValue: 'choose your destiny',
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
          <ul>
            {Children.map(this.props.children, child => (
              <ListItem
                onClick={() => this.setState({ selectorValue: child, isListDisplayed: false })}
              >{child}
              </ListItem>
              ))
            }
          </ul>
        </Content>
        }
      </DropdownItem>
    );
  }
}
export default Dropdown;
