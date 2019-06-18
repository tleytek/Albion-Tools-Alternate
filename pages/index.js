import React from 'react';
import Layout from '../components/Layout';
import { Grid } from 'semantic-ui-react';

const About = () => (
  <div className="about">
    <h3>Proudly Powered by</h3>
    <h1>
      <a href="http://www.albion-online-data.com/">the Albion Online Data Project</a>
    </h1>
    <div className="ui divider" />
    <p>
      Albion Tools is very reminiscent of{' '}
      <a href="http://albionassistant.com/Default.aspx">Albion Assistant</a> and is quite frankly an
      imitation of it's styling and format. That's because I like there style and as the saying goes
      <div className="phrase">"imitation is the sincerest form of flattery".</div>
    </p>
    <p>
      Now... Albion Tools relies heavily on the Albion Online Data Project as its source of market
      data.
    </p>
    <style jsx>{`
      .about {
        display: flex;
        flex-direction: column;
        padding: 2em;
      }
      h1 {
        margin-top: 0px;
      }
      p {
        font-size: 1.1rem;
      }
      .phrase {
        font-style: italic;
        font-weight: bold;
      }
    `}</style>
  </div>
);

const Index = () => (
  <Layout title="Home">
    <div className="ui placeholder segment" style={{ zIndex: 0, margin: '-10px 10px' }}>
      <h1>Albion Tools</h1>
    </div>
    <Grid columns={2}>
      <Grid.Column width={9}>{About()}</Grid.Column>
      <Grid.Column width={7}>Dev</Grid.Column>
    </Grid>
  </Layout>
);

export default Index;
