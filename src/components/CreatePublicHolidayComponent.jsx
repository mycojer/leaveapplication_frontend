import React, { Component } from 'react'
import PublicHolidayService from '../services/PublicHolidayService'

class CreatePublicHolidayComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            dateFrom:'',
            name: ''   
        }

        this.changeDateFromHandler = this.changeDateFromHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.savePublicHoliday=this.savePublicHoliday.bind(this);

    }
    
    changeDateFromHandler = (event) => {
        this.setState({dateFrom: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    savePublicHoliday = (e) => {
        e.preventDefault();
        let publicHoliday = {dateFrom: this.state.dateFrom, name: this.state.name};
        console.log('publicHoliday => ' + JSON.stringify(publicHoliday));
        
        PublicHolidayService.createPublicHoliday(publicHoliday).then(res =>{
            this.props.history.push('/publicholiday');        
        });
    }

    cancel(){
        this.props.history.push('/publicholiday');
    }


    render() {
        return (
            <div>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>Add Public Holiady</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Public Holiday Date: </label>
                                            <input placeholder="YYYY-MM-DD" name="dateFrom" className="form-control" 
                                                value={this.state.dateFrom} onChange={this.changeDateFromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Public Holiday Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.savePublicHoliday}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default CreatePublicHolidayComponent
