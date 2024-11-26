
export function HomeFunctionality(){
  // fix the structure //
  const nextBtn = document.querySelector('#home .next-btn');
  const homeStyleLink = document.createElement('link');
  homeStyleLink.rel = "stylesheet";
  homeStyleLink.href = "style/home.css";

  nextBtn.addEventListener('click', ()=>{
    document.head.appendChild(homeStyleLink);
  });

  // show more detail //
  const home = document.querySelector('#home');
  const background = document.querySelector('body .background');
  const topNav = document.querySelector('header .top-nav');
  const hamburgerIcon = document.querySelector('header .hamburger-icon');
  const githubIcon = document.querySelector('header .github-icon');
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');
  const moreDetailBtn = document.querySelector('#home .more-detail-btn');

  moreDetailBtn.addEventListener('click', ()=>{
    background.style.animation = 'appear-background-color 1s forwards';
    setTimeout(()=>{
      home.style.display = 'none';
      if(window.innerWidth > 900){
        topNav.style.display = 'flex';
        hamburgerIcon.style.display = 'none';
        githubIcon.style.display = 'inline-block';
      }else{
        topNav.style.display = 'none';
        hamburgerIcon.style.display = 'inline-block';
        githubIcon.style.display = 'none';
      }    
      footer.style.display = 'block';
      sections.forEach(section => {
        section.style.display = "block";
        section.style.animation = "scale-up 0.7s ease forwards" ;
      });
    }, 200); 
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      topNav.style.display = 'flex';
      hamburgerIcon.style.display = 'none';
      githubIcon.style.display = 'inline-block';
    }else{
      topNav.style.display = 'none';
      hamburgerIcon.style.display = 'inline-block';
      githubIcon.style.display = 'none';
    }
  });

}