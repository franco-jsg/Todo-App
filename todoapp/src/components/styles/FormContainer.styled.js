import styled from "styled-components";

export const StyledFormContainer = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 10px 0;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
        text-align: center;
    }

`

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
        color: ${({theme}) => theme.colors.color8};
        font-weight: bold;
        padding: 0 10px;
    }

`

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px 10px;
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.15);

`

export const StyledFormAddButton = styled.button`

    border: none;
    border-radius: 5px;
    padding: 10px 0;

    background-color: ${({theme}) => theme.colors.color2};
    color: ${({theme}) => theme.colors.color6};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

`

export const StyledFormEditButton = styled.button`

    border: none;
    border-radius: 5px;
    padding: 10px 0;

    background-color: ${({theme}) => theme.colors.color7};
    color: ${({theme}) => theme.colors.color9};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

`

export const StyledFormRegisterButton = styled.button`

    border: none;
    border-radius: 5px;
    padding: 10px 0;

    background-color: ${({theme}) => theme.colors.color3};
    color: ${({theme}) => theme.colors.color4};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

`

export const StyledFormRecoveryPassButton = styled.button`

    border: none;
    border-radius: 5px;
    padding: 10px 0;

    background-color: ${({theme}) => theme.colors.color7};
    color: ${({theme}) => theme.colors.color8};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`