import React, { Component } from 'react'
import Image from '../assests/logo.svg'
import { ImTwitter, GrFacebook } from 'react-icons/all'
import { Main } from '../style/StyleFooter'
import FooterListItems from './FooterListItems'

export default class Footer extends Component {
    render() {
        return (
            <Main>
                <div className="left">
                    <img src={Image} alt="" />
                    <p>
                        ePallet 2017. All right are reserved
                    </p>
                    <div className="left__social-media">
                        <span className="tweet">
                            <span className="icon">
                                <ImTwitter />
                            </span>
                            Tweet
                        </span>
                        <span className="facebook">
                            <span className="icon">
                                <GrFacebook />
                            </span>
                             Like
                        </span>
                    </div>
                </div>
                <FooterListItems
                heading='For Customers'
                first='Returns'
                second='Payment Accounts'
                third='Policies'
                forth='Personal Assistance'
                fifth='Shipping Tracking'
                />
                <FooterListItems
                    heading='For Vendors'
                    first='Pricing'
                    second='Shipment Requirements'
                    third='Balance Recharge'
                    forth='How to Advertise'
                />
                <FooterListItems
                    heading='Company'
                    first='About'
                    second='Jobs'
                    third='Press Kit'
                    forth='Contact'
                    fifth='Privacy & Terms'
                />
                <FooterListItems
                    heading='help center'
                    first='Shipping Rates & Policies'
                    second='Returns & Replacements'
                    third='Manage Your Account'
                    forth='ePallet Assistant'
                    fifth='Help'
                />
            </Main>
        )
    }
}
