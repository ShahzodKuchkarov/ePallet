import React from 'react';
import { Main } from '../style/StylePriceCard';

export default function PriceCard(props) {
    return (
        <Main>
            <div className="top">
                <p>
                    {props.para}
                </p>
            </div>
            <div className="bot">
                <h3 className="price">
                    {props.price}
                </h3>
                <h5 className="oz">
                    {props.oz}
                </h5>
                <h5 className="save">
                    {props.save}
                </h5>
            </div>
        </Main>
    )
}
