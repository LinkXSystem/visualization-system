import React, { Component } from 'react';
import Header from './models/header';
import Footer from './models/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import {
  Main,
  Article,
  ArticleDetail,
  Column,
  ColumnDetail,
  Editor,
} from './routes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      routers: [
        {
          label: 'Data Visualization',
          icon: '',
          href: '/',
        },
        {
          label: 'Article',
          icon: '',
          href: '/article',
        },
        {
          label: 'Column',
          icon: '',
          href: '/column',
        },
      ],
      marker: logo,
    };
  }

  render() {
    const { routers, marker } = this.state;

    return (
      <section className="container">
        <BrowserRouter>
          <React.Fragment>
            <Header routers={routers} marker={marker} />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/article/:uuid/detail" component={ArticleDetail} />
              <Route path="/article" component={Article} />
              <Route path="/column/:uuid/detail" component={ColumnDetail} />
              <Route path="/column" component={Column} />
              <Route path="/editor" component={Editor} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </section>
    );
  }
}
