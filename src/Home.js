import React from 'react';


class Home extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <h2 style={{marginLeft:'12px'}}>IPod.js</h2>
                    <ul>
                        <li>Wallpapers</li>
                        <li>Music</li>
                        <li>Games</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div style={styles.imageContainer} id='image-container'></div>
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
        border:'1px solid black',
        height : '100%',
        width : '50%'
    },
    imageContainer : {
        border:'1px solid black',
        height : '100%',
        width : '50%'
    }
}

export default Home;