import { React, Component } from 'react'

export default class ThirdSection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            startAnimation: false
        }
    }

    render() {
        const animationBlock = this.state.startAnimation 
            ? (
                <div></div>
            )
            : null

        return(
            <div className="sections">
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