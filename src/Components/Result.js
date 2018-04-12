import React from 'react';
import { Card } from 'material-ui';

const Result = ({data, handleClick}) => {


    const sincePublished = (data) => {
        const releaseDate = new Date(data);
        const sinceRelease = Math.abs(new Date() - releaseDate);

        switch(true){
            case sinceRelease < 60000:
                return "Just Now";
            case sinceRelease < 3600000:
                return `${Math.floor(sinceRelease/60000)} minute(s) ago.`;
            case sinceRelease < 86400000:
                return `${Math.floor(sinceRelease/3600000)} hour(s) ago.`;
            case sinceRelease < 604800000:
                return `${Math.floor(sinceRelease/86400000)} day(s) ago.`;
            default:
                return releaseDate.toDateString();
        }
    };

    const sendCollectionId = () => {
      return handleClick(data.collectionId)
    };

    return (
        <div key={data.collectionId}>
            <Card
                className="card"
                onClick={sendCollectionId}

            >
                <div style={{fontSize: 24, padding: 5}}>
                    {data.collectionName}
                </div>
                <div style={{display: 'flex', paddingBottom: 5}}>
                    <div style={{paddingLeft: 5}}>
                        <img className="coverArt" src={data.artworkUrl600} style={{width: '8vw'}} alt={data.collectionName}/>
                    </div>
                    <div style={{paddingLeft: 5}}>
                        <div style={{fontSize:20}}>{data.artistName}</div>
                        <div>Last released: {sincePublished(data.releaseDate)}</div>
                    </div>
                </div>
            </Card>
            <br/>
        </div>
    )
};

export default Result;