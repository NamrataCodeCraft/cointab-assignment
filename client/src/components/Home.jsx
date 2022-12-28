import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Home = () => {

  const [datas, setData] = useState([])
  const getData = async () => {
    const { data } = await axios('https://randomuser.me/api/?results=50');

    const res = await axios.post('http://localhost:2500/create', { data: data.results });

    const alldata = await axios('http://localhost:2500/get',);



    setData(alldata.data.data);

  }

  return (
    <div style={{ 'display': 'flex','margin' :'15rem auto'}}>

      <div>
        Home
        <button onClick={() => { getData(); }}> fetch data </button>
      </div>
      <div style={{ "maxHeight": "500px", "overflow": 'scroll' }}>
        {datas.length == 0 ? 'No data' :
          datas.map(ele => <li> {ele._id} {console.log(ele)} </li>)
        }
      </div>

    </div>
  )
}

export default Home