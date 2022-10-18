const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, image,readyToFight, _id} = this.props.poke
        
    
        return(
        <Default title={`${name} show page`} poke={this.props.poke}>
            <p>{name} is {readyToFight? 'ready to fight': ' not ready to fight'}</p>
            <div>{image ? <img src={image}/> : ''}</div> 
        </Default>
        )
   } 
}

module.exports = Show