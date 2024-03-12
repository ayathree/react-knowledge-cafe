

import './App.css'
import Header from './component/Header/Header'
import Bookmarks from './component/bookmarks/Bookmarks'
import Vlogs from './component/vlogs/Vlogs'

function App() {
 

  return (
    <>
      
     <Header></Header>
     <div className='md:flex'>
     <Vlogs></Vlogs>
     <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
