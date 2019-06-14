import React, { Fragment } from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

const PeopleList = ({ people }) => (
  <List>
    {people.map(({ email, name, title }) => (
      <Fragment key={email}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={`avatar-${email}`}
              src={`https://api.adorable.io/avatars/40/${email}`}
            />
          </ListItemAvatar>
          <ListItemText primary={`${name} (${email})`} secondary={title} />
        </ListItem>
        <Divider />
      </Fragment>
    ))}
  </List>
);

export default PeopleList;
