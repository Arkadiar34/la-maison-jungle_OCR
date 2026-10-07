import { plantList } from '../datas/plantList'
import CareScale from "./CareScale.jsx";
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

const ShoppingList = () => {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem key={plant.id}
					name = {plant.name}
					id={plant.id}
					cover = {plant.cover}
					light = {plant.light}
					water = {plant.water}
					isBestSale = {plant.isBestSale}
					/>

					
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
