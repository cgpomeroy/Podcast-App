import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getItunesAPI, getPodcastEpisodes } from "../Actions";
import PodcastEpisode from './PodcastEpisode';


class Podcast extends Component {
    constructor(props){
        super(props);

        this.state = {
            episodes: [],
        }
    }
    componentDidMount() {
        const collectionId = this.props.location.pathname.split("/")[2];
        this.props.getItunesAPI(collectionId);
        const res = this.props.apiSearchResults[0];
        if (res) {
            this.props.getPodcastEpisodes(res.feedUrl);
        }

    }


    render(){
        return this.props.podcastEpisodes.map(episode =>
            <PodcastEpisode key={episode.artistID} episode={episode}/>
        )
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({ getItunesAPI, getPodcastEpisodes }, dispatch);
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, matchDispatchToProps)(Podcast);