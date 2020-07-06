import React from 'react';
import Home from './Home'

class Screen extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                <Home />
            </div>
        );
    }
    
}

const styles = {
    screen : {
        height : '16rem',
        width : '100%',
        backgroundColor : 'white',
        border : '2px solid lightgrey'
    }
}

export default Screen;