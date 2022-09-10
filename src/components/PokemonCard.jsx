import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name, image}) =>{
    return <Card 
        extra={<StarOutlined/>}
        title={name || 'Ditto'}
        cover={<img src={image} alt={name}/>}>
            <Meta description='fire, magic'/>
        </Card>
}

export default PokemonCard;