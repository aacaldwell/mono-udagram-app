import "./FeedList.css"
import FeedItem from "../FeedItem/FeedItem"

interface ContainerProps { }

const FeedList: React.FC<ContainerProps> = () => {
    return (
        <div className="feed">
            <FeedItem></FeedItem>
        </div>
    )
}

export default FeedList