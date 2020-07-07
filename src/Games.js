import React from 'react';

class Games extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.settings} >
                <img style={styles.image} src="https://media2.giphy.com/media/uYe2emzPgDfj2/giphy.webp?cid=ecf05e47fa455dac230de80fff0206077175b008801bc689&rid=giphy.webp" />
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'100%',
        height:'100%',
        alignSelf : 'center'
    }
}


export default Games;