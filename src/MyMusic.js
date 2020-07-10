import React from 'react';
import sound from './assets/music/Senorita.mp3'

class MyMusic extends React.Component{
    
    constructor(){
        super();
        this.state = {
            audio : null
        }
    }

   
    componentDidMount(){
        let self = this;
        const audioEl = document.getElementsByClassName("audio-element")[0];
        self.audio = audioEl;
        self.audio.play();

        self.audio.addEventListener("timeupdate",function(){
            var pos = audioEl.currentTime/audioEl.duration;
            self.updateTime();
             document.getElementById("fill").style.width = pos*100 + "%";
        })
    }

    updateTime = () =>{
        this.setState({
            audio : this.audio
        })
    }

    render(){
        let audio = this.state.audio;
        return(
            <div style={styles.myMusicContainer}>

                <div style={styles.info}>
                    <img style={styles.image} src="https://images.news18.com/ibnlive/uploads/2019/07/Shawn-Mendes-Camila-Cabello.jpg"></img>
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.5rem'}}>Senorita</h4>
                        <p style={{marginBottom:'0'}}>Camilla Cobello</p>
                        <p>Shawn Mendes</p>
                    </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>
                    <p style={styles.currTime}>{audio != null ? Math.floor(audio.currentTime) : 0 / 0}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : null}</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '75%',
        width : '45%',
        alignSelf : 'center'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'royalblue',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    }
}


export default MyMusic;