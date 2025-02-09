import React from 'react';

const YouTubeVideo = () => {
  // Define both video IDs
  const videoIds = ['dYleXm-l6yc', '_s0KaPfkmnY'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      
      <div style={{ width: '100%', maxWidth: '560px', marginBottom: '20px' }}>
        <div className="video-wrapper">
          <iframe 
            title="YouTube Video 1"
            width="100%" 
            height="315" 
            src={`https://www.youtube-nocookie.com/embed/${videoIds[0]}`}  // First video ID
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <div className="video-wrapper">
          <iframe 
            title="YouTube Video 2"
            width="100%" 
            height="315" 
            src={`https://www.youtube-nocookie.com/embed/${videoIds[1]}`}  // Second video ID
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default YouTubeVideo;
