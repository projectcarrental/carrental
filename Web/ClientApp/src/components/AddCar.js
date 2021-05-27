﻿import React, { Component } from 'react';
import './AddCar.css'

export class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationNumber: '',
      model: '',
      kilometersRun: '',
      price: '',
      productionYear: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    // here we will send the data to the server!
    console.log("Sending!");
    this.sendTheData();

    event.preventDefault();
  }

  async sendTheData() {
    let request = {
      registrationNumber: this.state.registrationNumber,
      model: this.state.model,
      kilometersRun: parseInt(this.state.kilometersRun),
      price: parseInt(this.state.price),
      productionYear: this.state.productionYear
    }

    let response = await fetch('/api/cars', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  }

  handleInputChange(event) {
    let theElement = event.target;
    let nameOfTheElement = theElement.name;
    let valueOfTheElement = theElement.value;
    this.setState({ [nameOfTheElement]: valueOfTheElement });
  }

  render() {
    return (
      <div>
        <h1 className="AddTopMargin">Registrera din bil!</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="formGroupExampleInput">Registrerings nummer</label>
            <input
              name="registrationNumber"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="ABC 123"
              onChange={this.handleInputChange}
              value={this.state.registrationNumber}
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Bilmodel</label>
            <input
              name="model"
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Volvo V90"
              onChange={this.handleInputChange}
              value={this.state.model}
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Årsmodell</label>
            <input
              name="productionYear"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="1997"
              onChange={this.handleInputChange}
              value={this.state.productionYear}
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Miltal</label>
            <input
              name="kilometersRun"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="10 000"
              onChange={this.handleInputChange}
              value={this.state.kilometersRun}
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Pris</label>
            <input
              name="price"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="over 9000"
              onChange={this.handleInputChange}
              value={this.state.price}
            />
          </div>
          {/*<div class="form-group">*/}
          {/*  <label for="formGroupExampleInput2">Något mer att tillägga?</label>*/}
          {/*  <textarea*/}
          {/*    class="form-control"*/}
          {/*    rows="5"*/}
          {/*    value={this.state.message}*/}
          {/*    onChange={this.handleInputChange}*/}
          {/*    name="message"*/}
          {/*  ></textarea>*/}
          {/*</div>*/}
          <div className="form-group AddBottomMargin">
            <input type="submit" class="btn btn-primary" value="Send" />
          </div>
        </form>
      </div>
    )
  }
}