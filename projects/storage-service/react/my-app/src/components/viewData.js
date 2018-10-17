import React, { Component } from 'react';
import axios from 'axios';
export default class viewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3002/data").then(result => {
            this.setState({ business: result.data })
        })
    }
    render() {
        console.log("state", this.state);
        return (
            <div>
                <h1>Business Details</h1>
                <div>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                            <th>Contact Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.business.map(element => {
                            return <tr>
                                <td>{element.name}</td>
                                <td>{element.contact_name}</td>
                                <td>{element.contact_number}</td>
                                <td>{element.contact_email}</td>
                            </tr>
                        })}
                    </tbody>
                </div>
            </div>
        )
    }
}
