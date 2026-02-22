import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import shopify from '../../assets/shopify.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';

import './Brand.css';

const Brand = () => {
  return (
    <div className='Brand'>
          <img src={google} alt="google" />
          <img src={slack} alt="slack" />
          <img src={atlassian} alt="atlassian" />
          <img src={dropbox} alt="dropbox" />
          <img src={shopify} alt="shopify" />
    </div>
  )
}

export default Brand