import React, { Component } from 'react';
import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';

class ButtonCompoment extends Component {

  render(){
    return(
      <div>
        <form>
        <div className="form-check">
            <Checkbox className="form-check-input" type="checkbox" value="">
             <label className="form-check-label">Small Characters a-z</label>
            </Checkbox>
        </div>
        <div className="form-check">
            <Checkbox className="form-check-input" type="checkbox" value="">
             <label className="form-check-label">Capital Characters A-Z</label>
            </Checkbox>
        </div>
        <div className="form-check">
            <Checkbox className="form-check-input" type="checkbox" value="">
             <label className="form-check-label">Numbers 0-9</label>
            </Checkbox>
        </div>
        <div className="form-check">
            <Checkbox className="form-check-input" type="checkbox" value="">
             <label className="form-check-label">Special Characters</label>
            </Checkbox>
        </div>
        </form>
        <button className="btn btn-outline-primary generateButton">Generate CODE!</button>
      </div>
    )
  }

}

export default ButtonCompoment;
