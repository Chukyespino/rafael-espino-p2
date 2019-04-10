import React from 'react'
import styled from 'styled-components'

const Button1 = styled.button`
background-image: linear-gradient(rgba(102, 53, 153, 0.651), rgba(38, 0, 255, 0.61));
margin-top:163px;
border-radius: 15px;
padding-top: 3px;
padding-bottom: 3px;
position: fixed;
color: #072bf8;
font-size: 30px;
`
const SideNav = () => (
         
   
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
    <a href="https://www.walmart.com/">Sales</a>
    <a href="https://www.coupons.com/coupons/?pid=13101&nid=10&zid=pt82&PLID=GOGSC_CouponsHT_CouponsHTE&CRID=aud-277046512970:kwd-96805524&vara=coupons_e&gclid=EAIaIQobChMI7N_t6ue84QIVDrXACh2djQoKEAAYASAAEgKFJfD_BwE">Coupons</a>
    <a href="#">Near Me</a>
    <a href="#">About</a>
    </div>

    <Button1 id="openButton" onClick={openNav}>&#9776;</Button1>
    </div>

)

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("openButton").style.background="transparent";
  document.getElementById("openButton").style.color="transparent";
  document.getElementById("openButton").style.border="transparent";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "100px";
  document.getElementById("openButton").style.background="linear-gradient(rgba(102, 53, 153, 0.651), rgba(38, 0, 255, 0.61))";
  document.getElementById("openButton").style.color="#072bf8";
  document.getElementById("openButton").style.border="metal";
}
export default SideNav;