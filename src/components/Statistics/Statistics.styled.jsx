import styled from 'styled-components'
export const Title = styled.h2`
  color: #515557;
  text-transform: uppercase;
  text-align: center;
  margin:0px;
margin-bottom: 30px;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0px;
  margin:0px;
  border: #515557 1px solid;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90px;
  height: 75px;
  opacity:60%;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.white};
  text-align: center;
`;

export const Percentage = styled.span`
  color: ${p => p.theme.colors.white};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
`;
