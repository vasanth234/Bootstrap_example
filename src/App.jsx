import React from 'react'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'

//to create this project we have the newsapi so we should generate the API key there.and insert in one new file
const App = () => {
  return (
   <>
<Navbar/>
<Newsboard/>
   </>
  )
}

export default App