import React from 'react'
import { Main } from '../style/StyleFooterListItems'

export default function FooterListItems(props) {
    return (
        <Main className="footer">
            <h4 className="footer__heading">{props.heading}</h4>
            <ul className="footer__list">
                <li className="footer__list-item">
                    <a href="*">
                        {props.first}
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="*">
                        {props.second}
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="*">
                        {props.third}
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="*">
                        {props.forth}
                    </a>
                </li>
                <li className="footer__list-item">
                    <a href="*">
                        {props.fifth}
                    </a>
                </li>
            </ul>
        </Main>
    )
}
