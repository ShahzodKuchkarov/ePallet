import React, { Component } from 'react'
import { Main } from '../style/StyleTopNavbar'
export default class TopNavbar extends Component {
    render() {
        return (
            <Main>
                <div className="inner">
                    <ul className="list list-left">
                        <li>
                            <select name="" id="">
                                <option value="">En</option>
                                <option value="">Rus</option>
                            </select>
                        </li>

                        <li>
                            <select name="" id="">
                                <option value="">Austin,Tx</option>
                                <option value="">Austin,Tx</option>
                            </select>
                        </li>
                    </ul>

                    <ul className="list list-right">
                        <li>
                            +1(801)532 6220
                        </li>
                        <li>
                            Help Center
                        </li>
                    </ul>
                </div>

            </Main>

        )
    }
}
