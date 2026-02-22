import './Footer.css';
import GPT3 from '../../assets/GPT-3.svg';

const Linkes =( {title , items}:{title:string , items:string[]})=>{ 
   return( 
    
    <div className='Column'> 
             <h3>{title}</h3>
             {items.map((i)=>{ 
               return <p><a href="">{i}</a></p>
             })}
             
          </div>
   )
}

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer__Header">
        <h2>Do you want to step in to the future before others</h2>
      </div>
      <div className="Footer__Button">
        <button>Request Early Access</button>
      </div>
      <div className="Footer__Links">
         
          <div className="Footer__Links__LogoSide">
            <img src={GPT3} alt="GPT-3"/>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="Footer__Links__LinksSide">
            <Linkes title='Links' items={['Overons' , 'Social Media' , 'Counters', 'Contact' ]}/>
            <Linkes title='Company' items={['Terms & Conditions' , 'Privacy Policy','Contact' ]}/>
            <Linkes title='Get in touch' items={['Crechterwoord K12 182 DK Alknjkcb' , '085-132567','info@payme.net' ]}/>
          </div>         
      </div>
      
      <div className="Footer__License"><p>© 2021 GPT-3. All rights reserved.</p></div>

    </div>
  )
}

export default Footer