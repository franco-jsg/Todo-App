import styled from "styled-components";

export const StyledTasksContainer = styled.div`
    background-color: ${({theme}) => theme.colors.color4};
    color: ${({theme}) => theme.colors.color5};
    padding: 10px 20px;
    flex: 2;
    border-radius: 10px;


    h2 {
        text-align: center;
    }
    
    li {
        list-style: none;
        font-weight: bold;
        padding: 15px 10px;
    }

`

export const StyledTask = styled.li`

    width: 100%;
    min-height: 60px;
    background-color: ${({theme}) => theme.colors.color5};
    color: ${({theme}) => theme.colors.color4};
    border-radius: 10px;
    padding: 15px 10px;
    margin: 10px 0 0 0;
    font-size: 16px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const StyledEditTaskButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${({theme}) => theme.colors.color7};
    margin: 0 5px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    
`

export const StyledDeleteTaskButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${({theme}) => theme.colors.color8};
    margin: 0 5px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`

