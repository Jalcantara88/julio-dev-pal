import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Link} from 'react-router-dom';

const Intro = () => {
  return (
    <header className="brief">
        <h1>Julio Alcantara</h1>
        <p>
        "Mission statements or blurb"
        </p>
        <ButtonGroup>
        <Button tag={Link} to="https.www.google.com"><i class="socialLink fab fa-github fa-2x"></i></Button>
        <Button><i class="socialLink fab fa-linkedin fa-2x"></i></Button>
        <Button><i class="socialLink fab fa-behance-square fa-2x"></i></Button>
        <Button><i class="socialLink fab fa-youtube fa-2x"></i></Button>

        </ButtonGroup>
    </header>
  );
}

export default Intro;

