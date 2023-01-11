import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Home = () => {

  const [datas, setData] = useState([])
  const [flag , setFlag] = useState(false)

  const getData = async () => {
    const { data } = await axios('https://randomuser.me/api/?results=50');


    const res = await axios.post('http://localhost:2500/create', { data: data.results });


    const alldata = await axios('http://localhost:2500/get',);


    setData(alldata.data.data);
    setFlag(true);

  }

  return (
    <div className='main'>

      <div >
        <h1>WELCOME</h1>
        <button className='btn' style={{  'cursor': flag ? 'not-allowed' : 'default'}} onClick={() => { flag ? alert('you already clicked') : getData(); }}> fetch data </button>
      </div>
      <div className='alldata'>
        {datas.length == 0 ? 'Click Button to fetch data' :
          datas.map(ele => <li style={{ 'listStyle': 'none' }}>

            <p className='data'>
              {<img style={{ borderStyle: "solid" }} src={ele.picture} />} <br />
              <strong>Title: </strong> {ele.title} <br />
              <strong>Name :</strong> {ele.name} <br />
             <strong>Gender :</strong> {ele.gender} <br />
             <strong>Age: </strong>{ele.age} <br />
             <strong>username: </strong> {ele.username} <br/>
             <strong>Email: </strong>   {ele.email} <br />
             <strong>Password: </strong>  {ele.password} <br/>
             <strong>Location: </strong> {ele.location} <br/>
             <strong>City: </strong> {ele.city}<br />
             <strong>State: </strong>   {ele.state} <br />
             <strong>Phone: </strong>  {ele.phone} <br />
             <strong>Cell: </strong> {ele.cell}  <br />
             <strong>postcode: </strong>  {ele.postcode} <br />
             <strong>Country: </strong>  {ele.country} <br/>
             <strong>Longitude: </strong> {ele.longitude} <br/>
             <strong>Latitude: </strong> {ele.latitude} <br/>
             <strong>Description: </strong> {ele.description} <br/>
             <strong>Timezone offset : </strong>{ele.offset} <br/>
             <strong>Login uuid: </strong>  {ele.uuid} <br/>
             <strong>Login salt : </strong>{ele.salt} <br/>
             <strong> Login md5 : </strong> {ele.md5} <br/>
             <strong>Login sha1 : </strong> {ele.sha1} <br/>
             <strong>Login sha256 : </strong>  {ele.sha256} <br/>
         
            </p>

          </li>)
        }
      </div>

    </div>
  )
}

export default Home





