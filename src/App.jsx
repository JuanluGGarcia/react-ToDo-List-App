// import { useState } from "react";
import FilterTasks from "./components/filtertasks/FilterTasks";
// import Todo from "./components/todo/Todo";
import { GlobalStyles } from "./styles/global-styles";

const App = () => {
	// const [task, setStask] = useState([])

	return (
		<>
			<GlobalStyles />
			
			<FilterTasks />
		</>
	);
};
export default App;
