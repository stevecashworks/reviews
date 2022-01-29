import {useState} from 'react';
import Review from './review';
import data from './data';
import{FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import './app.scss'

function App() {
     const [index, setIndex] = useState(0);

     const decideNext=(num)=>{
         if(num>3){
             return 0
         }
         else if(num<0) {
              return 3;
         }
         return num;

     }
 const next=()=> setIndex( decideNext(index+1));
 const prev=()=> setIndex(decideNext(index-1));
 const rev= data[index]
    return ( <div className='container'>
     <Review  img={rev.img} comment={rev.comment}name={rev.name} next={next} prev={prev}/>

    </div> );
}

export default App;