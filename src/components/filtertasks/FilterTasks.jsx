import { v4 } from "uuid";
import { StyledButtonContainer, StyledFilterContainer, StyledTodoContainer, StyledWrapper } from "./style";
import { useState } from "react";
// import { FILTERS } from "../../constants/filters";
import Todo from "../todo/Todo";

const FilterTasks = () => {
    

    const [tasks, setTasks] = useState([]);

    // const [filterPick, setFilterPick] = useState(FILTERS.ALL);

    // const filteredTasks = filterTasks(filterPick, tasks);

    return (
        <main>
            <StyledWrapper>
 				<StyledTodoContainer>
                    <header>
                        <h1>TODO</h1>
                    </header>
 					
 					{/* <form onSubmit={(e) => handleSubmit(e, task, setTask)}> */}
                    <form onSubmit={event => handleSubmit(event, tasks, setTasks)}>
                        <input type='text' name="taskText" placeholder='Create a new tas...' />

                        {tasks.map(task => (
                            <Todo key={task.id} {...task} />
                        ))}

 					</form>


                   

                    {/* <Todo tasks ={[...tasks]}/> */}
 					
                    <StyledFilterContainer>
                        <div>
                            <span>Número de tasks: {tasks.length}</span>
                        </div>

                        <StyledButtonContainer>
                            {/* <button onClick={filterTasks(FILTERS.ALL, )}>All</button>
                            <button>Active</button>
                            <button>Complete</button> */}
                            <button>All</button>
                            <button>Active</button>
                            <button>Complete</button>
                        </StyledButtonContainer>

                        <div>
                            <button>Clear Complete</button>
                        </div>
                    </StyledFilterContainer>

					
				</StyledTodoContainer>
			</StyledWrapper>

        </main>
    );
};

// const filterActiveTasks = (tasks, setFilterPick) => {
//     setFilterPick(FILTERS.ACTIVE);
//     return tasks.filter(task => !task.complete);
// };

// const filterCompleteTasks = (tasks, setFilterPick) => {
//     setFilterPick(FILTERS.COMPLETED);
//     return tasks.filter(task => task.complete);
// };

// const filterTasks = (filterPick, tasks) => {
//     switch (filterPick) {
        
//         case FILTERS.ALL:
//             setFilterPick(FILTERS.ALL);
//             return [...tasks];
        
//         case FILTERS.ACTIVE: 
//             return filterActiveTasks(tasks, setFilterPick);

//         case FILTERS.COMPLETED: 
//             return filterCompleteTasks(tasks, setFilterPick);;

//     }
// };

const handleSubmit = (event, tasks, setTasks) => {
    event.preventDefault(); // Para evitar que se envie el formulario y se pierda la información
    
    // console.log(event.target.taskText.value); Valor del input
    
    const valueTask = event.target.taskText.value;
    if (valueTask !== '') {
        const newTask = {
            id: v4(),
            task: valueTask,
            complete: false
        };
        setTasks([...tasks, newTask]);
        // console.log(newTask)
        // console.log(tasks)
        event.target.reset(); // borramos el input
    }
    

};

export default FilterTasks;

