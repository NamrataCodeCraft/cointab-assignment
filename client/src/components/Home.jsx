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
    <div className='main'>

      <div >
        <h1>WELCOME</h1>
        <button className='btn' onClick={() => { getData(); }}> fetch data </button>
      </div>
      <div className='alldata'>
        {datas.length == 0 ? 'Click Button to fetch data' :
          datas.map(ele => <li style={{ 'listStyle': 'none' }}>

            <p className='data'>
              {<img style={{ borderStyle: "solid" }} src={ele.picture} />} <br />
              Title:  {ele.title} <br />
              Name: {ele.name} <br />
              Gender: {ele.gender} <br />
              Age: {ele.age} <br />
              username : {ele.username} <br/>
              Email : {ele.email} <br />
              Password : {ele.password} <br/>
              Location : {ele.location} <br/>
              City: {ele.city}<br />
              State:  {ele.state} <br />
              Phone: {ele.phone} <br />
              Cell : {ele.cell}  <br />
              postcode:  {ele.postcode} <br />
              Country:  {ele.country} <br/>
              Longitude: {ele.longitude} <br/>
              Latitude : {ele.latitude} <br/>
              Description : {ele.description} <br/>
              Timezone offset : {ele.offset} <br/>
              Login uuid : {ele.uuid} <br/>
              Login salt :{ele.salt} <br/>
              Login md5 : {ele.md5} <br/>
              Login sha1 : {ele.sha1} <br/>
              Login sha256 : {ele.sha256} <br/>
         
            </p>

          </li>)
        }
      </div>

    </div>
  )
}

export default Home





