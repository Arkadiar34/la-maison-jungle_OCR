import { plantList } from '../../datas/plantList'
import CareScale from '../CareScale'
import styles from './ShoppingList.module.css'

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
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						<carescale caretype="water" scalevalue="{plant.water}">
							<carescale caretype="light" scalevalue="{plant.light}"></carescale></carescale>
						{plant.isSpecialOffer && <kbd className={styles.lmjSales}>Soldes</kbd>}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
