import { Button, 
    ButtonGroup 
} from 'reactstrap';

const SocialButtons = ({full, contact}) => {
    var contactBtn = <></>;
    var otherBtns = <></>
    if(contact) {
        contactBtn = <Button id="contactBtn">Contact</Button>;
    }

    if(full) {
        otherBtns = <>
            <Button><i className="socialLink fab fa-github fa-2x"></i></Button>
            <Button><i className="socialLink fab fa-linkedin fa-2x"></i></Button>
            <Button><i className="socialLink fab fa-behance-square fa-2x"></i></Button>
        </>
    }
    return(
        <ButtonGroup className="my-3 profileLinks">
            <Button><i className="socialLink fab fa-github fa-2x"></i></Button>
            <Button><i className="socialLink fab fa-linkedin fa-2x"></i></Button>
            <Button><i className="socialLink fab fa-behance-square fa-2x"></i></Button>
            {/*<Button><i class="socialLink fab fa-youtube fa-2x"></i></Button>*/}
            {otherBtns}
            {contactBtn}
        </ButtonGroup>
    )
}

export default SocialButtons;