import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        });
        
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                <h1 className='f2'>DESCUBRA</h1>
                <SearchBox searchChange= {this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobot} />
                </Scroll>
            </div>
            )
        }
    }
}

export default App;

/*
    - Props
    - State: the description of your app -> an object that describes your application
    STATE      >>       PROPS 
               |         | 
 PARENT      FEEDS     CHILD
*/