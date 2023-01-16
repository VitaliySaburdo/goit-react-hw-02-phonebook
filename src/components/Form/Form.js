import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
    nameId: nanoid(5),
    numberId: nanoid(5),
  };
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    nameId: PropTypes.string,
    numberId: PropTypes.string,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, nameId, numberId } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleNameChange}
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleNameChange}
            id={numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
