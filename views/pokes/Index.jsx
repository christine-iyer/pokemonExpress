const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {pokes} = this.props
        return(
            <Default title="pokes index page">
                <ul>
                    {
                        pokes.map((poke) => {
                            const {name, image, readyToFight, _id} = poke
                            return (
                                <li key={_id}>
                                    <a href={`/pokes/${_id}`}>
                                    {name}</a>
                                    
                                    
                                     <br/>
                                    {
                                        readyToFight? 
                                        'is ready to fight':
                                        'is not ready to fight'
                                    }
                                    <br/>
                                    <div>{image ? <img src={image}/> : ''}</div> 
                                    <br/>
                                    <form method="POST" action={`/pokes/${_id}?_method=DELETE`}>
                                        <input type="submit" className='button' value={`Delete  ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index