import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Button,
  ButtonGroup
} from "@material-ui/core";

const PeopleItem = ({ person, onCharCount, onDuplicate }) => {
  const { email, name, title } = person;
  return (
    <ListItem style={{ paddingRight: "200px" }}>
      <ListItemAvatar>
        <Avatar
          alt={`avatar-${email}`}
          src={`https://api.adorable.io/avatars/40/${email}`}
        />
      </ListItemAvatar>
      <ListItemText primary={`${name} (${email})`} secondary={title} />
      <ListItemSecondaryAction>
        <ButtonGroup size="small" color="primary">
          <Button onClick={() => onCharCount(email)}>Count</Button>
          <Button onClick={() => onDuplicate(email)}>Duplicate</Button>
        </ButtonGroup>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PeopleItem;
