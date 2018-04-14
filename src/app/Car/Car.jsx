import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Car extends Component {
    constructor( props){
        super(props);
       
        this.state = {};
        this.backToHome = this.backToHome.bind(this);
    }
    backToHome(){
        //this.props.history.push("/");
        this.props.history.goBack();
    }
    render(){
        // Get data from route props
        const cars = this.props.data;
        // Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
                <Link  to={"/cars/"+car.id}  className="list-group-item"  key={car.id}> {car.name}  </Link>
            )
        });
        return (
            <div className="container ">
            <div className="form-main-cover">
                <div  className="col-sm-6 form-wrapper">
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
                </div>
                <div className="col-md-12">
                    <button className="btn btn-default" onClick={this.backToHome} > Back</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Car
