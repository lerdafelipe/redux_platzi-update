import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import StarButton from "./StarButton";

const PokemonCard = ({name, image, types, id, favorite}) =>{
    const dispatch = useDispatch();
    const typeString = types.map(elem => elem.type.name).join(', ');

    const handleFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return <Card 
        extra={<StarButton isFavorite={favorite} onClick={handleFavorite}/>}
        title={name || 'Ditto'}
        cover={<img src={image} alt={name}/>}>
            <Meta description={typeString}/>
        </Card>
}

export default PokemonCard;