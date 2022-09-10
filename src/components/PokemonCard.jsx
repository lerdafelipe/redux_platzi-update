import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name}) =>{
    return <Card 
        extra={<StarOutlined/>}
        title={name || 'Ditto'}
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}>
            <Meta description='fire, magic'/>
        </Card>
}

export default PokemonCard;