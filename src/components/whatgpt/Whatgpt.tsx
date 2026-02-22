import './Whatgpt.css';

import {Title , Card}  from './Card';
  


const Whatgpt = () => {
  return (
    <div className='Wgpt' id='Whatgpt'>
         <div className="Wgpt__TopPart">
           <Title title={'What is GPT-3'}/>
           <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
         </div>
         <div className="Wgpt__MiddlePart">
          <h2>The Possibilities are beyond your imagination</h2>
          <p>Explore The Library</p>
         </div>
         <div className="Wgpt__BottomPart">
          <Card title={'Chatbots'} paragraph={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '}/>
          <Card title={'Knowledgebase'} paragraph={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
          <Card title={'Education'} paragraph={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
         </div>
    </div>
  )

}

export default Whatgpt