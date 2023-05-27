import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
        this.timer = null;
    }

    decrementValue() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.decrementValue();
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(this.timer);
            alert('Time\'s UP!')
        }
    }

    render() {
        return (
        <div className="timer">
                <h2>Timer Value: { this.state.count }</h2>
            </div>
        )
    }
}

export default Timer;