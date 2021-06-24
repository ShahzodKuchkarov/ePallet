import React, { Component } from 'react'
import { Main } from '../style/StyleOverview';
import Nutritionals from './Nutritionals';

export default class Overview extends Component {

    state = {
        tabName: '',
    }

    handleCLick = e => {
        const { nodeValue } = e.target.firstChild;
        console.log(nodeValue)
         this.setState({
            tabName: nodeValue
        }); 
        console.log(this.state)
    }

    render() {
        const { tabName } = this.state
        return (
            <Main>

                <ul>
                    <li
                        name={"tabName"}
                        onClick={this.handleCLick}
                        firstChild={tabName}
                    >
                        Overview
                    </li>
                    <li
                        name={"tabName"}
                        onClick={this.handleCLick}
                        firstChild={tabName}
                    >
                        Nutritionals
                    </li>
                    <li
                        name={"tabName"}
                        onClick={this.handleCLick}
                        firstChild={tabName}
                    >
                        Palette/Case Configuration
                    </li>
                    <li
                        name={"tabName"}
                        onClick={this.handleCLick}
                        firstChild={tabName}
                    >
                        Shipping/Storage
                    </li>
                    <li
                        name={"tabName"}
                        onClick={this.handleCLick}
                        firstChild={tabName}
                    >
                        Docs & Certs
                    </li>
                </ul>
                {
                    tabName === 'Nutritionals' ?
                        <Nutritionals />
                        :
                        null
                }

                
            </Main>
        )
    }
}
