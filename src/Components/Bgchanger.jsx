 import { Moon } from 'lucide-react';
 import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function Bgchanger()
{
      const [theme,setTheme] = useState(true)
     useEffect(() =>{  

        document.body.style.backgroundColor = theme ? "white" : '#222'
         },[theme])

     return  (
       <button className='btn' onClick={(e) =>{
            e.preventDefault()
            setTheme(!theme)

       }}>{ theme ? <Moon className='btn2' /> :  <Sun className='btn2'/> }

       </button>
     )
}

export default Bgchanger;


