import React from 'react';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import sound from './assets/music/Senorita.mp3'


class Ipod extends React.Component{

    constructor(){
        super();
        this.state = {
            activeItem : 'NowPlaying',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }

    rotateWheel = () => {

        var currentAngle = 15;
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        if(self.state.enter < 2){
            activeRegion.bind(childElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        
                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage == 'Home'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }
                        }else if(self.state.activePage == 'Music'){
                            if(self.state.activeItem === 'MyMusic'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "MyMusic"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
        
    }

    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else if(this.state.activeItem === 'NowPlaying'){
            this.setState({
                activeItem : 'NowPlaying',
                activePage : 'MyMusic'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
        
        
    }

    changePageToHomeScreen = () => {

        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
            this.setState({
                activeItem : 'Music',
                activePage : 'Home'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'Home'
            })
        }
        
    }

    toggle = () =>{
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play == true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
        }
    }

    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
        console.log(audio)
        this.setState({
            audio : audio,
        })
        console.log(this.state)
    }

    render(){
        return(
            <div style = {styles.ipodContainer}>

                    <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>
                    
                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio} />

                <div style = {styles.wheelContainer} id='wheel-container'>
                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                            <img onClick={this.changePageToHomeScreen} style = {styles.image} src="https://image.flaticon.com/icons/svg/3039/3039357.svg" />
                        </div>
                        
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404393.svg" />
                            <div onClick={this.changePage} style={{backgroundColor : 'lightgrey' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404395.svg" />
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div onClick={this.toggle} style = {styles.playButton}>
                            <img style = {styles.image} src="https://image.flaticon.com/icons/svg/2404/2404317.svg" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    
}

const styles = {
    ipodContainer : {
        height : '33rem',
        width : '20rem',
        backgroundColor : 'lightgray',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
        
    },
    wheelContainer : {
        height : '45%',
        width : '90%',
        backgroundColor : 'lightgrey',
    },
    wheel : {
        width : '80%',
        height : '90%',
        backgroundColor : 'white',
        margin : '1rem auto',
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

export default Ipod;