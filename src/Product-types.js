import React from 'react'

class ProductTypes extends React.Component {
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
        const response = await fetch('http://localhost:3001/product-types');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render () {
        const { response } = this.state

        const itemsList = []

        for (const [index, item] of response.entries()) {
            itemsList.push(<li key={index}>{item.title}: {item.description}: {item.type}: {item.addedBy}</li>)
        }
        return (
            <div className="divbot">
                <h1>{response.length} items found</h1>
                <ul>
                    <h3>Title: Description: Type: added_by</h3>
                    {itemsList}
                </ul>
            </div>
        )
    }
}

export default ProductTypes