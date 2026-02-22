import './Blog.css'
import article1 from '../../assets/Rectangle 22-4.png'
import article2 from '../../assets/Rectangle 22.png'
import article3 from '../../assets/Rectangle 22-1.png'
import article4 from '../../assets/Rectangle 22-2.png'
import article5 from '../../assets/Rectangle 22-3.png'
const Blog_Card=({image , date , paragraph}:{image:string , date:string , paragraph:string})=>{ 
     return( 
         <div className="BlogCard">
            <img src={image} alt="" />
            <div className="BlogCard__Content">
             <div>
               <div className="BlogCard__Content__Date">
                {date}
              </div>
              <div className="BlogCard__Content__Paragraph">
                {paragraph}
              </div>
             </div>
             <div className="BottomParagraph">
              <h4>Read Full Article</h4>
             </div>
              
            </div>

         </div>
     )
}
const Blog = () => {
  return (
    <div className='Blog' id='Blog'>
        <div className="Blog__Header" >
            <h2>A lot is happening, <br/> We are blogging about it.</h2>
        </div>
        <div className="Blog__Cards">
            <Blog_Card image={article1} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article2} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article3} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article4} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
            <Blog_Card image={article5} date={'Sep 26, 2021'} paragraph={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}/>
        </div>
    </div>
  )
}

export default Blog;