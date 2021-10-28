import '../App.css';
import { React, Component } from 'react'
import { slideInRight, fadeOut } from 'react-animations';
import styled, { keyframes } from "styled-components";

const SlideInRightAnimation = keyframes`${slideInRight}`;
// const FadeOutAnimation = keyframes`${fadeOut}`;

const SlideInRightDiv = styled.div`
  animation: 1s ${SlideInRightAnimation};
`;
const SlideInRightDivSlow = styled.div`
  animation: 2s ${SlideInRightAnimation};
`;
const SlideInRightDivSlower = styled.div`
  animation: 3s ${SlideInRightAnimation};
`;
// const FadeOutDiv = styled.div`
//   animation: 1s ${FadeOutAnimation};
//   animation-fill-mode: forwards;
// `;

export default class ChrisLovesCharl extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         slideIn: this.props.slideIn
    //     }
    // }

    // shouldComponentUpdate(nextProps){
    //     return nextProps.slideIn !== this.state.slideIn;
    // }
    
    // componentDidUpdate(props){
    //     if(props.slideIn !== this.props.slideIn){
    //         this.setState({          
    //             slideIn: this.props.slideIn
    //         });
    //     }
    // }

    render() {
        var slideInDivs = (
            <div>
                <SlideInRightDiv>
                    <p className="bigFont">Chris</p>
                </SlideInRightDiv>
                <SlideInRightDivSlow>
                    <p className="bigFont" style={{paddingLeft: 10}}>Loves</p>
                </SlideInRightDivSlow>
                <SlideInRightDivSlower>
                    <p className="bigFont" style={{paddingLeft: 20}}>Charl</p>
                </SlideInRightDivSlower>
            </div>
        )

        // var fadeOutDivs = (
        //     <div>
        //         <FadeOutDiv>
        //             <p className="bigFont">Chris</p>
        //         </FadeOutDiv>
        //         <FadeOutDiv>
        //             <p className="bigFont" style={{paddingLeft: 10}}>Loves</p>
        //         </FadeOutDiv>
        //         <FadeOutDiv>
        //             <p className="bigFont" style={{paddingLeft: 20}}>Charl</p>
        //         </FadeOutDiv>
        //     </div>
        // )
        
        // if (this.state.slideIn) {
            return slideInDivs
        // } else {
        //     return fadeOutDivs
        // }  
    }
}