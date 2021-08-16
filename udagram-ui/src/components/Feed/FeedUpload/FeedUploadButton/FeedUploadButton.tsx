import React from "react"
import { IonButton } from "@ionic/react"

interface ContainerProps { }

const FeedUploadButton: React.FC<ContainerProps> = () => {
    const [ text, setText ] = React.useState("Create a new post!")
    return (
        <IonButton color="primary" type="submit" onClick={() => setText("presentUploadForm($event)") }>{ text }</IonButton>
    )
}

export default FeedUploadButton