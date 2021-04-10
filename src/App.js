import { Container, Grid } from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import Profiles from './components/Profiles/Profiles';
import { SoftwareProfile } from './pages/SoftwareProfile/SoftwareProfile';
import { EducationProfile } from './pages/EducationProfile/EducationProfile';
import { Contact } from './pages/Contact/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Profiles></Profiles>
        </Grid>
        <Grid item xs>
          <Navbar></Navbar>
          <Router>
            <Route exact path='/' component={EducationProfile} />
            <Route path='/software' component={SoftwareProfile} />
            <Route path='/contact' component={Contact} />
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
