const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="create a new pokemon">
            <form method="POST" action="/pokes">
                name: <input type="text" name="name" placeholder='name'></input><br/>
                image: <input type="url" name="image" placeholder='image url'></input><br/>
                Is Ready To Fight: <input type="checkbox" name="readyToFight"></input><br/>
                <input type="submit" value="submit poke"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New