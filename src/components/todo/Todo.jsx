// import { v4 } from "uuid";
import { StyledOption } from "./style";

const Todo = ({ task, complete }) => {
    return (

        
        <div>
            <StyledOption>{task} {complete}</StyledOption>            
        </div>
      
        
    );
};

export default Todo;