import React, { Fragment } from "react";
import { LinearProgress } from "@material-ui/core";
import PeopleList from "./components/PeopleList.js";
import PeopleDialog from "./components/PeopleDialog.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      modalData: [],
      email: null,
      fetching: true
    };

    this.onCharCount = this.onCharCount.bind(this);
    this.onDuplicate = this.onDuplicate.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onAPICall = this.onAPICall.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/people")
      .then(response => response.json())
      .then(({ data }) => this.setState({ people: data, fetching: false }));
  }

  onAPICall(email, op) {
    this.setState({ fetching: true });
    fetch(`http://localhost:8000/people/${email}/${op}`)
      .then(response => response.json())
      .then(({ data }) =>
        this.setState({ modalData: data, email, fetching: false })
      );
  }

  onCharCount(email) {
    this.onAPICall(email, "count");
  }

  onDuplicate(email) {
    this.onAPICall(email, "suggested");
  }

  onCloseModal() {
    this.setState({ count: [], repeated: [], email: null });
  }

  render() {
    const { people, email, modalData, fetching } = this.state;
    return (
      <Fragment>
        {fetching && <LinearProgress />}
        <PeopleList
          people={people}
          onCharCount={this.onCharCount}
          onDuplicate={this.onDuplicate}
        />
        <PeopleDialog
          open={!!email}
          email={email}
          onClose={this.onCloseModal}
          data={modalData}
        />
      </Fragment>
    );
  }
}

export default App;
