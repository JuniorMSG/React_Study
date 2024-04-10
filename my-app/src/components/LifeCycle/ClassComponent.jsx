import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { date: new Date() };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    tick() {
        console.log('tick');
        this.setState({
            date: new Date()
        });

    }
    handleClick(){
        // Class Component는 this를 바인딩 해주어야 한다.
        alert(this.state.date)
    }

    handleClick2 = () => {
        // Arrow Function은 this를 바인딩 해주지 않아도 된다.
        alert(this.state.date)
    }

    render() {
        // console.log('render');
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello World</h1>
                <h2 onClick={this.handleClick2}>>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default ClassComponent;