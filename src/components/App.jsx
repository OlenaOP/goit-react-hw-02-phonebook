import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//model.id = nanoid();

import { List } from './List/List';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const nameID = nanoid();
    const arr = this.state.contacts;
    arr.push({
      id: nameID,
      name: name,
      number: number,
    });
    console.log(arr);
    console.log(name, nameID, number);
    this.setState({ contacts: arr });
    form.reset();
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              className={css.formNameInput}
              required
              // value={this.state.name}
              // onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <label>
            Number
            <input
              className={css.formNameInput}
              type="tel"
              name="number"
              required
            />
          </label>
          <button className={css.formBtn} type="submit">
            Add contact
          </button>
        </form>
        <List
          title="Contacts"
          contacts={this.state.contacts}
          // options={Object.keys(this.state)}
          // onLeaveFeedback={this.onLeaveFeedback}
        ></List>
      </div>
    );
  }
}
