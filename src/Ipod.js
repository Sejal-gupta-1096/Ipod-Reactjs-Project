import React from 'react';
import Wheel from './Wheel';

class Ipod extends React.Component{
    constructor(){
        super();
    }

    render = () => {
        return(
            <div style = {styles.ipodContainer}>
                <Wheel />
                
            </div>
        );
    }
}

const styles = {
    ipodContainer : {
        height : '20rem',
        width : '17rem',
        backgroundColor : 'black',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'coloumn',
        justifyContent : 'center'
        
    }
}

export default Ipod;