import React from 'react';

const VideoDetail = ({ vid }) => {
    if (!vid) {
        return <div>Loading....</div>
    }
    const videoId = vid.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
            <div className="video-detail">
            <iframe className="video-container" height="315" width="560" allowfullscreen="" frameborder="0" src={url}></iframe>
                <div className="details inner-wrapper">
                    <h3>Video Title</h3>
                    <div>{vid.snippet.title}</div>
                    <h3>Video Description</h3>
                    <div>{vid.snippet.description}</div>
                </div>
            </div>
    );
};

export default VideoDetail;