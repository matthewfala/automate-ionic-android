import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonList, IonItem, IonCheckbox, IonLabel, IonBadge, IonNote,
         IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import React from 'react';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Check Lists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Check List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start"/>
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Matt</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={ () => props.history.push('/new') }>
            <IonIcon icon={add} />
          </IonFabButton>          
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
