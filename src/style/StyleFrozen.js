import Styled from 'styled-components';

export const Main = Styled.div`
display:flex;
width: 100%;
max-width: 1300px;
padding: 0 15px;
margin: 0 auto;
margin: 0 auto;
.img img{
width: 400px;
}
.juice__info {
   padding-left:30px;
}
.juice__info-top h5  {
    margin:0;
    color:#8090a5;
}
.juice__info-top h3 {
    font-weight:bold;
}
.juice__info-top p {
    color:#8090a5;
}
.juice__info-top a {
    display:flex;
    align-items:center;
    color:blue;
}
.juice__info-bot .price {
    font-weight:bold;
}
.juice__info-bot .price  {
    margin-left: 15px;
}
.juice__info-bot .lead-time {
     color:#8090a5;
}
.juice__info-bot .info {
color:#8090a5;
}
.juice__info-bot input {
    width:50px;
    font-size:18px;
}
.juice__info-bot .add span {
    display:flex;
    font-weight:bold;
    color:#fff;
}
.juice__info-bot .add {
    background-color:blue;
    border: 1px solid blue;
    margin:0 10px;
    border-radius: 3px;
    height:30px;
    cursor:pointer;
}
.juice__info-bot .custom span {
    display:flex;
    font-weight:bold;
    color:#8090a5;
}
.juice__info-bot .custom{
    border: 1px solid #8090a5;
    margin:0 10px;
    border-radius: 3px;
    height:30px;
    cursor:pointer;
}
.juice__info-bot .wishlist {
    display:flex;
    color:blue;
    cursor:pointer;
}
`;