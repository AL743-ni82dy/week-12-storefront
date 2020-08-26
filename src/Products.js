import React from 'react'
import { responseSort } from './Utility'

class Products extends React.Component {
    constructor () {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
        .then(response => this.setState({response}))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('http://localhost:3001/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        const { response } = this.state;

        const itemsList = []

        let sortedList = responseSort(response)

        for (const [index, item] of sortedList.entries()) {
            itemsList.push(<tr key={index}><td>{item.title}</td>
            <td>{item.description}</td> <td>{item.addedBy}</td></tr>)
        }
        return (
            <div className="divbot">
                <h1>{sortedList.length + ' unique items found'}</h1>
                <table>
                    <tr><th><h3>Title</h3></th> <th><h3>Description</h3></th> <th className="right"><h3>added_by</h3></th></tr>
                    {itemsList}
                </table>
            </div>
        )
    }
}

export default Products