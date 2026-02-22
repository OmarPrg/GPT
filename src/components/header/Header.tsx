import './Header.css'
import faceImage from '../../assets/Header Illustration.png';
import peopleImage from '../../assets/Group 81.png'
const Header = () => {
  return (
    <div className='Header' id='Home'>
        <div className="Header__Content">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        
          <div className="Header__Content__Email">
             <input type="email" placeholder='Your Email Address' />
             <button > Get Started</button>
          </div>

          <div className="Header__Content__People">
             <img src={peopleImage} alt="People" />
             <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="Header__Image"> 
           <img src={faceImage} alt="Face" />
        </div>
    </div>
  )
}

export default Header