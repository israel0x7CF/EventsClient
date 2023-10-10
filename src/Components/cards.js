import { Card } from "antd"


const CardView=(props)=>{
    const {Meta} = Card
    const cardprops = props.cardInfo;
    return (
        <Card
            style={{width:cardprops.width}}
            hoverable
        >
            <Meta title={cardprops.title} description={cardprops.description}></Meta>
        </Card>
    )
}
export default CardView;