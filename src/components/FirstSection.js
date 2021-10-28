import '../App.css';
import ChrisLovesCharl from "./ChrisLovesCharl.js"
import smoothscroll from 'smoothscroll-polyfill';

import { React, Component } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInButton = styled.button`
  animation: 500ms 2s ${FadeInAnimation};
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
            <div className="sections">
                <div>
                    <ChrisLovesCharl slideIn={this.state.slideIn} />
                    <FadeInButton className="contButton" onClick={() => {
                            this.setState({ slideIn: false })

                            const nextSection = this.props.nextSection.current.getBoundingClientRect().top + window.scrollY
                            
                            smoothscroll.polyfill();
                            window.scroll({
                                top: nextSection,
                                behavior: "smooth"
                            })
                        }} >
                        Start Adventure
                    </FadeInButton>
                </div>
          </div>
        )
    }
}


  