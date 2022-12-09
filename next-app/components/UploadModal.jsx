import { useState } from 'react'
// import style from '../styles/UploadModal.module.css'
import { useAppContext } from '../context/context'
import toast from 'react-hot-toast'

const style = {
    button: `text-white p-2 rounded-md border-none px-3 py-2 text-white cursor-pointer transition all duration-150 ease-out w-[120px] flex items-center justify-center font-semibold text-xl m-3`
}

const UploadModal = () => {
  const [caption, setCaption] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const { createVideo } = useAppContext()

  const handleSubmit = async event => {
    
  }



  return ( 
    <div className="absolute left-1/2 top-1/2 p-3 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#2c2d30] text-white min-w-[20rem] min-h-[15rem] rounded-md flex flex-col justify-center items-center">
      <div className="font-bold text-2xl mt-2 mb-4 mx-2">Upload New Video</div>
      <div className="w-full mb-2">
        <div className="font-semibold text-xl ml-2 mb-3">Caption</div>
        <div className="flex border border-[#494d4f] rounded-md p-3 bg-[#202124]">
          <input
            className="flex-1 border-none outline-none bg-none bg-[#202124] text-white"
            type='text'
            value={caption}
            onChange={event => setCaption(event.target.value)}
          />
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="font-semibold text-xl ml-2 mb-3">Video URL</div>
        <div className="flex border border-[#494d4f] rounded-md p-3 bg-[#202124]">
          <input
            className="flex-1 border-none outline-none bg-none bg-[#202124] text-white"
            type='text'
            value={videoUrl}
            onChange={event => setVideoUrl(event.target.value)}
          />
        </div>
      </div>
      <div className={style.modalButtons}>
        <button
          onClick={() => setNewVideoShow(false)}
          className={`${style.button} border-2 border-[#fe2d55] text-[#fe2d55]`}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className={`${style.button} bg-[#4e44ce]`}
        >
          Create New
        </button>
      </div>
    </div>
  )
}

export default UploadModal