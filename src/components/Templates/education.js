import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// Content
import EducationList from '../../content/education';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    fontSize: 12
  },
  paddingText: {
    paddingBottom: 10,
  }
});

class Education extends Component {

  render() {
    
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        {EducationList.map(data => (
          <React.Fragment key={data}>
            <ListItem alignItems="flex-start">
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

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);