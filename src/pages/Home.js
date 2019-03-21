import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Components
import Experience from '../components/Templates/experience';
import Education from '../components/Templates/education';
import Data from '../components/Templates/dates';

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 2,
  },
  layout: {
    width: '100%',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 4}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    paddingTop: 10
  },
  subTitle: {
    fontSize: 16
  },
  titleSection: {
    fontSize: 18,
    padding: 15,
    color: 'black',
    background: '#ccc'
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <Avatar alt="Remy Sharp" src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png" className={classes.avatar} />
              <Typography component="h1" variant="h1" align="center" color="textPrimary" className={classes.title}>
                Nombre Completo
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph className={classes.subTitle}>
                Ocupación de ejemplo
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button href="#" variant="contained" color="primary">
                      Github
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button href="#" variant="contained" color="secondary">
                      Linkedin
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Typography component="h2" variant="h2" align="left" color="textPrimary" className={classes.titleSection}>
                Datos Personales
              </Typography>
              <Data />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Typography component="h2" variant="h2" align="left" color="textPrimary" className={classes.titleSection}>
                Objetivos Personales
              </Typography>
              <CardContent>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis sem vel cras potenti, eget proin ante tellus urna viverra aliquam auctor curae curabitur convallis, cum dignissim magna porttitor sed integer quam eros aptent euismod rutrum. 
                Rutrum rhoncus vitae risus nullam vehicula, lacinia id eu ornare, sem arcu ac dapibus. <br />
                Suscipit dapibus odio eu conubia maecenas lobortis leo ad fermentum habitant, commodo lacinia curabitur natoque convallis mauris non sodales nulla habitasse platea, ligula fames purus ultricies viverra nascetur netus nibh tempus.
                <br /><br />
                Odio nunc leo orci cras est etiam malesuada justo lobortis, id rutrum mattis nascetur magnis enim ridiculus sem, sociis quisque fusce posuere sociosqu pellentesque platea aliquet. 
                Nulla placerat mollis accumsan mus sodales ligula torquent, sollicitudin lectus iaculis bibendum natoque condimentum venenatis, eu class ut pretium fermentum egestas. <br />
                Tempor nunc vulputate ridiculus nulla erat parturient dui integer nisl, per senectus sem congue malesuada phasellus vivamus neque iaculis natoque, venenatis dignissim tempus facilisi magna torquent litora tortor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Typography component="h2" variant="h2" align="left" color="textPrimary" className={classes.titleSection}>
                Experiencia Laboral
              </Typography>
              <Experience />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Typography component="h2" variant="h2" align="left" color="textPrimary" className={classes.titleSection}>
                Estudios Cursados
              </Typography>
              <Education />
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);