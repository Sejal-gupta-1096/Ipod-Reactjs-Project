import React from 'react';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component{
    constructor(){
        super();
    }

    rotateWheel = () => {
        var currentAngle = 15;

        //region.bind(target, 'rotate', function(e) {
        // var rotatable = document.getElementById('rotatable');
        // currentAngle += e.detail.distanceFromLast;
        // rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        activeRegion.bind(childElement, 'rotate', function(event){
        //Perform Operations
        console.log("rotate");
        
        });
    }

    render(){
        return(
            <div style = {styles.wheelContainer} id='wheel-container'>
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
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