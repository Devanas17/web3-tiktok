import { useRef, useState, useEffect } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'


const Video = ({ address, caption, videoUrl, likes, id }) => {

  const [playing, setPlaying] = useState(false)
  const [likersAddresses, setLikersAddresses] = useState([])

  console.log(caption)

  const videoRef = useRef(null)

  const handleClick = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="relative bg-black w-full h-full snap-start">
      <video
        className="object-fill w-full h-full"
        loop
        onClick={handleClick}
        ref={videoRef}
        src={videoUrl}
        style={{ objectFit: 'cover' }}
      />

      <Footer address={address} caption={caption} />

      <Sidebar
        address={address}
        likes={likes}
        likersAddresses={likersAddresses}
        id={id}
      />
    </div>
  )
}

export default Video