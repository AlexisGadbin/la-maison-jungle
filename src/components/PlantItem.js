import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function PlantItem({name, cover, id, light, water}) {
    return (
        <li key={id} className="lmj-plant-item">
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <CareScale scaleValue={light} careType="light"/>
            <CareScale scaleValue={water} careType="water"/>
        </li>
    )
}

export default PlantItem;