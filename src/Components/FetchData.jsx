import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  
  const printObject = (obj) => {
    let myArrayObj = Object.entries(obj);
    if (myArrayObj.length === 0)
        return <></>;

    let output = [];

    output.push(<h3>{myArrayObj[0][1]}</h3>)
    myArrayObj.splice(0, 1);

    for(const myPair in myArrayObj){
        if (myArrayObj[myPair][1].startsWith('https://')){
            output.push(<img className="fetch_Image" src={myArrayObj[myPair][1] } alt="Image not found"/>);
        } else {
            output.push(<p><strong>{myArrayObj[myPair][0].replace(/_|-/g, " ")}</strong> : {myArrayObj[myPair][1]}</p>);        
        }
    }

    return output;
  } 

  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {
            data && data.map((e) => (
                <>
                    <li className='list_data'>
                        {
                            printObject(e)
                        }
                    </li>
                    <br/>
                </>
            ))
        }
     </ul>
    </>
  )
}

export default FetchData