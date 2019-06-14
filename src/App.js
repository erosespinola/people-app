import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:8000/people")
      .then(response => response.json())
      .then(({ data }) => console.log(data));
  }

  render() {
    return <p>hi</p>;
  }
}

export default App;
