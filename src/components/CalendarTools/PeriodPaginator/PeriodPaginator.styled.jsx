import styled from "styled-components";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export const BiChevronLeftStyled = styled(BiChevronLeft)`
height: 30px;
width: 36px;
fill: #616161;

:hover{
  fill: ${props => props.theme.accentColor};
};`;

export const BiChevronRightStyled = styled(BiChevronRight)`
height: 30px;
width: 36px;
fill: #616161;

:hover{
  fill: ${props => props.theme.accentColor};
};`;

export const CurrentDate = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 12px;
background: ${props => props.theme.accentColor};
border-radius: 8px;
color: ${props => props.theme.secondaryTextColor};
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.29;
text-align: center;
text-transform: uppercase;

@media(min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 1.12;
    margin-right: 8px;
  };

`;

export const CurrentWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 18px;`;

export const ButtonPeriodPaginator = styled.button`
width: 36px;
height: 34px;
box-sizing: border-box;
font-size: 24px;
fill: red;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

background: ${props => props.theme.mainBackgroundColor};
border: 1px solid rgba(220, 227, 229, 0.5);
border-radius: 8px;`;

export const ConteinerForButtons = styled.div`
display: flex;`