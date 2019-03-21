import React from "react";
import PropTypes from "prop-types";

// Material
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  content: {
   /*  padding: theme.spacing.unit * 2 */
  }
});

class MainLayout extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div>
        <Grid container className={classes.content}>
          {children}
        </Grid>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainLayout);
