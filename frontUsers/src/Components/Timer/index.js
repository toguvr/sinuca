import React from 'react';
import { setCurrentTime, getTimers } from '../../actions'
import { connect } from "react-redux";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.getTimers()
    setCurrentTime({
      time: 0,
      tablePlaying: this.props.tablePlaying
    })

    this.timerID = setInterval(
      () => this.tick(),
      60000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const locale = "timer" + this.props.tablePlaying
    const currentTime = this.props.timer[locale]
    this.props.setCurrentTime({
      time: currentTime + 1,
      tablePlaying: this.props.tablePlaying
    });
  }


  render() {
    const locale = "timer" + this.props.tablePlaying
    const currentTime = this.props.timer[locale]
    return (
      <div>
        <h2>{currentTime} min</h2>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  timer: state.timer
})

const mapDispatchToProps = dispatch => ({
  setCurrentTime: (playerData) => dispatch(setCurrentTime(playerData)),
  getTimers: () => dispatch(getTimers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)