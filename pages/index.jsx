import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  jumbotron: {
    marginBottom: theme.spacing(2)
  },
  cardHeader: {
    paddingLeft: theme.spacing(1)
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  icon: {
    textDecoration: 'none'
  }
}));

const About = () => (
  <Grid md={6}>
    <Typography variant="h4" gutterBottom>
      Proudly Powered by
    </Typography>

    <Typography variant="h6" gutterBottom>
      <a href="http://www.albion-online-data.com/">the Albion Online Data Project</a>
    </Typography>

    <Typography variant="p" component="p" paragraph>
      The goal of this site is to create unique tools that don&apos;t exist on other albion fansites
      yet
    </Typography>

    <Typography variant="p" component="p" paragraph>
      Albion Tools is very reminiscent of
      {' '}
      <a href="http://albionassistant.com/Default.aspx" target="_blank" rel="noreferrer noopener">
        Albion Assistant
      </a>
      {' '}
      and is quite frankly an imitation of it&apos;s styling and format. That&apos;s because I like
      their style and as the saying goes,
    </Typography>

    <Typography variant="p" component="p" paragraph>
      &quot;imitation is the sincerest form of flattery&quot;.
    </Typography>
    <Typography variant="p" component="p" paragraph>
      That being said, Albion Tools relies heavily on the Albion Online Data
      {' '}
      <a
        href="https://github.com/BroderickHyman/albiondata-client/releases"
        target="_blank"
        rel="noreferrer noopener"
      >
        Client
      </a>
      {' '}
      as its source of market data. This is because the market data given by the Albion Online Data
      Project is sourced by YOU the player. As you recieve data for the auction house listings and
      black market listings, the Client watches that data coming in and sends it off to its server
      where you and other players can then use!
    </Typography>
  </Grid>
);

const Dev = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({ blackMarket: false });

  const handleExpandClick = value => {
    // const value = event.currentTarget.getAttribute('aria-label');
    setExpanded(oldValues => ({
      ...oldValues,
      [value]: !expanded[value]
    }));
  };

  return (
    <Grid md={6}>
      <Card>
        <CardHeader
          title="Albion Tools Development"
          action={(
            <Link
              href="https://github.com/tleytek/Albion-Tools-Alternate"
              underline="none"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconButton className="fa fa-github" style={{ fontSize: '32px' }} />
            </Link>
)}
        />

        <CardActions>
          <Typography className={classes.cardHeader} variant="h6" component="h6">
            Black Market Crafting
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded.blackMarket
            })}
            onClick={() => handleExpandClick('blackMarket')}
            aria-expanded={expanded.blackMarket}
            aria-label="blackMarket"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded.blackMarket} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>BlackMarket</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const Index = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        direction="column"
        alignItems="center"
        className={classes.jumbotron}
      >
        <Typography variant="h1">Albion Tools</Typography>
        <Typography variant="subtitle1">A collection of tools for Albion Online</Typography>
      </Grid>
      {About()}
      {Dev()}
    </Grid>
  );
};
export default Index;
