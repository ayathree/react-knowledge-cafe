

import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Bookmarks from './component/bookmarks/Bookmarks'
import Vlogs from './component/vlogs/Vlogs'

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const [readingtime, setReadingtime]=useState(0);

  const handleAddToBookmarks =vlog=>{
    const newBookmarks = [...bookmarks, vlog];
    setBookmarks(newBookmarks)

  }

  const handleMarkAsRead = time=>{
    const newReadingTime = readingtime+time;
    setReadingtime(newReadingTime)
  }
 

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Vlogs
     handleAddToBookmarks={handleAddToBookmarks} 
     handleMarkAsRead={handleMarkAsRead}></Vlogs>
     <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
