import React from 'react'
import { useState,useEffect } from 'react'

const Newsboard = () => {
  const [article,setarticle]=useState([])
  //we need to remember if we are inserting any link from other website into our project we do mention them in back ticks .
  useEffect(()=>{
let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
         fetch(url).then(response=>response.json()).then(data=>setarticle(data.articles));
  },[])
  return (
    <div>
       <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
       {
        article.map((news,index)=>{
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })
       }
    </div>
  )
}

export default Newsboard