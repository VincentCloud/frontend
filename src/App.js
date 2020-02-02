import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import MarkerInfoWindow from './Dashboard';
//import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/request">Make a request</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/Dashboard">
            <MarkerInfoWindow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Login() {
  return (
    <Form className="login-form">
      <h1>
        {' '}
        <span className="font-weight-bold">Saving Humanity</span>
      </h1>
      <h2> Hospital Login</h2>
      <FormGroup>
        <Label>Username</Label>
        <Input type="email" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Login</Button>
      <div className="text-center">
        <Router>
          <Link to={'/Signup'}>Sign Up</Link>
        </Router>
        <span className="p-2">|</span>
        <a href="/sign-up">Forgot Password</a>
      </div>
    </Form>
  );
}

function SignUp() {
  return (
    <Form className="login-form">
      <h1>
        {' '}
        <span className="font-weight-bold">Saving Humanity</span>
      </h1>
      <h2> Hospital Sign Up</h2>
      <FormGroup>
        <Label>Name of Hospital</Label>
        <Input type="email" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label>Username</Label>
        <Input type="email" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Label>City</Label>
        <Input type="email" placeholder="City" />
      </FormGroup>
      <FormGroup>
        <Label>State</Label>
        <Input type="email" placeholder="State" />
      </FormGroup>
      <FormGroup>
        <Label>Street Address</Label>
        <Input type="email" placeholder="Street Address" />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input type="email" placeholder="Description" />
      </FormGroup>
      <FormGroup>
        <Label>Contact</Label>
        <Input type="email" placeholder="XXXXXX" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Login</Button>
      <div className="text-center"></div>
    </Form>
  );
}

function Request() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Emergency Level</DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider /> */}
        <DropdownItem>Low</DropdownItem>
        <DropdownItem>Medium</DropdownItem>
        <DropdownItem>High</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
