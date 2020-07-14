import React from 'react';
// Material
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// Content
import PersonalData from '../content/personalData';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    fontSize: 12
  }
}));

export default function Data () {

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {PersonalData.map(data => (
        <React.Fragment key={data}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Nombre Completo"
              secondary={
                <Typography component="span" color="textPrimary">
                  {data.name} {data.lastName}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Edad"
              secondary={
                <Typography component="span" color="textPrimary">
                  {data.age}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Email"
              secondary={
                <Typography component="span" color="textPrimary">
                  {data.email}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Teléfono"
              secondary={
                <Typography component="span" color="textPrimary">
                  {data.phone}
                </Typography>
              }
            />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}