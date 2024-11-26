
export function navigation(){
  const sectionNav= document.querySelectorAll('nav .section-nav');
  const homeBtn = document.querySelectorAll('nav .goto-home-btn');
  const home = document.querySelector('#home');
  const sections = document.querySelectorAll('section');
  const background = document.querySelector('body .background');
  const sideNav = document.querySelector('.side-nav');
  const topNav = document.querySelector('.top-nav');
  const githubIcon = document.querySelector('header .github-icon');
  const hamburgerIcon = document.querySelector('header .hamburger-icon')
  const footer = document.querySelector('footer');

  // goto home
  homeBtn.forEach(button => {
    button.addEventListener('click', ()=>{
      background.style.animation = 'fadeout-background-color 1s forwards';
      sideNav.style.display = "none";
      footer.style.display = 'none';
      
      sections.forEach(section => {
        section.style.animation = 'scale-down 1s ease forwards';
        setTimeout(()=>{
          topNav.style.display = "none";
          githubIcon.style.display = 'inline-block';
          hamburgerIcon.style.display = 'none';
          section.style.display = 'none';
          home.style.display = 'inline-block';
        }, 500);
      })
      
    });
  });

  // sectionNav.forEach(nav => {
  //   console.log(nav);
  // });

  const sectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {

        if(entry.isIntersecting){
          sectionNav.forEach(nav => {
            const navName = nav.classList[1];
            const sectionName = entry.target.classList[0];

            if(sectionName === navName){    
              nav.classList.add('active');  
            } else {
              nav.classList.remove('active');  
            }
          });        
        }

    })
  }, {
    rootMargin: '-100px'
  }
  );

  sections.forEach(section => {
    sectionObserver.observe(section)
  })


 
 }