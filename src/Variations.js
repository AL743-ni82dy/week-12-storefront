import React from 'react'
import { colorString } from './Utility'

class Variations extends React.Component {
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
        const response = await fetch('http://localhost:3001/variations');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render () {
        const { response } = this.state

        const itemsList = []

        for (const [index, item] of response.entries()) {
            const colors = colorString(item.color)
            itemsList.push(<li key={index}>{item.name}: {item.variation}: {item.Color}: {colors}: {item.addedBy}</li>)
        }
        return (
            <div className="divbot">
                <h1>{response.length} items found</h1>
                <ul>
                    <h3>Name: Variation: Color: color: added_by</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default Variations