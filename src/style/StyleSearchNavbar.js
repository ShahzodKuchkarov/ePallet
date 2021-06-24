import Styled from 'styled-components';

export const Main = Styled.div`
display:flex;
justify-content:space-between;
 align-items:center;
width: 100%;
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
ul{
    list-style:none;
    display:flex;
    align-items:center;
    padding: 0;
}
.left__ul img {
    width:100%;
    max-width:140px;
}
.left__ul input {
    width:500px;
    height:35px;
}
.item {
    margin: 0 15px;
}
/* .right__ul{
    margin-right:20px;
} */
.right__ul .item a {
        display:flex;
    align-items:center;
    color:#4a90e2;
}
.right__ul a {
    text-decoration:none;
    font-size:18px;
}
`;