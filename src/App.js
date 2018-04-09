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
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.unSelectAuthor = this.unSelectAuthor.bind(this);
  }


  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors, loading: false}))
      .catch(err => console.error(err));
  }

  selectAuthor(authors) {
    let self = this;
    axios.get('http://localhost:8000/api/authors/'+ authors.id)
  .then(function(authors){
      self.setState({currentAuthor: authors.data});
  })
  .catch(error => console.error(error));
  }

  unSelectAuthor(author) {
    this.setState({
      currentAuthor: {}
    })
  }

  getView() {
    if (this.state.loading) {
      return <Loading />
    }

    else if (isEmpty(this.state.currentAuthor)) {
      return <AuthorsList authors={this.state.authors} select={this.selectAuthor}/>
    }

    else {
      return <AuthorDetail currentAuthor={this.state.currentAuthor}/>
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
