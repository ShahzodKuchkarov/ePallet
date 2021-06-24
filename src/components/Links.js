import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Main } from '../style/StyleLinks'

export default class Links extends Component {
    render() {
        return (
            <Main>
                <ul>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/food-service">Food Service</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/health-beauty">Health&Beauty</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/industrial-ingridients">Industrial Ingridients</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/beverages">Beverages</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/pet-supplies">Pet Supplies</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/frozen">Frozen</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="links-active" to="/cleaning-products">Cleaning Products</NavLink>
                    </li>
                </ul>

            </Main>
        )
    }
}
