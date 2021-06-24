import Styled from 'styled-components';

export const Main = Styled.div`
    width: 100%;
    max-width: 1300px;
    padding: 0 15px;
    margin: 0 auto;
a {
    text-decoration:none;
    margin-right:60px;
    color:#8090a5;
    font-size:18px;
}
ul{
    display:flex;
    justify-content:space-between;
    list-style:none;
    padding: 0px;
    text-align:center;
}
li {
    position:relative;
    cursor:pointer;
}
li::before{
    position:absolute;
    content:'';
    width:0;
   height:5px;
   bottom:-10px;
   left:0;
   background-color:blue;

}
li:hover::before{
   width: 100%;
   height:5px;
   transition: 1s;
}

//////TABLE

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 1000px;
}

td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(odd) {
  background-color: #dddddd;
}
tr:nth-child(even) {
  background-color: #fff;
}


`;