import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <h2 style={{marginLeft:'12px'}}>IPod.js</h2>
                    <ListGroup>
                        <ListGroup.Item style={{border:'0'}} active>Wallpapers</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Music</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Games</ListGroup.Item>
                        <ListGroup.Item style={{border:'0'}}>Settings</ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                    <img style={{height:'100%' , width:'100%'}} src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    homeScreen : {
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
        width : '50%'
    }
}

export default Home;