import React, { useState, useEffect,useRef } from 'react'
import axios from '../../api/axios';
import requests from '../../api/requests';
import "./Banner.css"
import ReactHlsPlayer from 'react-hls-player';
import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // Math.floor(Math.random() * request.data.results.length -1)
      return request;
    }
    fetchData();
  }, []);

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }  
  };

  return (
    <div className="autoplay-banner">
      {movie && (
        <>
          <div className="overlay">
            <div className="content">
              <h2 className="title">{movie.name}</h2>
              <p className="description">{movie.overview}</p>
              <button className="play-button">
                <i className="fas fa-play"></i> Play
              </button>
            </div>
          </div>
          <ReactHlsPlayer
            className="video"
            src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            autoPlay
            muted={isMuted}
            controls={false}
            width="100%"
            height="100%"
            playerRef={videoRef}
          />

        <div className="mute-button" onClick={handleMuteToggle}>
          {isMuted ? <Icon path={mdiVolumeOff} size={1.5} />
           : <Icon path={mdiVolumeHigh} size={1.5} />
          }
        </div>
        </>
      )}
    </div>
  );
};

export default Banner;
