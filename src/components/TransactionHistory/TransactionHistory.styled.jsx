import styled from 'styled-components'


export const Thead = styled.thead`
    background-color:#00bcd5;
    color:${p => p.theme.colors.white};
    text-transform:uppercase;
`;
export const TR = styled.tr`
    height:40px;
    
    &:nth-child(2n+2) {
        background: #ecf1f3;
    }
`;
export const TH = styled.th``;
export const Tabledata = styled.td`
    color:${p => p.theme.colors.grey};
    width:240px;
    text-align:center;
    &:first-letter {
        text-transform:uppercase;
    }
`;