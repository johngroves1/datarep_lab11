import React from 'react';

export class Create extends React.Component {


    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);


        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    // Set State value to Title
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    // Set State value to Year
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    // Set State value to Poster
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        // stop calling button multiple times
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + 
        this.state.Year + " " + this.state.Poster); 
    }

    // Output with styling for each component 
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                        </div>
                    <div className='form-group'>
                        <label>Add Movie Poster: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}