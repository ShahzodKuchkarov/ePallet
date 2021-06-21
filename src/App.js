import React from 'react';
import SearchNavbar from './components/SearchNavbar';
import TopNavbar from './components/TopNavbar';
import { Switch, Route } from 'react-router-dom';
import Frozen from './components/Frozen';
import Links from './components/Links';

function App() {
  return (
    <>
      <TopNavbar />
      <SearchNavbar />
      <Links />
      <Switch>
        <Route path="/frozen" component={Frozen} />
        {/*         <Route path="" component={Frozen}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/>
        <Route path="" component={}/> */}
      </Switch>
    </>

  );
}

export default App;
