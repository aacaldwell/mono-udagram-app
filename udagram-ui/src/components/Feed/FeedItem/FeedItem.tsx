import "./FeedItem.css"
import { IonCard, IonCardContent, IonImg } from "@ionic/react"

interface ContainerProps { }

const FeedItem: React.FC<ContainerProps> = () => {
    return (
        <IonCard>
            <IonImg className="photo-card"></IonImg>
            <IonCardContent>
                Card Content
            </IonCardContent>
        </IonCard>
    )
}

export default FeedItem