import { Component } from 'react';
import { Form } from './Form/Form'
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHendler = ({name, number}) => {
    const contact = {
        id: nanoid(3),
        name,
        number,
      }
      this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    })); 
}

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHendler} />
        <p></p>
      </>
    );
  }
}
