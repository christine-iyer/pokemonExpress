const React = require('react');

class Default extends React.Component {
    render(){
        const {poke, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokes">pokemon home page</a>
                        <a href="/pokes/new">create a poke</a>
                        { poke? <a href={`/pokes/${poke._id}/edit`}> {poke.poke} edit page </a> : ''}
                        { poke? <a href={`/pokes/${poke._id}`}>{poke.poke} show page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default