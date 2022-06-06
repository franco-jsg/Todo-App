
import { StyledFormContainer, StyledForm, StyledInput, StyledFormAddButton, StyledFormEditButton } from "./styles/FormContainer.styled"

function TaskFormContainer({ task, setTask, addTask, editMode, editTask, error}) {

    return (
        <StyledFormContainer>
            {
                editMode ? (
                    <h2>Edit Task</h2>
                ) : (
                    <h2>New Task</h2>
                )
            }
            <StyledForm onSubmit={editMode ? editTask : addTask}>
                {
                    error ? <span>{error}</span> : null
                }
                
                <StyledInput 
                    type="text"
                    placeholder="Add task"
                    onChange={ e => (
                        setTask(e.target.value)
                    )}
                    value={task}

                />

                {
                    editMode ? (
                        <StyledFormEditButton type="submit">
                            Edit task
                        </StyledFormEditButton>
                    ) : (
                        <StyledFormAddButton type="submit">
                            Add task
                        </StyledFormAddButton>
                    )
                }
            </StyledForm>
        </StyledFormContainer>


    )

}

export default TaskFormContainer