import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  state = {
    name:'',
    location: '',
    repositories: '',
    language: ''
  };

  onSubmit = event => {
    event.preventDefault();

    // logic for triggering the alert
    if (
      this.state.name === '' &&
      this.state.location === '' &&
      this.state.repositories === '' &&
      this.state.language === ''
    ) {
      this.props.showAlert('Please enter a search term...');
    } // but if a search term has been entered into any of the fields, we proceed with searches
    else {
      if (this.state.name) {
        this.props.searchUsers(this.state.name);
        this.setState({ name: '' });
      } else {
        this.props.searchManyParams(
          this.state.location,
          this.state.repositories,
          this.state.language
        );
        this.setState({ location: '' });
        this.setState({ repositories: '' });
        this.setState({ language: '' });
      }
      console.log('In Search.js, name is ' + this.state.name);
      console.log('In Search.js, location is ' + this.state.location);
      console.log('In Search.js, repositories is ' + this.state.repositories);
      console.log('In Search.js, language is ' + this.state.language);
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='location'
            placeholder='Search By Location'
            value={this.state.location}
            onChange={this.handleInputChange}
          />
          <h4 className="text-center">OR</h4>
           <input
            type='text'
            name='name'
            placeholder='Search Users'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
           
          <input type='submit' value='Search' className='ButtonStyle' />
        </form>

      
      </div>
      
    );
  }
}

export default Search;