import React from 'react'

import logo from '../logo.svg';

import QuoteZen from '../components/QuoteZen'

export default () =>
  <div>
    <h2>Home</h2>
    <p>
      <img src={logo} className="App-logo" alt="logo" />
    </p>
    <QuoteZen firstName="Danne" />
  </div>
