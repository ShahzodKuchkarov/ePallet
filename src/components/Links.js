import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Main} from '../style/StyleLinks'

export default class Links extends Component {
    render() {
        return (
            <Main>
                <ul>
                    <li>
                        <Link className="links" to="/food-service">Food Service</Link>
                    </li>
                    <li>
                        <Link className="links" to="/health-beauty">Health&Beauty</Link>
                    </li>
                    <li>
                        <Link className="links" to="/industrial-ingridients">Industrial Ingridients</Link>
                    </li>
                    <li>
                        <Link className="links" to="/beverages">Beverages</Link>
                    </li>
                    <li>
                        <Link className="links" to="/pet-supplies">Pet Supplies</Link>
                    </li>
                    <li>
                        <Link className="links" to="/frozen">Frozen</Link>
                    </li>
                    <li>
                        <Link className="links" to="/cleaning-products">Cleaning Products</Link>
                    </li>
                </ul>

            </Main>
        )
    }
}
