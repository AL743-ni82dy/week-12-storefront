import React from 'react'

class Stores extends React.Component {
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
        const response = await fetch('http://localhost:3001/stores');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    
    render () {
        const { response } = this.state

        const itemsList = []

        for (const [index, item] of response.entries()) {
            itemsList.push(<li key={index}>
                {item.name}: {item.location}: {item.city}: {item.state}: {item.phone}: {item.addedBy}
                </li>)
        }
        return (
            <div className="divbot">
                <h1>{response.length} items found</h1>
                <ul>
                    <h3>Name: Location: City: State: phone: added_by</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default Stores