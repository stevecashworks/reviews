import {FaQuoteRight, FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const Review=({name,img,comment,prev,next})=>{
  return (<><section className='review'>
  
    <img className='personImg'src={img}  alt={name}/>
    <h4 className='name'>{name}</h4> 
    <div className= 'sliding'>
      <button className='btn' onClick={prev}> <FaChevronLeft className='chev'/></button>
    <p className='comment'> {comment}</p>
 <button className='btn' onClick={next}> <FaChevronRight className='chev'/></button>
      </div>
    <FaQuoteRight className={'quote'}/>
    
    
    </section>
    {/* <div className='btns'>
    <button><FaChevronLeft/></button>
    <button>Random</button>
    <button><FaChevronRight/></button>
    </div> */}
    </>
    )
  
}
export  default Review