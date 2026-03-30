import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getVideo } from "../API/mediaApi";
import { useEffect } from "react";
import { setResult } from "../Redux/slice";
import Resultcard from "./Resultcard";

function Result()
{
    const {query,currentTab} = useSelector((store) => store.allData )
    const dispatch = useDispatch()
   
   useEffect(() => {
  if (currentTab === "Photo") {
    async function photoFetch() {
      if (!query) return
      const response = await getPhoto(query);
      const photo = response.results.map((res) => { 
        return {
          src: res.links.download,
          about: res.alt_description,
        }
      })

      dispatch(setResult(photo));  
    }
    photoFetch();
  }
  if(currentTab === "Video")
  {
     async function videofetch() {
        if(!query) return
        const response = await getVideo(query)
      
        const video = response.videos.map((res) =>{
            return{
                src:res.video_files[0].link
            }
        })
        dispatch(setResult(video))
     }
     videofetch()
  }
}, [query, currentTab, dispatch]);
    
    return <div className="result">
             <Resultcard />
    </div>
}

export default Result;
