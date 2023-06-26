import React,{useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';
import { AuthContext } from '../contexts/AuthContext';


//using class component with context consumers --

// class  NavBar extends Component {
    
//     render() { 
//         return (
//             <AuthContext.Consumer>{(authContext)=>(
//                 <ThemeContext.Consumer>{(themeContext)=>{
//                     const {isAuthenticated,toggleAuth}=authContext
//                     const {isLightTheme,light,dark}=themeContext;
//                     const theme=isLightTheme?light:dark; // what theme is currently have and assign color theme to var
            
//                     return(
//                         <nav style={{background:theme.ui,color:theme.textColor}}>
//                         <h1>Context App</h1>
//                         <div onClick={toggleAuth}>
//                             {isAuthenticated?'Logged in':'Logged out'}
//                         </div>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         );
//     }
// }


//using funtional component--

const NavBar = () => {
    const {isAuthenticated,toggleAuth}=useContext(AuthContext)
    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;
    return ( 
        
        <nav style={{background:theme.ui,color:theme.textColor}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated?'Logged in':'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default NavBar;