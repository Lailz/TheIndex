import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';


const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
  // baseURL: "https://the-index-api.herokuapp.com"
});

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true,
      currentAuthor: {},
      filteredAuthors: [],
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.unSelectAuthor = this.unSelectAuthor.bind(this);
    this.searchAuthor = this.searchAuthor.bind(this);
  }

  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors, loading: false}))
      .catch(err => console.error(err));
  }

  selectAuthor(authors) {
    //let self = this;
    axios.get(`http://localhost:8000/api/authors/${authors.id}/`)
    .then(authors => this.setState({
      currentAuthor: authors.data,
      loading: false
    }))
    .catch(error => console.error(error));
  }

  unSelectAuthor(author) {
    this.setState({
      currentAuthor: {},
      filteredAuthors: []
    })
  }

  searchAuthor(query) {
    let filters = this.state.authors.filter(function(authorTofilter) {
      return (authorTofilter.first_name.includes(query) + authorTofilter.last_name.includes(query));
    });
    this.setState({
      filteredAuthors: filters
    })
  }

  getView() {
    if (this.state.loading) {
      return <Loading />
    }
    else if (isEmpty(this.state.currentAuthor) && isEmpty(this.state.filteredAuthors)) {
      return <AuthorsList authors={this.state.authors} select={this.selectAuthor} search={this.searchAuthor}/>
    }
    else if (!isEmpty(this.state.currentAuthor)) {
      return <AuthorDetail currentAuthor={this.state.currentAuthor} />
    }
    else if (!isEmpty(this.state.filteredAuthors)) {
      return <AuthorsList authors={this.state.filteredAuthors} select={this.selectAuthor} search={this.searchAuthor}/>
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">

          <div className="col-2">
            <Sidebar select={this.unSelectAuthor}/>
          </div>
          <div className="content col-10">

            {this.getView()}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
