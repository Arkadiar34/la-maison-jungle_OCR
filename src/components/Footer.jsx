import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
	const [inputValue, setInputValue] = useState('Votre mail')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<div>
				<input
					type="email"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={() =>checkAt(inputValue)}
				/>
				<button onClick={() => alert(inputValue)}>Envoyer mail</button>

			</div>
		</footer>
	)
}
const checkAt = (inputValue) => {
	if (!inputValue.includes('@')) {
		alert('Le mail doit contenir un @')

	}
	/*
	Ajouter dans Footer :
		- un input pour récupérer le mail de l'utilisateur (composant contrôlé)
		avec le state inputValue / setInputValue déjà écrit (useState)
		- l'événement blur (clic en dehors du champ) qui déclenche une alerte
		si inputValue ne contient pas le caractère "@" :
		"Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
	*/
}
export default Footer
