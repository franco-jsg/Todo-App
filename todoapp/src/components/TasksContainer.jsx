import { StyledTasksContainer, StyledTask, StyledEditTaskButton, StyledDeleteTaskButton, StyledButtonContainer } from "./styles/TasksContainer.styled"

import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import moment from "moment"


function TasksContainer({task, tasks, deleteTask, editMode, edit}) {

    return(
        <StyledTasksContainer>
            <h2>Tasks Board</h2>
            <ul>
                {
                    tasks.length === 0 ? (
                        <li>There are no tasks...</li>
                    ) : (
                        tasks.map( item => (
                            <StyledTask key={item.id}>
                                <span>{item.name} - {moment(item.date).format('LL')} </span>
                                
                                {
                                    editMode ? (
                                        null
                                    ) : (
                                        <StyledButtonContainer>
                                            <StyledEditTaskButton
                                                onClick={() => edit(item)}
                                            >
                                                <FaEdit />
                                            </StyledEditTaskButton>
                                            <StyledDeleteTaskButton 
                                                onClick={() => deleteTask(item.id)}
                                            >
                                                <FaTrashAlt />
                                            </StyledDeleteTaskButton>
                                        </StyledButtonContainer>
                                        
                                    )
                                }
                            </StyledTask>
                        ))
                    )
                }
            </ul>
        </StyledTasksContainer>
    )
}

export default TasksContainer