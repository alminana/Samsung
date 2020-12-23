import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/UI/banner/banner'
import Section from './components/Section'
import Brand from './components/UI/brand/Brand'
import {DataProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Banner/>
            <Brand/>
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
