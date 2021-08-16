import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react"

interface ContainerProps { }

const FeedUpload: React.FC<ContainerProps> = () => {
    return (
        <form>
            <label>
                <input />
                <img />
                <a href="" ion-button color="secondary">Select a photo</a>
            </label>
            <IonItem>
                <IonLabel position="floating" color="primary">Caption</IonLabel>
                <IonInput type="text" required></IonInput>
            </IonItem>
            <IonButton color="primary" type="submit">Post</IonButton>
        </form>
    )
}

export default FeedUpload