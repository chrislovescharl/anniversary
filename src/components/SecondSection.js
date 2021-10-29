import { React, Component } from 'react'
import smoothscroll from 'smoothscroll-polyfill';
import { pulse } from 'react-animations';
import styled, { keyframes } from "styled-components";

const PulseAnimation = keyframes`${pulse}`;
const PulseButton = styled.button`
  animation: 1s ${PulseAnimation} infinite;
`;

export default class SecondSection extends Component {
    render() {
        const timeFrom = dateDiff("2018-11-18")
        return(
            <div className="sections">
                <div>
                    <div>
                        <p className="paraText">This is a live counter of the time since the Wombats show where it all started!</p>
                        <p className="paraTextTime">{timeFrom}</p>
                        <p className="paraText">I think that's pretty damn cool.</p>
                    </div>
                    <PulseButton className="contButtonTwo" onClick={() => {
                        const nextSection = this.props.nextSection.current.getBoundingClientRect().top + window.scrollY
                        
                        smoothscroll.polyfill();
                        window.scroll({
                            top: nextSection,
                            behavior: "smooth"
                        })
                    }} >
                        Keep Going
                    </PulseButton>
                </div>
            </div>
        )
    }
}

function dateDiff(startingDate, endingDate) {
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
        var swap = startDate;
        startDate = endDate;
        endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }

    return yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
}