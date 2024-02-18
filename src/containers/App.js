import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import './App.css';
import { robots } from "../components/robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json())
    //         .then( users => this.setState({ robots: users}))
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.firstName.toLowerCase().includes(searchfield.toLowerCase()) ||
            robot.phone.replace(/\s/g, '').includes(searchfield.replace(/\s/g, ''))
        })

        return !robots.length ?
        <h1 className="tc f1">Loading</h1> :
         (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange ={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;