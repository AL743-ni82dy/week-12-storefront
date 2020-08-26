import React from 'react'
import { colorString } from './Utility'

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
            let colorList = colorString(item.color)
            let colorsList = colorString(item.colors)
            itemsList.push(<li key={index}>
                {item.name}: {item.description}: {colorList}: {colorsList}: {item.size}: {item.addedby}
                </li>)
        }
        return (
            <div className="divbot">
                <h1>{response.length} items found</h1>
                <ul>
                    <h3>Name: Description: Color: Colors: Size: added_by</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
    
}

export default Logos