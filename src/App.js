import { Container, Grid } from "@material-ui/core";
import Profiles from './pages/Profiles/Profiles'
import { SoftwareProfile } from "./pages/SoftwareProfile/SoftwareProfile";
import { EducationProfile } from "./pages/EducationProfile/EducationProfile";
import { Contact } from "./pages/Contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";

function App() {
  return (
    <Container className="top60">
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Profiles></Profiles>
        </Grid>
        <Grid item xs>
          <Router>            
          <CustomNavbar />
            <div className='main_content'>
            <Switch>
              <Route exact path="/" component={EducationProfile} />
              <Route path="/software" component={SoftwareProfile} />
              <Route path="/contact" component={Contact} />
            </Switch>
            </div>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
