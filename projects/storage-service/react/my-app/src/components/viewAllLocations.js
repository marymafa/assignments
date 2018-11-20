import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as action from "../redux/actions";

class AllLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLocations: [],
            selectedUnit: this.props.selections,
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3002/locationData").then(result => {
            console.log("data", result.data);
            this.setState({ allLocations: result.data })
        })
    }
    SelectValue = (e) => {
        const data = e.target.value
        this.props.saveSelectedVAlues(data)
        console.log("this is my data", data);
    }
    render() {
        return (
            < div >
                <h1>All Locations</h1>
                <div className="locations">
                    <label>
                        All Locations:
                            <select name="location" onChange={(e) => this.SelectValue(e)} >
                            <option value={0}>select the location </option>
                            {this.state.allLocations.map(location =>  <option key={location.id} value={location.id}>{location.address}</option>
                            )
                            }

                        </select>
                    </label>
                </div>
                <div>
                    <Link to="/viewAllBlocks" ><button type="button">Next</button></Link>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        store: state.selectValues,
        selections: state.selectValues.selections,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveSelectedVAlues: (data) => {
            dispatch(action.saveSelect(data))
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllLocations);