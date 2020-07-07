import React from 'react';
import Home from './Home'
import Settings from './Settings'

class Screen extends React.Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Wallpapers'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                
            </div>
        );
    }
    
}

const styles = {
    screen : {
        height : '16rem',
        width : '100%',
        backgroundColor : 'white',
        border : '2px solid lightgrey'
    }
}

export default Screen;