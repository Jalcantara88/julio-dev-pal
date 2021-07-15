import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Intro = (props) => {
  return (
    <section className="brief">
    <h1>Julio Alcantara</h1>
    <p>
      "Mission statements or blurb"
    </p>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </section>
  );
}

export default Intro;

