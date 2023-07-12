import React from 'react'
import video from '../assets/video.mp4'
const Main = () => {
  return (
    <div className='main'>
    {/* <div className="overlay"> </div> */}
        <video src={video} autoPlay loop muted />
       
    </div>
  )
}

export default Main