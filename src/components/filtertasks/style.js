import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    height: 300px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    background-image: url("./public/images/bg-desktop-dark.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px;
`;

const StyledTodoContainer = styled.div`
    width: 450px;
    height: 300px;
    margin: 50px auto;
    /* background-color: orange; */
`;

const StyledTasksContainer = styled.div`
    padding: .5rem 2rem;
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #FFF;
`;

const StyledFilterContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    gap: .25rem;
`;

export { StyledWrapper, StyledTodoContainer, StyledTasksContainer, StyledFilterContainer, StyledButtonContainer };







// import styled from "styled-components";

// const StyledWrapper = styled.div`
//     width: 100%;
//     height: 300px;
//     max-width: 1200px;
//     margin-left: auto;
//     margin-right: auto;
//     background-image: url("./public/images/bg-desktop-dark.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     padding: 1px;
// `;

// const StyledTodoContainer = styled.div`
//     width: 450px;
//     height: 300px;
//     margin: 50px auto;
//     /* background-color: orange; */
// `;

// const StyledFilterContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

// export { StyledWrapper, StyledTodoContainer, StyledFilterContainer };