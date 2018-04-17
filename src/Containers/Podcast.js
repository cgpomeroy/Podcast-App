import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { getItunesAPI, getPodcastEpisodes } from "../Actions";
import { Card } from 'material-ui';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import DateRange from 'material-ui/svg-icons/action/date-range';

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
            console.log(`RSS: ${res.feedUrl}`);
            this.props.getPodcastEpisodes(res.feedUrl);
        }

    }

    podcastPicture(){
        if(this.props.apiSearchResults.length > 0)
            return this.props.apiSearchResults[0].artworkUrl600;
        else
            return null;
    }

    convertUTCToDate(created){
        let date = new Date(created);
        var month_name = function(dt){
            const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            return mlist[dt.getMonth()];
        };
        return `${month_name(date)} ${date.getDate()}`;
    }

    convertUTCToTimeElapsed(utc){
        const seconds = utc / 1000;
        const hours = seconds/3600;

        return hours;
    }

    render(){


        return this.props.podcastEpisodes.map(episode =>
            <Card key={episode.guid} style={{marginBottom: 10}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}><img src={this.podcastPicture()} alt={this.props.apiSearchResults[0].title} style={{maxWidth: 150}} /></div>
                    <div style={{flex: 6}}>
                        <div style={{fontSize: 20, margin: 5}}>{episode.title}</div>
                        <div style={{display: 'flex', margin: 5}}>
                            <div style={{flex: 1}}>
                                <DateRange style={{verticalAlign: 'middle'}}/> {this.convertUTCToDate(episode.pubDate)}
                            </div>
                            <div style={{flex: 1}}>
                                <AccessTime style={{verticalAlign: 'middle'}}/> {episode.itunes.duration}
                            </div>
                            <div style={{flex: 5}}>

                            </div>
                        </div>
                    </div>
                </div>
            </Card>
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