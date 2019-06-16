import React, { Fragment } from "react";
import PeopleList from "./components/PeopleList.js";
import DialogCount from "./components/DialogCount.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      count: [],
      email: null
    };

    this.onCharCount = this.onCharCount.bind(this);
    this.onCloseCount = this.onCloseCount.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/people")
      .then(response => response.json())
      .then(({ data }) => this.setState({ people: data }));
  }

  onCharCount(email) {
    fetch(`http://localhost:8000/people/${email}`)
      .then(response => response.json())
      .then(({ data }) => this.setState({ count: data, email }));
  }

  onCloseCount() {
    this.setState({ count: [] });
  }

  render() {
    const { people, email, count } = this.state;
    return (
      <Fragment>
        <PeopleList people={people} onCharCount={this.onCharCount} />
        <DialogCount
          open={count.length > 0}
          email={email}
          onClose={this.onCloseCount}
          charCounter={count}
        />
      </Fragment>
    );
  }
}

export default App;
