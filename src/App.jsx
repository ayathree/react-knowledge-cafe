

import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Bookmarks from './component/bookmarks/Bookmarks'
import Vlogs from './component/vlogs/Vlogs'

function App() {
  const [bookmarks, setBookmarks]=useState([]);

  const handleAddToBookmarks =vlog=>{
    const newBookmarks = [...bookmarks, vlog];
    setBookmarks(newBookmarks)

  }
 

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Vlogs
     handleAddToBookmarks={handleAddToBookmarks}></Vlogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
