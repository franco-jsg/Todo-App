import { StyledTasksContainer, StyledTask, StyledEditTaskButton, StyledDeleteTaskButton } from "./styles/TasksContainer.styled"

import { FaEdit, FaTrashAlt } from 'react-icons/fa'


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
                                <span>{item.name}</span>
                                {
                                    editMode ? (
                                        null
                                    ) : (
                                        <div>
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
                                        </div>
                                        
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