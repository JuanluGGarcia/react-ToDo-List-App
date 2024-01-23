import { v4 } from "uuid";
import { StyledButtonContainer, StyledFilterContainer, StyledTasksContainer, StyledTodoContainer, StyledWrapper } from "./style";
import { useState } from "react";
import { FILTERS } from "../../constants/filters";
import Todo from "../todo/Todo";

const FilterTasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: v4(),
            task: 'Make a Todo App',
            complete: false
        }
    ]);

    const [filterPick, setFilterPick] = useState(FILTERS.ALL);

    const filteredTasks = filterTasks(filterPick, tasks);

    return (
        <>
            <StyledWrapper>
 				<StyledTodoContainer>
 					<h1>TODO</h1>

 					{/* <form onSubmit={(e) => handleSubmit(e, task, setTask)}> */}
                    <form onSubmit={event => handleSubmit(event, tasks, setTasks)}>
                        <input type='text' placeholder='Create a new tas...' />
 					</form>

                    <StyledTasksContainer>
                        {filteredTasks.map(task => (
                            <Todo key={task.id} {...task} />
                        ))}
                    </StyledTasksContainer>

                    <Todo tasks ={[...tasks]}/>
 					
                    <StyledFilterContainer>
                        <div>
                            <span>Número de tasks</span>
                        </div>

                        <StyledButtonContainer>
                            <button onClick={filterTasks(FILTERS.ALL, )}>All</button>
                            <button>Active</button>
                            <button>Complete</button>
                        </StyledButtonContainer>

                        <div>
                            <button>Clear Complete</button>
                        </div>
                    </StyledFilterContainer>

					
				</StyledTodoContainer>
			</StyledWrapper>

        </>
    );
};

const filterActiveTasks = (tasks, setFilterPick) => {
    setFilterPick(FILTERS.ACTIVE);
    return tasks.filter(task => !task.complete);
};

const filterCompleteTasks = (tasks, setFilterPick) => {
    setFilterPick(FILTERS.COMPLETED);
    return tasks.filter(task => task.complete);
};

const filterTasks = (filterPick, tasks) => {
    switch (filterPick) {
        
        case FILTERS.ALL:
            setFilterPick(FILTERS.ALL);
            return [...tasks];
        
        case FILTERS.ACTIVE: 
            return filterActiveTasks(tasks, setFilterPick);

        case FILTERS.COMPLETED: 
            return filterCompleteTasks(tasks, setFilterPick);;

    }
};

const handleSubmit = (event, tasks, setTasks) => {
    event.preventDefault(); // Para evitar que se envie el formulario y se pierda la información
    // console.log(task);
    const value = event.target.value;
    if (value !== '') {
        const newTask = {
            id: v4(),
            task: value,
            complete: false
        };
        setTasks([...tasks, newTask]);
        event.target.reset();
        console.log(tasks);
    }
    

};

export default FilterTasks;

