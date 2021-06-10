import  {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
.ContainerText{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: Impact;
    font-size:20px;
}
.ContainerImage{
    display: flex;
    width: 50%;
    margin-right: 10px;
    justify-content: center;
}
.ContainerImage img{
    width: 100%;
    height: auto;
}
`;


export default  GlobalStyles;