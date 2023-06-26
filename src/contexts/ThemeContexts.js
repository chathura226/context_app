import React, {createContext,Component} from 'react'

export const ThemeContext=createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light:{textColor:'#555',ui:'#ddd',bg:'#eee'},
        dark:{textColor:'#ddd',ui:'#333',bg:'#555'}
     } 
     toggleTheme=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme})
     }
    render() { 
        return (//this.props.children = children this component wraps
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children } 
                
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;