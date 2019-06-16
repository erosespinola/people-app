import React, { Fragment } from "react";
import PeopleItem from "./PeopleItem";
import { List, Divider } from "@material-ui/core";

const PeopleList = ({ people, onCharCount, onDuplicate }) => {
  return (
    <List>
      {people.map(person => (
        <Fragment key={person.email}>
          <PeopleItem
            person={person}
            onCharCount={onCharCount}
            onDuplicate={onDuplicate}
          />
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default PeopleList;
