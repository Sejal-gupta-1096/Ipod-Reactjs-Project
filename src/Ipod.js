import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';

class Ipod extends React.Component{

    constructor(){
        super();
    }

    
    render(){
        return(
            <div style = {styles.ipodContainer}>
                <Screen />
                <Wheel />
            </div>
        );
    }
    
}

const styles = {
    ipodContainer : {
        height : '30rem',
        width : '20rem',
        backgroundColor : 'black',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
        
    }
}

export default Ipod;