import * as React from "react";

interface Props {
  name: string;
}

type MyState = {
  date: Date;
};

class HeaderBar extends React.Component<Props, MyState> {
  state: MyState = {
    date: new Date(),
  };
  timerID: any;

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default HeaderBar;
