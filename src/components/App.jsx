import React, { Component } from 'react';
import { nanoid } from 'nanoid';
//model.id = nanoid();

import { List } from './List/List';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const filter = this.state.filter;

    const dataSearch = e => {
      const value = e.target.value.toLowerCase();

      const filter = data.filter(user => {
        return user.name.toLowerCase().includes(value);
      });
    };

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
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            className={css.formNameInput}
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
        <List
          title="Contacts"
          contacts={this.state.contacts.filter(user => {
            return user.name.toLowerCase().includes(filter.toLowerCase());
          })}
          // options={Object.keys(this.state)}
          // onLeaveFeedback={this.onLeaveFeedback}
        ></List>
      </div>
    );
  }
}
