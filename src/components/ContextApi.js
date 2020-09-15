import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

const WithReButton = button => <button color="red" />

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            something: "Hey"
        }
    }
    render() {
        return (
            <Provider value={{ state: this.state }}>{this.props.children}
            </Provider>
        );
    }
}
class Button extends Component {
    render() {
        return (
            <Consumer>{context => <button>{context.state.something}</button>}</Consumer>
        );
    }
}
class HelloWorld extends Component {
    render() {
        return (
            <Container>
                <Button></Button>
            </Container>
        );
    }
}

export default function App() {
    return (
        <div className="App">
            <HelloWorld />
        </div>
    );
}