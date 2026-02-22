import {Navbar  , Footer, Header, Whatgpt, Future, Brand  ,GetStart ,Blog , ScrollToTop  } from './components'
import './app.css'
const App = () => {
  return (
     <div className="App  ">
          <div className='Gradient__bg' style={{paddingTop:'55px'}}>
            <Navbar/>
            <Header/>
          </div>
          <Brand/>
          <Whatgpt/>
          <Future/>
          <GetStart/>
          <Blog/>
          <Footer/>
          <ScrollToTop/>
          
          
     </div>
  )
}

export default App;