import { useState } from "react";
import { GlobalStyles } from "./styles/global-styles";

const App = () => {
	<GlobalStyles />
	const [user, setUser] = useState({
		name:'',
		pet:''
	})

	// console.log(user);

	return (
		<>
			<form>
				<div>
					<label htmlFor="name">Name</label>
					{/* Vamos a hacerlo solo pasando la misma funcion y pasando solo el evento */}
					{/* <input type="text" name="name" id="name" onChange={() => registerUser(event.target.value, user, setUser)} /> */}
					<input type="text" name="name" id="name" onChange={() => registerUser(event, user, setUser)} />
				</div>
				<div>
					<label htmlFor="pet">Pet</label>
					{/* Vamos a hacerlo solo pasando la misma funcion y pasando solo el evento */}
					{/* <input type="text" name="pet" id="pet" onChange={() => registerPet(event.target.value, user, setUser)} /> */}
					<input type="text" name="pet" id="pet" onChange={() => registerUser(event, user, setUser)} />
				</div>
			</form>
			<h1>Me llamo {user.name || 'anónimo'} y tengo un/una {user.pet || 'nada'}</h1>

		</>
	);
};

// const registerUser = (value, setUser) => {
// 	// setUser({ name: value });
// 	// Al hacerlo de esta manera, si escribo lo que estoy haciendo es perder el valor de pet
// 	setUser({ name: value})
// };
// const registerPet = (value, setUser) => {
// 	setUser({ pet: value });
// 	// Al hacerlo de esta manera, si escribo lo que estoy haciendo es perder el valor de name
// };

// Para evitar lo de antes paso el user y antes lo he puesto en el onchange del text
// const registerUser = (value, user, setUser) => {
	
// 	setUser({ ...user, name: value})
// };

// const registerPet = (value, user, setUser) => {
// 	setUser({ ...user, pet: value });
// 	// Al hacerlo de esta manera, si escribo lo que estoy haciendo es perder el valor de name
// };

// VAMOS A HACER LO DE ARRIBA USANDO SOLO UNA FUNCION

const registerUser = (event, user, setUser) => {
	const inputName = event.target.name; // Metemos el nombre del campo
	const inputValue = event.target.value; // Metemos el valor del campo

	setUser({ ...user, [inputName]: inputValue })
};

export default App;
