

const Title=({title}:{title:string})=>{ 
   return (  
     <div className="Title">
         <div className="Title__UpperLine"></div>
         <div className="title"> {title}</div>
     </div>
   )}
const Card= ({title , paragraph}:{title:string , paragraph:string})=>{ 
    return( 
       <div className="Card"> 
            <Title title={title}/>
            <p>{paragraph}</p>
        </div>
    )
}
export  {Title , Card};

