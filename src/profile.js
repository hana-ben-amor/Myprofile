import React from 'react'

function profile({data}) {
  return (
    <>
    <div>
          <h1 style={{fontSize:45,color:"red",fontStyle:'italic',fontWeight:'bold',letterSpacing:9,marginTop:30}}>{data.fullName}</h1>
          <div>
          <p style={{fontWeight:'bold',letterSpacing:5}}>{data.profession}</p>
          <small>{data.bio}</small>
          </div>
         
          <img src={data.imgSrc} alt="me" width={"40%"} style={{borderRadius:40,margin:20}}></img>
          
          </div>
    </>
   
  )
}

export default profile