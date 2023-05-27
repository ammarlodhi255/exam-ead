import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100
        }
    }

    decrementValue() {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }

    componentDidMount() {
        setInterval(() => {
            this.decrementValue();
        }, 1000);
    }

    // componentWillUnmount() {

    // }

    render() {
        return (
        <div className="timer">
                <h2>Timer Value: { this.state.count }</h2>
            </div>
        )
    }
}

export default Timer;