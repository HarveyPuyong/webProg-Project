import { navigation } from "./navigation.js";

export function HeaderFunctionality(){
  // navigation-functionality
  navigation();

   // show side-nav
   const sideNav = document.querySelector('nav.side-nav');
   const showSideNavBtn = document.querySelector('header .show-side-nav-btn');

   showSideNavBtn.addEventListener('click', ()=>{
     sideNav.style.display = 'inline-block';
     sideNav.style.animation = 'show-sideNav 1s ease-in-out forwards'
   });

  
}