import React from 'react';

export class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: 0};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          time: this.state.time + 1
        });
        this.props.TransferProps({atualTime: this.state.time})
      }
    
  
    render() {
      return (
        <div>   
          <h2>{this.state.time} min</h2>
        </div>
      );
    }
  }