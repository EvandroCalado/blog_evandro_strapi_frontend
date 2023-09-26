import styled from 'styled-components';

const headerHeight = 193;
const footerHeight = 200;

export const Container = styled.div`
    height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
