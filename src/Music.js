import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Music extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <h2 style={{marginLeft:'12px'}}>IPod.js</h2>
                    <ListGroup>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}} className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }
    
}

const styles = {
    musicScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        //border:'1px solid black',
        height : '100%',
        width : '50%'
    },
    imageContainer : {
        //border:'1px solid black',
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    }
}


export default Music;