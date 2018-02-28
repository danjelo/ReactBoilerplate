import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ReduxTest from './pages/ReduxTest'
import AjaxTest from './pages/AjaxTest'
import Form from './pages/Form/Form'
import RenderProp from './pages/RenderProp'
import HOCtest from './pages/HOCtest'
import QuoteAjax from './pages/QuoteAjax'

const App = () =>
  <React.Fragment>
    <header>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Site Title</li>
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/rdx">Redux</Link></li>
            <li><Link to="/ajax">Ajax</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/RenderProp">RenderProp</Link></li>
            <li><Link to="/hoc">HOC</Link></li>
            <li><Link to="/QuoteAjax">QuoteAjax</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rdx" component={ReduxTest} />
        <Route path="/ajax" component={AjaxTest} />
        <Route path="/form" component={Form} />
        <Route path="/RenderProp" component={RenderProp} />
        <Route path="/hoc" component={HOCtest} />
        <Route path="/QuoteAjax" component={() => <QuoteAjax firstName="Danne" />} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <hr />
    <footer>
      &copy; 2018
    </footer>
  </React.Fragment>


export default App
