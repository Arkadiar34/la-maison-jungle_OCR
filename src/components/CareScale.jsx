import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)} >
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}
const handleClick = (scaleValue, careType) => {
	let message = 'Cette plante a besoin de '
	const result = scaleValue === 1 ? 'peu ' : scaleValue === 2 ? 'modérément ' : scaleValue === 3 ? 'Beaucoup ' : null
	message = message + result + (careType === 'light' ? 'de lumière' : 'd\'arrosage')
	alert(message)
}
/* Créez une alerte qui se déclenche au clic sur le composant  CareScale  qui devra dire :

"Cette plante requiert peu/modérément/beaucoup de lumière/d'arrosage" en fonction de la donnée correspondante ;

s'il s'agit d'un composant  CareScale  de type "water" ou de type "light". */
export default CareScale
