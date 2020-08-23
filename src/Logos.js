import React from 'react'

class Logos extends React.Component {
    constructor () {
        super()
        this.state = {response: []}
    }

    componentDidMount() {
        this.callApi()
        .then(response => this.setState({response}))
        .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render () {
        const { response } = this.state
        
        const itemsList = []

        for (const [index, item] of response.entries()) {
            itemsList.push(<li key={index}>{item.name}  added by {item.addedBy}</li>)
        }
        return (
            <div>
                <h1>{response.length} items found</h1>
                <ul>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default Logos