import React from "react";
import PeopleList from "./components/peopleList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8000/people")
      .then(response => response.json())
      .then(({ data }) => this.setState({ people: data }));
  }

  render() {
    const { people } = this.state;
    return <PeopleList people={people} />;
  }
}

export default App;
