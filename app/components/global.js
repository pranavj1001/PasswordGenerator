import React, { Component } from 'react';
import { FormGroup, FormControl, Checkbox, ControlLabel, HelpBlock } from 'react-bootstrap';

class ButtonComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      smallLetters: false,
      capitalLetters: false,
      numbers: false,
      specialCharacters: false,
      resultCode: '',
      length: '32',
      warning: 'success'
    }
  }

  generateCode(){
    let mask = '';
    if(!this.state.smallLetters && !this.state.capitalLetters && !this.state.numbers && !this.state.specialCharacters){
      mask = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    } else {
      if (this.state.smallLetters) mask += 'abcdefghijklmnopqrstuvwxyz';
      if (this.state.capitalLetters) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (this.state.numbers) mask += '0123456789';
      if (this.state.specialCharacters) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    }
    let result = '';
    this.setState({warning: this.getValidationState()})
    if(this.state.warning == 'success'){
      for (let i = parseInt(this.state.length, 10); i > 0; --i)
        result += mask[Math.floor(Math.random() * mask.length)];
    }else {
      result = 'Check entered Length please';
    }
    this.setState({resultCode: result});
    //console.log(this.state.resultCode);
  }

  toggleChange(number){
    if (number == 0){
      this.setState({smallLetters: !this.state.smallLetters});
    }else if (number == 1) {
      this.setState({capitalLetters: !this.state.capitalLetters});
    }else if (number == 2) {
      this.setState({numbers: !this.state.numbers});
    }else if (number == 3){
      this.setState({specialCharacters: !this.state.specialCharacters});
    }
  }

  getValidationState() {
    if(isNaN(this.state.length) || this.state.length == 'Infinity' || this.state.length < 0){
      return 'warning';
    }else{
      return 'success';
    }
  }

  handleChange(e) {
    this.setState({ length: e.target.value });
    //console.log(this.state.length);
  }

  render(){
    return(
      <div>
        <form>
        <FormGroup
          controlId="length"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Enter the length of the code that you want to generate</ControlLabel>
          <FormControl
            type="text"
            value={this.state.length}
            placeholder="Enter text"
            onChange={e => this.handleChange(e)}
          />
          <FormControl.Feedback />
          </FormGroup>
          <HelpBlock>Make sure the length is a valid integer.</HelpBlock>
          <div className="form-check">
              <Checkbox className="form-check-input" type="checkbox" onClick={() => this.toggleChange(0)}>
               <label className="form-check-label">Small Characters a-z</label>
              </Checkbox>
          </div>
          <div className="form-check">
              <Checkbox className="form-check-input" type="checkbox" onClick={() => this.toggleChange(1)}>
               <label className="form-check-label">Capital Characters A-Z</label>
              </Checkbox>
          </div>
          <div className="form-check">
              <Checkbox className="form-check-input" type="checkbox" onClick={() => this.toggleChange(2)}>
               <label className="form-check-label">Numbers 0-9</label>
              </Checkbox>
          </div>
          <div className="form-check">
              <Checkbox className="form-check-input" type="checkbox" onClick={() => this.toggleChange(3)}>
               <label className="form-check-label">Special Characters</label>
              </Checkbox>
          </div>
        </form>
        <button className="btn btn-outline-primary generateButton" onClick={() => this.generateCode()}>Generate CODE!</button>
        <p className="alert alert-info lead answer">The Generated Code is: {this.state.resultCode}</p>
      </div>
    )
  }

}

export default ButtonComponent;
