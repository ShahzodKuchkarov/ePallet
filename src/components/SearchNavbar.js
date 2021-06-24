import React, { Component } from 'react'
import { BsBoxArrowInDown, CgProfile, AiOutlineShoppingCart } from 'react-icons/all'
import Logo from '../assests/logo.svg'
import {Main} from '../style/StyleSearchNavbar'


export default class SearchNavbar extends Component {
    render() {
        return (
            <Main>
                <div className="left">
                    <ul className="left__ul">
                        <li  className="left__ul item">
                            <img src={Logo} alt="" />
                        </li>
                        <li className="left__ul item">
                            <input type="search" placeholder="Type to search" />
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="right__ul">
                        <li className="right__ul item">
                            <a href="*">
                                <BsBoxArrowInDown />   Orders
                            </a>
                        </li>
                        <li className="right__ul item">
                            <a href="*">
                                <AiOutlineShoppingCart /> Cart
                            </a>
                        </li>
                        <li className="right__ul item">
                            <a href="*">
                                <CgProfile /> Profile
                            </a>

                        </li>
                    </ul>
                </div>
            </Main>
        )
    }
}
