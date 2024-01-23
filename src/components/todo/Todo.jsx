import { StyledOption } from "./style";

const Todo = ({ task }) => {
    return (
        <div >
            <StyledOption value="">{task.task}</StyledOption>
        </div>
    ) 
};

export default Todo;