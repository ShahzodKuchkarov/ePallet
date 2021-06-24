import Styled from 'styled-components';

export const Main = Styled.div`
    border-top:2px solid #ddd;
    width: 100%;
    max-width: 1300px;
    padding: 50px 0 15px;
    margin: 40px auto;
    display:flex;
    justify-content:space-between;

.left img {
    width:140px;
}
.left p {
    color:#acb6c4;
    margin:0;
}
.left__social-media {
    display:flex;
    margin-top:30px;
}
.left__social-media .tweet {
    background-color:#f4f4f4;
    align-items:center;
    display:flex;
    padding:2px 5px;
    border:1px solid #ddd;
    border-radius:3px;
    margin-right:20px;
}
.left__social-media .facebook {
    align-items:center;
    display:flex;
    padding:4px 5px;
    border:1px solid #ddd;
    border-radius:3px;
    background-color:navy;
    color:#fff;
}
.left__social-media .tweet .icon {
    color:blue;
}
.icon {
    margin-right:3px;
}
`;