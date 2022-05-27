import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    & > h2 {
        text-align: center;
        padding: 10px 0;
    }

    main {
        width: 100%;
        min-height: 500px;
        background-color: ${({theme}) => theme.colors.color5};
        padding: 15px 20px;
        box-shadow: 0 0 10px rgba(0,0,0, 0.15);
        display: flex;
        flex-direction: row;
        gap: 20px;
        border-radius: 10px;
    }

    
`