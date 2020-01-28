import React, { Component } from 'react';
import axios from 'axios';
import ContactForm from '../contacts/ContactForm';
import AllUsers from '../AllUsers/AllUser';
import Users from '../users/Users';
import Search from '../layout/Search/Search';

class Home extends Component {
  state = {
    users: [],
    user: {},
    alert: null
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data });
  }

  setAlert = message => {
    this.setState({ alert: { message } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  searchUsers = async name => {
    let query = ``;
    if (name) {
      query = `${name}`;
    }
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items });
  };
  searchManyParams = async (location, repositories, language) => {
    console.log(
      'In App.js, location is ' +
        location +
        ' and repositories is ' +
        repositories +
        ' and language is ' +
        language
    );
    let query = ``;
    if (location||repositories||language) {
      query = `location:${location}`;
    }

    if ((location, repositories)) {
      query = `location:${location}+repos:>${repositories}`;
    }

    if ((location, language)) {
      query = `location:${location}+language:${language}`;
    }

    if ((location, repositories, language)) {
      query = `location:${location}+repos:>${repositories}+language:${language}`;
    }

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/search/users?q=${query}&per_page=100&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items });
  };

  getUser = async username => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data });
  };

  // // clearUsers = () => this.setState({ users: [] });

  render() {
    return (
      <div className='grid-2'>
      <div>
       <ContactForm/>
      </div>
      <div>
        <div className='container'>
        <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                      searchManyParams={this.searchManyParams}
                      showClearUsers={
                        this.state.users.length > 0 ? true : false
                      }
                      clearUsers={this.clearUsers}
                    />
        <AllUsers users={this.state.users}/>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
