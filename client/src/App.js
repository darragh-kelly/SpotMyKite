import React, { useState, useEffect } from 'react';
import ApiClient from './services/ApiClient';
import KiteList from './components/KiteList';
import SpotMap from './components/SpotMap';
import UserForm from './components/UserForm';
import Navbar from './components/NavBar';
import Router from './components/Router';
import { Grid } from 'semantic-ui-react';
import video from './video/video.mp4';

export default () => {
  const [spotLists, setSpotLists] = useState([]);
  const [formData, setFormData] = useState([]);

  console.log(spotLists);

  const belgianKiteSpots = [
    'Oostduinkerke',
    'Zeebrugge',
    'Bredene',
    'Koksijde-Bad',
    'Blankenberge',
    'Groenendijk',
    'De Panne',
  ];

  const onDelete = (term) => {
    spotLists.map((list, i) => {
      if (list.name === term) {
        spotLists.splice(i, 1);
        return setSpotLists([...spotLists]);
      }
    });
  };

  useEffect(() => {
    for (let spot of belgianKiteSpots) {
      ApiClient.fetchRequest(spot).then((data) =>
        setSpotLists((spotLists) => [...spotLists, data])
      );
    }
  }, []);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%,-50%)',
          zIndex: '-1',
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div>
        <Navbar />
        <Router path="/">
          <Grid columns="equal" centered>
            <Grid.Row>
              <Grid.Column>
                <KiteList
                  spotLists={spotLists}
                  formData={formData}
                  myClick={onDelete}
                />
              </Grid.Column>
              <Grid.Column>
                <UserForm
                  onChange={(value1, value2) => {
                    setFormData([value1, value2]);
                  }}
                />
                <SpotMap spotLists={spotLists} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
        <Router path="/ExtendedForecast">
          <div>hello</div>
        </Router>
      </div>
    </>
  );
};
