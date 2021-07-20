import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Row, Col, Button } from 'reactstrap';
import SocialButtons from "../components/socialBtnsComp";


const ContactForm = (props) => {
  return (
      <>
    <Form className="contactForm">
    <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="name" name="name" id="email" placeholder="John Doe" />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="examplePassword" placeholder="JD1294@gmail.com" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="subject">Subject</Label>
        <Input type="text" name="subject" id="subject" placeholder="Project or Job Offer"/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="textarea" name="message" id="message" placeholder="I have something that might be perfect for you..."/>
      </FormGroup>
      
      
      <Button id="yellowBtn">Send</Button>
      <SocialButtons full={true} contact={false}/>

    </Form>
    </>

  );
}

export default ContactForm;