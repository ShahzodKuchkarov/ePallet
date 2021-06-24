import Styled from 'styled-components';

export const Main = Styled.div`
width: 100%;
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
.links-active {
    color:#000;
}
ul{
    display:flex;
    justify-content:space-between;
    list-style:none;
    padding: 0px;
}
li a:hover {
color:#000;
}
li a{
    text-decoration:none;
    color:#8090a5;
    font-size:18px;
}
.links:hover {
    color:#000;
}
`;