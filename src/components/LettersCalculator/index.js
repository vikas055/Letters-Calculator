// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputPhrase = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    return (
      <div className="background-container">
        <div className="input-and-img-contianer">
          <div className="input-container">
            <h1 className="heading">
              Calculate the <br />
              Letters You
              <br /> enter
            </h1>
            <label className="sub-heading" htmlFor="phraseText">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the Phrase"
              onChange={this.onChangeInputPhrase}
              id="phraseText"
            />
            <p className="no-of-letters">No.of letters: {searchInput.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
