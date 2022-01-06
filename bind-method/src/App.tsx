import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppState {
  name: string;
  count: number;
}
interface AppProps {
  count: number;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: "GFG", count: props.count };
    this.handlerName = this.handlerName.bind(this);
    this.handlerCount = this.handlerCount.bind(this);
  }

  handlerName = (name: string) => {
    this.setState({ name: "name" });
  };
  handlerCount = (count: number) => {
    this.setState({ count: count });
  };

  render() {
    return (
      <>
        <div>
          <h1>Name:{this.state.name}</h1>
          <h1>Click here to change the name </h1>
          <button
            onClick={() => {
              this.handlerName("Geek For Geek");
            }}
          >
            Click Here
          </button>
        </div>
      </>
    );
  }
}
export default App;
