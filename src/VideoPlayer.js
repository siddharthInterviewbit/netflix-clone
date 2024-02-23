import ReactHlsPlayer from "react-hls-player";
import React from 'react'

function VideoPlayer({src}) {
  return(
    <ReactHlsPlayer
      src={src}
      autoPlay={true}
      controls={true}
      width="100%"
      height="auto"
    />
    );
  }
  
  export default VideoPlayer;