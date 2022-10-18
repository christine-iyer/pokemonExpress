const React = require('react')
const Default = require('../layouts/Default.jsx')




class Edit extends React.Component {
    render(){
        const {name, _id, image, readyToFight} = this.props.poke
        return (
            <Default title={`${name} edit page`} poke={this.props.poke}>
                <form method="POST" action={`/pokes/${_id}?_method=PUT`}>
                    name: <input type="text" name="name" defaultValue={name}></input><br/>
                    image: <input type="url" name="image" defaultValue={image}></input><br />
                    readyToFight: <input type="checkbox" name="readyToFight" defaultChecked={readyToFight}/> <br />
                    <input type="submit" value="edit pokemon" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit