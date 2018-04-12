import React, { Component } from 'react';
import {connect} from 'react-redux';
import { List } from 'material-ui';
import Result from '../Components/Result';

class SearchResults extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

   handleClick(data){
    this.props.history.push(`/podcasts/${data}`);
   }

    render(){
        return(
            <div>
                <List>
                    {this.props.apiSearchResults.map(data =>
                        <Result
                            data={data}
                            handleClick={this.handleClick}
                            key={data.collectionId}
                        />
                    )}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(SearchResults);