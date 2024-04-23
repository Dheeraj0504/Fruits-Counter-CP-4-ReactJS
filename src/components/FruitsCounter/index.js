// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state= {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickEatMango = () => {
    // console.log("Ate Mango")
    this.setState( (prevState) => {
      // console.log(`previous state value ${prevState.mangoesCount}`)
      return {
        mangoesCount: prevState.mangoesCount + 1
      }
    })
  }

  onClickEatBanana = () => {
    // console.log("Ate Banana")
    this.setState( (prevState) => {
      // console.log(`previous state value ${prevState.bananasCount}`)
      return {
        bananasCount: prevState.bananasCount + 1
      }
    })
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button className="button" type="button" onClick={this.onClickEatMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button className="button" type="button" onClick={this.onClickEatBanana} >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
