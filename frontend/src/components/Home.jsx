import React, {useState, useEffect} from 'react'
import './css/Home.css'

const Home = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/votingSystems/backend/fetchdata.php')
    .then(res => {
      if(!res.ok){
        throw new Error('Something when wrong');
      }
      return res.json();
    })
    .then(data => setData(data))
    .catch(error => console.error('Error in fetching of data: ', error));
  }, []);
  return (
    <>
      { data.length === 0 ? (
        <p>Loading data ...</p>
      ) :( 
      <table className="table">
          <thead style={{backgroundColor: 'blue', color: 'red'}}>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>REG_NUMBER</th>
                <th>CONTACT</th>
              </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && 
            data.map((item,index) =>{
              return(
              <tr key={index}>
                <td>{item.ID}</td>
                <td>{item.REG_NUM}</td>
                <td>{item.NAME}</td>
                <td>{item.CONTACT}</td>
              </tr>
              )
            })}
          </tbody>
      </table>)
      } 
    </>
  )
}

export default Home;