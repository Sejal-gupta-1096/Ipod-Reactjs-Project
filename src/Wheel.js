import React from 'react';

class Wheel extends React.Component{
    constructor(){
        super();
    }

    render = () => {
        return(
            <div style = {styles.wheelContainer} className='wheel-container'>
                <div style = {styles.wheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/3039/3039357.svg" />
                        </div>
                        
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404393.svg" />
                            <div style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404395.svg" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404317.svg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    wheelContainer : {
        height : '13rem',
        width : 'inherit',
        backgroundColor : 'lightgrey',
        alignSelf : 'flex-end'
    },
    wheel : {
        width : '15rem',
        height : 'inherit',
        backgroundColor : 'white',
        margin : 'auto',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        width : '2rem',
        height : '2rem',
    },
    
}

export default Wheel;