import { navigation } from "./navigation.js";

export function SideNavFunctionality(){
  const sideNav = document.querySelector('nav.side-nav');

  // show side-nav
  const showSideNavBtn = document.querySelector('header .show-side-nav-btn');
  showSideNavBtn.addEventListener('click', ()=>{
    sideNav.style.display = 'inline-block'
  });

  // hide sidenav
  const hideSideNavBtn = document.querySelector('.side-nav .cross-icon');
  hideSideNavBtn.addEventListener('click', ()=>{

    sideNav.style.animation = "hide-sideNav 1s ease-in-out forwards";
    setTimeout(()=>{
      sideNav.style.display = "none";
    },1010)

  })

  // hide side-nav kapag yung width ay lampas na sa 900px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      sideNav.style.display = 'none'; 
    }
  });


  // navigation-functionality
  navigation();
}