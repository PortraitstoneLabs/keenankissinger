import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = () => {
  const videoId = '_s0KaPfkmnY';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', maxWidth: '100%', overflow: 'hidden' }}>
    <div style={{ width: '100%', maxWidth: '560px' }}>
      <div className="video-wrapper">
        <iframe 
          title="YouTube Video 1"
          width="100%" 
          height="315" 
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}  // Using YouTube-nocookie domain
          frameBorder="0" 
          allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideo;