import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';


//class compoent--

// class ThemeToggle extends Component {
//     static contextType=ThemeContext

//     render() { 
//         const {toggleTheme}=this.context
//         return (
//             <button onClick={toggleTheme}>Toggle the Theme</button>
//         );
//     }
// }
 

//fucntional component--

const ThemeToggle = () => {
    const {toggleTheme}=useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>Toggle the Theme</button>
     );
}
 
export default ThemeToggle;