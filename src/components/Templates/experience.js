import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

// Content
import DataExperience from '../../content/dataExperience';
/* import PersonalData from '../../content/personalData'; */

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: 5,
  },
  link: {
    fontSize: 12
  },
  inline: {
    display: 'inline',
  },
  paddingText: {
    paddingBottom: 10,
  }
});

class Experience extends Component {

  render() {
    
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        {DataExperience.map(data => (
          <React.Fragment key={data}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={data.title} src={data.image} />
              </ListItemAvatar>
              <ListItemText
                primary={data.title}
                secondary={
                  <React.Fragment>
                    <Typography component="span" color="textPrimary" className={classes.paddingText}>
                    {data.years}
                    </Typography>
                    <Link to={data.linkSite} className={classNames(classes.link, classes.paddingText)}>
                      {data.site}
                    </Link>
                    <Typography component="span" color="textPrimary" className={classes.paddingText}>
                    {data.team}
                    </Typography>
                    <div className={classes.paddingText}>
                      {data.settings.map(i => (
                        <Chip
                          key={i.key}
                          label={i.label}
                          className={classes.chip}
                        />
                      ))}
                    </div> 
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);