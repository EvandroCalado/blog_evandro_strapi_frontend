import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Span = styled.span`
    font-weight: bold;

    &:not(:last-of-type)::after {
      content: ',';
      margin-right: 0.5rem;
    }

    &::before {
      content: '#';
    }
`;
