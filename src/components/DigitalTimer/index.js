import {Component} from 'react'
import './index.css'

const intialstate = {
  istimerinprogress: false,
  timeelapsedinsec: 0,
  timelimitinminutes: 25,
}

class DigitalTimer extends Component {
  state = intialstate

  mytimers = () => {
    const {timeelapsedinsec, timelimitinminutes} = this.state
    const timeinsec = timelimitinminutes * 60 - timeelapsedinsec
    console.log(timeinsec)
    const minutes = timeinsec / 60
    console.log(minutes)
    const seconds = timeinsec % 60
    console.log(seconds)
    const minutesformat = minutes > 9 ? minutes : `0${minutes}`
    const secondsformat = seconds > 9 ? seconds : `0${seconds}`
    return `${minutesformat}:${secondsformat}`
  }

  mystartpausebutton = () => {
    this.setState(prevState => ({
      istimerinprogress: !prevState.istimerinprogress,
    }))
  }

  startreset = () => {
    const {istimerinprogress} = this.state
    const myimageurl = istimerinprogress
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const myalternatetext = istimerinprogress ? 'pause icon' : 'play icon'
    return (
      <div className="startresetcontainer">
        <div className="startpausecontainer">
          <button
            className="buttonsty"
            type="button"
            onClick={this.mystartpausebutton}
          >
            <img src={myimageurl} alt={myalternatetext} className="imgsty" />
          </button>
          <p className="texttimer">Start</p>
        </div>
        <div className="startpausecontainer">
          <button className="buttonsty" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
              alt="reset icon"
              className="imgsty"
            />
          </button>
          <p className="texttimer">Reset</p>
        </div>
      </div>
    )
  }

  decrement = () => {
    this.setState(prevState => ({
      timelimitinminutes: prevState.timelimitinminutes - 1,
    }))
  }

  increment = () => {
    this.setState(prevState => ({
      timelimitinminutes: prevState.timelimitinminutes + 1,
    }))
  }

  timelimiter = () => {
    const {timelimitinminutes, timeelapsedinsec} = this.state
    const isdisabled = timeelapsedinsec > 0
    console.log(isdisabled)
    return (
      <div className="incerdercerecontainer">
        <button
          className="minusbutton"
          onClick={this.decrement}
          type="button"
          disabled={isdisabled}
        >
          -
        </button>
        <div className="mincontainer">{timelimitinminutes}</div>
        <button
          className="minusbutton"
          onClick={this.increment}
          type="button"
          disabled={isdisabled}
        >
          +
        </button>
      </div>
    )
  }

  render() {
    const {istimerinprogress} = this.state
    return (
      <div className="backgroundcontainer">
        <h1 className="heading">Digital Timer</h1>
        <div className="imgsettimercontainer">
          <div className="imgele">
            <div className="whitecontainer">
              <h1>{this.mytimers()}</h1>
              <p>{istimerinprogress ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="pauseresetcontainer">
            {this.startreset()}
            <p>Set Timer Limit</p>
            {this.timelimiter()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
