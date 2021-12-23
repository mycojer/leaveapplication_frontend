import React, { Component } from 'react'
import PublicHolidayService from '../services/PublicHolidayService'

class ListPublicHolidayComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phs: []
        }
        this.addPublicHoliday = this.addPublicHoliday.bind(this);
        this.deleteAllPublicHoliday = this.deleteAllPublicHoliday.bind(this);
    }

    componentDidMount(){
        this.getAllPublicHoliday();

    }

    getAllPublicHoliday(){
        PublicHolidayService.getPublicHoliday().then((res) => {
            this.setState({ phs: res.data})
        } );
    }
    addPublicHoliday(){
        this.props.history.push("/add-publicholiday");
    }

    deleteAllPublicHoliday(){
        PublicHolidayService.deleteAllPublicHoliday().then((res) => {
            console.log(res.data);
            this.getAllPublicHoliday();
        } ); 
    }

    editPublicHoliday(id){
        this.props.history.push(`/update-publicholiday/${id}`);
    }

    deletePublicHolidayById(id){
        PublicHolidayService.deletePublicHolidayById(id).then( res => {
            this.setState({phs: this.state.phs.filter(ph => ph.dateFrom !== id)});
        });
    }
    viewPublicHoliday(id){
        this.props.history.push(`/view-publicholiday/${id}`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Public Holiday List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPublicHoliday}> Add Public Holiday</button>
                    <button style={{ marginLeft: "auto" }} className="btn btn-primary" onClick={this.deleteAllPublicHoliday}> Remove All Public Holiday</button>
                 </div>
                 <br></br>
                 <div className = "row" >
                        <table className = "table table-striped table-bordered"  style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th> Public Holiday Date</th>
                                    <th> Public Holiday Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.phs.map(
                                    ph =>
                                    <tr key = {ph.dateFrom}>
                                        <td>{ph.dateFrom}</td>
                                        <td>{ph.name}</td>
                                        <td>
                                        <button style={{marginLeft: "20px"}} onClick={ () => this.viewPublicHoliday(ph.dateFrom)} className="btn btn-info">View </button>
                                        <button style={{marginLeft: "20px"}} onClick={ () => this.editPublicHoliday(ph.dateFrom)} className="btn btn-success">Update </button>
                                        <button style={{marginLeft: "20px"}} onClick={ () => this.deletePublicHolidayById(ph.dateFrom)} className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListPublicHolidayComponent
