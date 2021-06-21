import React, { Component } from 'react'
import Juice from '../assests/juice.png'
import { AiOutlineCloudDownload, AiOutlineInbox, FiSettings, GiThink, AiOutlineStar } from 'react-icons/all'
import { Main } from '../style/StyleFrozen';

export default class Frozen extends Component {
    render() {
        return (
            <Main>
                <div className="img">
                    <img src={Juice} alt="" />
                </div>
                <div className="juice__info">
                    <div className="juice__info-top">
                        <h5>
                            MOTTS'S
                        </h5>
                        <h3>
                            Mott's Unsweetened Applesauce
                        </h3>
                        <h5>
                            Pack size: 24/16.90 oz
                        </h5>
                        <p>
                            Chef Maxwell Applesauce is delicious classic and part of a <br /> healthy diet low in saturated fat with 40% Vitamic C.
                        </p>
                        <a href="*"> <AiOutlineCloudDownload />Download Spec Sheet</a>
                        <hr />
                    </div>
                    <div className="juice__info-bot">
                        <span className="price">
                            $32/Cs
                        </span>
                        <span className="price 2">
                            $730/Plt
                        </span>
                        <p className="lead-time">
                            Approx. Lead Time: <b>12 days</b>
                        </p>
                        <p className="info">
                            Information about product was provided by manufaturer
                        </p>
                        <input type="number" />
                        <button className="add">
                            <span><AiOutlineInbox />Add to Cart</span>

                        </button>
                        <button className="custom">
                            <span>
                                <FiSettings /> Custom Pallet
                            </span>
                         
                        </button>
                        <span>
                            <GiThink />
                        </span>
                        <p className="wishlist">
                            <AiOutlineStar />  Add to wishlist
                        </p>
                    </div>
                </div>
                <div className="juice__right">
                        
                </div>
            </Main>
        )
    }
}
