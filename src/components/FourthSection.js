import { React, Component } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";
import smoothscroll from 'smoothscroll-polyfill';

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInP = styled.p`
  animation: 1s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP2 = styled.p`
  animation: 1s 1s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP3 = styled.p`
  animation: 1s 2s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP4 = styled.p`
  animation: 2s 2500ms ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP5 = styled.p`
  animation: 3s 3000ms ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP6 = styled.p`
  animation: 4s 3500ms ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP7 = styled.p`
  animation: 5s 4000ms ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP8 = styled.p`
  animation: 1s 5s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;
const FadeInP9 = styled.p`
  animation: 1s 7s ${FadeInAnimation};
  animation-fill-mode: forwards;
`;

export default class ThirdSection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startAnimation: false
        }
    }

    componentDidUpdate() {
        const nextSection = this.props.nextSection.current.getBoundingClientRect().top + window.scrollY
                            
        smoothscroll.polyfill();
        window.scroll({
            top: nextSection,
            behavior: "smooth"
        })
    }

    render() {
        const animationBlock = this.state.startAnimation 
            ? (
                <div>
                    <FadeInP className="paraText" style={{opacity: 0}}>All of those memories put together are the reasons why</FadeInP>
                    <FadeInP2 className="bigFont" style={{opacity: 0}}>I LOVE YOU</FadeInP2>
                    <FadeInP3 className="mediumFont" style={{opacity: 0}}>MY</FadeInP3>
                    <FadeInP4 className="mediumFont" style={{opacity: 0}}>SMART</FadeInP4>
                    <FadeInP5 className="mediumFont" style={{opacity: 0}}>SEXY</FadeInP5>
                    <FadeInP6 className="mediumFont" style={{opacity: 0}}>BEAUTFIUL</FadeInP6>
                    <FadeInP7 className="mediumFont" style={{opacity: 0}}>GIRL</FadeInP7>
                    <FadeInP8 className="paraText" style={{opacity: 0}}>Because everyday I want to be around you and when I’m not those days suck.</FadeInP8>
                    <FadeInP9 className="mediumFont" style={{opacity: 0}}>HAPPY ANNIVERSARY</FadeInP9>
                    <FadeInP9 className="paraText" style={{opacity: 0, textTransform: 'none'}}>Chris.</FadeInP9>
                </div>
            )
            : null

        return(
            <div className="sections" style={{marginTop: (this.state.startAnimation) ? '1vh' : '0'}}>
                <div>
                    {animationBlock}
                    <button 
                        style={{opacity: this.state.startAnimation ? 0 : 1}}
                        className="contButton" 
                        onClick={() => {
                            this.setState({
                                startAnimation: true
                            })
                        }} 
                    >
                        Continue
                    </button>
                </div>
            </div>
        )
    }
}