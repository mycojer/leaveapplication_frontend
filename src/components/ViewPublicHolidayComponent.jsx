import React, { Component } from 'react'
import PublicHolidayService from '../services/PublicHolidayService'

class ViewPublicHolidayComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dateFrom: this.props.match.params.id,
            ph: {}
        }
    }

    componentDidMount(){
        PublicHolidayService.getPublicHolidayById(this.state.dateFrom).then( res => {
            this.setState({ph: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Public Holiady Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Public Holiday Date: </label>
                            <div> { this.state.ph.dateFrom }</div>
                        </div>
                        <div className = "row">
                            <label> Public Holiday Name: </label>
                            <div> { this.state.ph.name }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPublicHolidayComponent
