import "./MenuBar.css"
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"

interface ContainerProps { }

const MenuBar: React.FC<ContainerProps> = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>
                    Udagram
                </IonTitle>
                <IonButtons slot="end">
                    Locate app auth menu buttons here
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default MenuBar