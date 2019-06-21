import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

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
      imitation of it's styling and format. That's because I like their style and as the saying
      goes,
    </p>
    <p className="phrase">"imitation is the sincerest form of flattery".</p>
    <p>
      That being said, Albion Tools relies heavily on the Albion Online Data{' '}
      <a href="https://github.com/BroderickHyman/albiondata-client/releases">Client</a> as its
      source of market data. This is because the market data given by the Albion Online Data Project
      is sourced by YOU the player. As you recieve data for the auction house listings and black
      market listings, the Client watches that data coming in and sends it off to its server where
      you and other players can then use!
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
        line-height: 1.6em;
        font-size: 1.2rem;
      }
      .phrase {
        font-size: 2rem;
        font-style: italic;
        font-weight: bold;
      }
    `}</style>
  </div>
);

const Dev = () => (
  <div className="dev">
    <div className="ui fluid card">
      <div className="content">
        <div className="header">Development Progress</div>
      </div>
    </div>
    <style jsx>{`
      .dev {
        display: flex;
        flex-direction: column;
        padding: 2em;
      }
    `}</style>
  </div>
);

const Index = () => {
  const theme = useTheme();
  return (
    <div>
      <div
        className="ui placeholder segment"
        style={{ alignSelf: 'stretch', margin: '-10px 10px' }}>
        <div className="segment-style">
          <h1>Albion Tools</h1>
          <p>A collection of tools for the MMO, Albion Online</p>
        </div>
      </div>

      {About()}
    </div>
  );
};
export default Index;
