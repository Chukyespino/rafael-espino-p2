import React from 'react'
import List from '../pages/list'

const SideNav = () => (
         
   
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
    <List></List>
    </div>

    <a onClick={openNav}>&#9776; open-></a>
    </div>

)

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default SideNav;