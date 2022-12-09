import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai'
import { IoIosAdd } from 'react-icons/io'
import { BiMessageMinus } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import Modal from 'react-modal'
import UploadModal from './UploadModal'
import { modalStyles } from '../utils/constant'

Modal.setAppElement('#__next')

const BottomBar = () => {
  const router = useRouter()

  return ( 
    <div className="w-[100%] flex justify-evenly text-white text-4xl bg-black p-4 border-t-2 rounded-lg gap-10">
      <AiFillHome className=" cursor-pointer" />
      <AiOutlineCompass className=" cursor-pointer" />
      <Link href='/?upload=1'>
        <div className="w-[45px] bg-white text-black flex justify-center items-center rounded-md">
          <IoIosAdd className=" cursor-pointer" />
        </div>
      </Link>
      <BiMessageMinus className=" cursor-pointer" />
      <BsPerson className=" cursor-pointer" />
      <Modal
        isOpen={!!router.query.upload}
        onRequestClose={() => router.push('/')}
        style={modalStyles}
      >
        <UploadModal />
      </Modal>
    </div>
  )
}

export default BottomBar