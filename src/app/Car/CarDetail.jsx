import React, { Component } from 'react';

class CarDetail extends Component {
    constructor( props){
        super(props);
        this.state={};
        this.handleRedirect = this.handleRedirect.bind(this);
    }
    handleRedirect(){
        this.props.history.goBack();
    }
    render(params){
        console.log("params detail:> ",this.props);
        const cars = this.props.data;
        const id = this.props.id;
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div className="container">
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>Year</strong>: {car[0].year}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect} >Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail