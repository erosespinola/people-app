import React, { Fragment } from "react";
import PeopleList from "./components/PeopleList.js";
import DialogCount from "./components/DialogCount.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      count: [],
      repeated: [],
      email: null
    };

    this.onCharCount = this.onCharCount.bind(this);
    this.onDuplicate = this.onDuplicate.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
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

  onDuplicate(email) {
    console.log(email);
  }

  onCloseModal() {
    this.setState({ count: [], repeated: [] });
  }

  render() {
    const { people, email, count } = this.state;
    return (
      <Fragment>
        <PeopleList
          people={people}
          onCharCount={this.onCharCount}
          onDuplicate={this.onDuplicate}
        />
        <DialogCount
          open={count.length > 0}
          email={email}
          onClose={this.onCloseModal}
          charCounter={count}
        />
      </Fragment>
    );
  }
}

export default App;
