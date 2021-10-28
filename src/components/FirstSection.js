import '../App.css';
import ChrisLovesCharl from "./ChrisLovesCharl.js"

import { React, Component } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInButton = styled.button`
  animation: 7s 0.1s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;

export default class FirstSection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            slideIn: true
        }
    }

    render() {
        return(
            <div className="App">
                <div>
                    <ChrisLovesCharl slideIn={this.state.slideIn} />
                    <FadeInButton className="contButton" onClick={() => {
                            this.setState({ slideIn: false })
                            this.props.nextSection.current.scrollIntoView()
                        }} >
                        Start Adventure
                    </FadeInButton>
                </div>
          </div>
        )
    }
}


  