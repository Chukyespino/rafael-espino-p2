import React from 'react'
const SideNav = () => (
         
   
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
    <a href="https://www.walmart.com/">Sales</a>
    <a href="https://www.coupons.com/coupons/?pid=13101&nid=10&zid=pt82&PLID=GOGSC_CouponsHT_CouponsHTE&CRID=aud-277046512970:kwd-96805524&vara=coupons_e&gclid=EAIaIQobChMI7N_t6ue84QIVDrXACh2djQoKEAAYASAAEgKFJfD_BwE">Coupons</a>
    <a href="#">Near Me</a>
    <a href="#">About</a>
    </div>

    <a id="openButton" className="openButton" onClick={openNav}>&#9776; Menu</a>
    </div>

)

function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("openButton").style.color="transparent";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "100px";
  document.getElementById("openButton").style.color="#072bf8";
}
export default SideNav;