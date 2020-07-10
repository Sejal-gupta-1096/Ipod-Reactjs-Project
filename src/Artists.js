import React from 'react';

class Artists extends React.Component{
    
    constructor(){
        super();
    }

   
    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>IPod.js <span><img style={styles.image} src="https://image.flaticon.com/icons/svg/953/953909.svg" /></span></h4>
                        <p style={{marginBottom:'0'}}> React Project</p>
                        <p>Made by : Sejal Gupta</p>
                    </div>
                    
                </div>

                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app !!</h5>
                </div>
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url("https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg")`,
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
}

export default Artists;