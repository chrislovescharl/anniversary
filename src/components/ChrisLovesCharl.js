import '../App.css';
import { React, Component } from 'react'
import { slideInRight } from 'react-animations';
import styled, { keyframes } from "styled-components";

const SlideInRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div`
  animation: 1s ${SlideInRightAnimation};
`;
const SlideInRightDivSlow = styled.div`
  animation: 2s ${SlideInRightAnimation};
`;
const SlideInRightDivSlower = styled.div`
  animation: 3s ${SlideInRightAnimation};
`;

export default class ChrisLovesCharl extends Component {
    render() {
        return (
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
    }
}