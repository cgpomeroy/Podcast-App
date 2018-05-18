import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'material-ui';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import DateRange from 'material-ui/svg-icons/action/date-range';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleOutline from 'material-ui/svg-icons/av/pause-circle-outline';
import {setNowPlaying} from "../Actions";

class PodcastEpisode extends Component {
    constructor(props){
        super(props);
        this.state = {
            playbackActive: false
        };

        this.playPauseMedia = this.playPauseMedia.bind(this);
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

    playPauseMedia(){
        if(this.state.playbackActive){
            document.getElementById(this.props.episode.guid).pause();
            this.setState({playbackActive: false});
            return false;
        }else{
            document.getElementById(this.props.episode.guid).play();
            this.props.setNowPlaying(this.props.episode.enclosure.url);
            this.setState({playbackActive: true});
            return false;
        }
    }

    showPlaybackStatus(){
        if(this.state.playbackActive){
            return (
                <PauseCircleOutline
                    color="rgba(255,255,255,.7)"
                    hoverColor="rgba(0,0,0,.7)"
                    onClick={this.playPauseMedia}
                    style={{position: 'absolute', top: '75%', left: '75%', width: '20%', height: '20%'}}
                />
            );
        }
        else{
            return(
                <PlayCircleOutline
                    color="rgba(255,255,255,.7)"
                    hoverColor="rgba(0,0,0,.7)"
                    onClick={this.playPauseMedia}
                    style={{position: 'absolute', top: '75%', left: '75%', width: '20%', height: '20%'}}
                />
            )
        }
    }

    componentWillReceiveProps(){
        if((this.props.nowPlaying !== "" || this.props.nowPlaying !== this.props.episode.enclosure.url) && this.state.playbackActive) {
            this.playPauseMedia();
        }
    }

    render(){
        return(
            <Card key={this.props.episode.guid} style={{paddingTop: 3, paddingLeft: 3, marginBottom: 10}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1, maxWidth: 150, position: 'relative', textAlign: 'center'}}>
                        <img src={this.podcastPicture()} alt={this.props.apiSearchResults[0].title} style={{width: '100%'}} />
                        <audio id={this.props.episode.guid}><source src={this.props.episode.enclosure.url} type="audio/mp3" /></audio>
                        {this.showPlaybackStatus()}
                    </div>
                    <div style={{flex: 6}}>
                        <div style={{fontSize: 20, margin: 5}}>{this.props.episode.title}</div>
                        <div style={{display: 'flex', margin: 5}}>
                            <div style={{flex: 1}}>
                                <DateRange style={{verticalAlign: 'middle'}}/> {this.convertUTCToDate(this.props.episode.pubDate)}
                            </div>
                            <div style={{flex: 1}}>
                                <AccessTime style={{verticalAlign: 'middle'}}/> {this.props.episode.itunes.duration}
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

function mapStateToProps(state){
    return state
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({ setNowPlaying }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(PodcastEpisode);