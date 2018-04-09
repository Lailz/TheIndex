import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //this.props = event.target.value;
    //console.log(this.props);
    this.props.search(event.target.value)
    //console.log(event.target.value)
  }
  //
  // handleSubmit(event) {
  //   alert('Submitted');
  //   event.preventDefault();
  // }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <div className="input-group my-3">
          <input className="form-control"
                         type="text"
                         value={this.state.value}
                         onChange={this.handleChange} />
          <div className="input-group-append" >
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch}/>
            </span>
          </div>
        </div>
      </div>
    </form>
    );
  }
}

export default SearchBar;
