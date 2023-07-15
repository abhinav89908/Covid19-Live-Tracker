import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async() =>{
    try{
      const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
      const actualData = await res.json();
      console.log(actualData.UT);
      setData(actualData.UT.total);
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getCovidData();
  }, []);
  return (
    <>  
        <div className='heading'>
          <p>Live Covid19 CoronaVirus Tracker</p>
        </div>
        
        <div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Our </span> Country</p>
                <p className='card_name card_small'> {data.tested}</p>
              </div>   
            </div>
          </div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Total</span> Recoverd</p>
                <p className='card_name card_small'> {data.recovered}</p>
              </div>   
            </div>
          </div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Total</span> Confirmed</p>
                <p className='card_name card_small'> {data.confirmed}</p>
              </div>   
            </div>
          </div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Total</span> Death</p>
                <p className='card_name card_small'>{data.deceased}</p>
              </div>   
            </div>
          </div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Others</span> </p>
                <p className='card_name card_small'> {data.other}</p>
              </div>   
            </div>
          </div>
          <div className='card'>
            <div className='card_main'>
              <div className='class_inner'>
                <p className='card_name'><span>Total</span> Vaccinated</p>
                <p className='card_name card_small'> {data.vaccinated1}</p>
              </div>   
            </div>
          </div>
          
        </div>
    </>
  )
}


export default Covid