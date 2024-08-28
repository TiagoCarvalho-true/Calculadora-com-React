import styled from'styled-components';

export  const Container = styled.div`
    width:100%;
    height:100vh
    background-color:#cacaca;
    margin:55px;

    display:flex;
    align-items:center;
    justify-content:center;
`
export const Content = styled.div `
    background-color:#9873;
    width:50%;
    min-height:350px;
    border-radius:15px;
`;
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`
export const Column = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`