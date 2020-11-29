import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    constructor(){
        super();
        
        this.ReloadData = this.ReloadData.bind(this);

    }
    state = {
        movies: []
    };


    //Lifecycle hook method using axios package to retrieve info from the json file
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            this.setState({ movies: response.data })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    // Pass move items into movieItem component
    render() {
        return (
            <div>
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}