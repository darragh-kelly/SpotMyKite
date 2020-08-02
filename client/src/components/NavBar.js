import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }); }

  render () {
    const { activeItem } = this.state

    return (
      <div style={{ width: "95vw", paddingTop: "2vh" }} >
        <Menu style={{ backgroundColor: "rgb(255,255,255,0.7)" }} >
          <Menu.Item
            href="/"
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/hello"
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/world"
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      </div >
    )
  }
}