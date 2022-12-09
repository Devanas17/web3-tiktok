import { useState, useEffect } from "react";
import Video from "./Video";
import BottomBar from "./BottomBar";


const MainView = () => {
    const [tiktoks, setTiktoks] = useState([])
    const videos = [
      {
        id: 1,
        caption: "What's buddy",
        url: "buddy_url",
      },
      {
        id: 2,
        caption: "Kyan Haal chal h",
        url: "haal_url",
      },
    ];

    useEffect(() => {
        setTiktoks(videos)
      }, [videos])


  return <div>
    <div className="app videos relative h-[400px] rounded-lg ml-[47px] overflow-scroll scrollbar-hide w-[80%] snap-y">
        {tiktoks.length === 0 ? (
          <div className="novideoContainer grid place-items-center	">
            <h1 className="text-[#fff]">No Videos</h1>
          </div>
        ) : (
          tiktoks.map((tiktok, index) => (
            <Video
              key={index}
              address={tiktok.owner}
              caption={tiktok.caption}
              videoUrl={tiktok.url}
              likes={tiktok.likes}
              id={index}
            />
          ))
        )}
      </div>
      <BottomBar />
  </div>;
};

export default MainView;
  