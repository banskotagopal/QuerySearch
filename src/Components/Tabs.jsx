import { useDispatch, useSelector } from "react-redux";
import { setCurrentTab } from "../Redux/slice";

function Tabs()
{
    const active_tab = useSelector((state) => state.allData.currentTab)
    const dispatch = useDispatch()
    function changeTab(itm)
    {
        dispatch(setCurrentTab(itm))
    }

    let arr=['Photo','Video','Gif']
    return <div className="tab">
        {arr.map((itm,idx) =>(
         <button 
         key={idx}
          onClick={() =>{
           changeTab(itm)
         }}
          className={`tab-btn ${active_tab === itm ? "tab-active" : null}`}>{itm}</button>
        ))}
    </div>
}

export default Tabs;