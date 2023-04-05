import React, { useContext, useState } from 'react'
import AppContext from './Context'

const D = () => {
    const { setState } = useContext(AppContext);
    const [data, setData] = useState();
  return (
      <div>
          <h2>D component</h2>
          <input type="text" placeholder='enter your name' onChange={(e)=>{setData(e.target.value)}}/>
          <button onClick={()=>{setState(data)}}>send Data</button>
    </div>
  )
}

export default D