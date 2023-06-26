import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';
import { BookContext } from '../contexts/BookContext';

//if we want to use functional component ,, we cant consume context like this

// class BookList extends Component{
//     static contextType=ThemeContext  
//     render(){
//         const {isLightTheme,light,dark}=this.context
//         const theme=isLightTheme?light:dark;
//         return (
            // <div className='booklist' style={{color:theme.textColor,background:theme.bg}}>
            //     <ul>
            //         <li style={{background:theme.ui}}>the way of kings</li>
            //         <li style={{background:theme.ui}}>the name of the wind</li>
            //         <li style={{background:theme.ui}}>the final empire</li>
            //     </ul>
            // </div>
//         )
//     }
// }

//to use contexts as functional component instead of class , see below
const BookList = () => {
    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;
    const {books}=useContext(BookContext);
    return (
        <div className='booklist' style={{color:theme.textColor,background:theme.bg}}>
            <ul>
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{background:theme.ui}}>{book.title}</li>
                    )
                })}
            </ul>
        </div>  
        );
}
 
export default BookList;


