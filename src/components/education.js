import React from 'react';
import classNames from 'classnames';
// Material
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// Content
import EducationList from '../content/education';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    fontSize: 12
  },
  paddingText: {
    paddingBottom: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default function Education () {

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {EducationList.map(data => (
        <React.Fragment key={data}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={data.title}
              secondary={
                <div className={classes.list}>
                  <Typography component="span" color="textPrimary" className={classes.paddingText}>
                  {data.years}
                  </Typography>
                  <Link to={data.linkSite} className={classNames(classes.link, classes.paddingText)}>
                    {data.site}
                  </Link>
                  <Typography component="span" color="textPrimary" className={classes.paddingText}>
                  {data.team}
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
