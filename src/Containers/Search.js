import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatButton, TextField } from 'material-ui';
import { getItunesAPI } from "../Actions";
import { withRouter } from 'react-router';

class Search extends Component{

    constructor(props) {
        super(props);

        this.state ={term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.getItunesAPI(this.state.term);
        this.setState({term: ''});
        this.props.history.push('/search-results');
    }

    onInputChange(e){
        this.setState({term: e.target.value});
    }

    render(){
        return (
          <div className="absoluteCenterContainer">
              <div>
                  <form onSubmit={this.onFormSubmit}>
                      <TextField
                          hintText={`Search for a podcast...`}
                          onChange={this.onInputChange}
                          value={this.state.term}
                      />
                      <FlatButton
                          label="Search"
                          primary
                      />
                  </form>
              </div>
          </div>
        );
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({ getItunesAPI }, dispatch);
};

export default withRouter(connect(null, matchDispatchToProps)(Search));