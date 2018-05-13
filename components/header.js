import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
export default class MenuExampleStackable extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>

                <Link route="/">
                    <a className="item">
                        <img src='https://react.semantic-ui.com/logo.png' /> &nbsp;&nbsp;<b>Kickstarter</b>
                    </a>
                </Link>


                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Link route="/">
                            Campaign
                     </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link route="/campaigns/new">
                            +
                        </Link>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
