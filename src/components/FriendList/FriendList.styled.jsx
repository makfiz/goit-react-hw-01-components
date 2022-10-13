import styled from 'styled-components'
export const Item = styled.li`
    display:flex;
    padding-left: 10px;
    margin: 10px 0px;
    border:${p => p.theme.borders.profile};
    box-shadow:${p => p.theme.shadows.boxShadow};
`;

