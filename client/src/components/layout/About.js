import React, {Fragment,} from 'react';
import { Header, Segment} from "semantic-ui-react";

const About = () => (
  <Fragment>
  <Header as="h1" textAlign="center">About</Header>
  <Segment raised>
    <Header textAlign="center" style={{padding: '20px 0 '}}>
      This is an app for practicing React Router with React and Rails. 
    </Header>
  </Segment>
  </Fragment>
)

export default About;