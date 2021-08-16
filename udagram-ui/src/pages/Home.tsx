import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import MenuBar from '../components/MenuBar/MenuBar';
import './Home.css';

/*
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Udagram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};
*/

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonSplitPane>
        <IonMenu>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Menu
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem>
                  <IonIcon slot="start"></IonIcon>
                  <IonLabel>
                    title of icon
                  </IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonContent>
          <MenuBar />
        </IonContent>
      </IonSplitPane>
    </IonApp>
  )
}
export default Home;
