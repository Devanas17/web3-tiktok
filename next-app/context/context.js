import { useState, useEffect, createContext, useContext} from "react"
import {useAccount} from "wagmi"

export const TiktokContext = createContext()

export const TiktokProvider = ({children}) => {
    const [userAddress, setUserAddress] = useState('')
    const [contract, setContract] = useState(null)
    const [videos, setVideos] = useState([])

    return(
        <TiktokContext.Provider value={userAddress}>
            {children}
        </TiktokContext.Provider>
    )
}