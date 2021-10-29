import '../App.css';
import Img from 'react-cool-img';

import { React, Component } from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";

import loadingGif from '../images/loading.gif'
import one from '../images/1.JPG'
import two from '../images/2.JPG'
import three from '../images/3.JPG'
import four from '../images/4.JPG'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.JPG'
import ten from '../images/10.jpg'
import eleven from '../images/11.JPG'
import twelve from '../images/12.JPG'
import thirteen from '../images/13.jpg'
import fourten from '../images/14.jpg'
import fifteen from '../images/15.jpg'
import sixteen from '../images/16.jpg'
import seventeen from '../images/17.jpg'
import eighteen from '../images/18.jpg'

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 500ms ${FadeInAnimation};
  animation-fill-mode: forwards;
`;

export default class ThirdSection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showImages: false
        }
    }

    render() {
        const gallery = (this.state.showImages) 
            ? (
                <FadeInDiv style={{opacity: 0, width: '100%'}}>
                    <Img className="images" src={one} placeholder={loadingGif} />
                    <Img className="images" src={two} placeholder={loadingGif} />
                    <Img className="images" src={three} placeholder={loadingGif} />
                    <Img className="images" src={four} placeholder={loadingGif} />
                    <Img className="images" src={five} placeholder={loadingGif} />
                    <Img className="images" src={six} placeholder={loadingGif} />
                    <Img className="images" src={seven} placeholder={loadingGif} />
                    <Img className="images" src={eight} placeholder={loadingGif} />
                    <Img className="images" src={nine} placeholder={loadingGif} />
                    <Img className="images" src={ten} placeholder={loadingGif} />
                    <Img className="images" src={eleven} placeholder={loadingGif} />
                    <Img className="images" src={twelve} placeholder={loadingGif} />
                    <Img className="images" src={thirteen} placeholder={loadingGif} />
                    <Img className="images" src={fourten} placeholder={loadingGif} />
                    <Img className="images" src={fifteen} placeholder={loadingGif} />
                    <Img className="images" src={sixteen} placeholder={loadingGif} />
                    <Img className="images" src={seventeen} placeholder={loadingGif} />
                    <Img className="images" src={eighteen} placeholder={loadingGif} />
                </FadeInDiv>
            )
            : null

        const appropriateButton = (this.state.showImages) 
                ? null
                : <div>
                    <p className="paraText">We've made so many memories in that time</p>
                    <button 
                        style={{opacity: 1}}
                        className="contButton" 
                        onClick={() => {
                            this.setState({ showImages: true })
                        }} 
                    >
                        See Memories
                    </button>
                </div>

        return(
            <div className="sections">
                <div>
                    {gallery}
                    {appropriateButton}
                </div>
            </div>
        )
    }
}