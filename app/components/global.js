import React, { Component } from 'react';
import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class ButtonCompoment extends Component {

  constructor(props){
    super(props);
    this.state = {
      smallLetters: false,
      capitalLetters: false,
      numbers: false,
      specialCharacters: false
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
    for (let i = 32; i > 0; --i)
      result += mask[Math.floor(Math.random() * mask.length)];
    console.log(result);;
  }

  toggleChange(number){
    if (number == 0){
      this.state.smallLetters = !this.state.smallLetters;
    }else if (number == 1) {
      this.state.capitalLetters = !this.state.capitalLetters;
    }else if (number == 2) {
      this.state.numbers = !this.state.numbers;
    }else if (number == 3){
      this.state.specialCharacters = !this.state.specialCharacters;
    }
  }

  render(){
    return(
      <div>
        <form>
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
      </div>
    )
  }

}

export default ButtonCompoment;
