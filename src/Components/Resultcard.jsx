import { Button } from "bootstrap"
import { useSelector } from "react-redux"

function Resultcard()
{
    const {result,currentTab} = useSelector((state) => state.allData)
    return <>
     
    <div className="media-continer">
               {currentTab === 'Photo' ? result.map((img,idx) =>(
              <div className="continer"  key={idx}>
                <img className="media" key={idx} src={img.src}   />
               <button className="dowload">Dowload</button>
              </div>
          )) : null}
            {currentTab === 'Video' ? result.map((img,idx) =>(
         <div className="continer" key={idx}>
              <video className="media"  src={img.src}  autoPlay muted loop />
              <button className="dowload">Dowload</button>
         </div>
     
            )
          ) : null}
    </div>

    </>
}

export default Resultcard