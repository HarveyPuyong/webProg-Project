export function Animation(){

  // option kung kelan gagana ang animation
  const option = {
    rootMargin: '-10px'
  }

  function addClassAnimate(entry){
    if(entry.isIntersecting){
      entry.target.classList.add('animate');
    }
  }

  //-------section heading animation-----//
  const sectionsHeading = document.querySelectorAll('section .heading');

  const headingObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      addClassAnimate(entry);
    })
  }, option);

  sectionsHeading.forEach(heading => {
    headingObserver.observe(heading);
  });


  //-------profile-pic animation----//
  const profilePic = document.querySelector("#about-section .profile-pic");

  const profilePicObserver = new IntersectionObserver(entry => {
    if(entry[0].isIntersecting){
      addClassAnimate(entry[0]);
    }
  });

  profilePicObserver.observe(profilePic);

  //-----about-me animation---//
  const aboutMe = document.querySelector('#about-section .about-me');

  const aboutMeObserver = new IntersectionObserver(entry => {
    if(entry[0].isIntersecting){
      addClassAnimate(entry[0]);
    }
  });

  aboutMeObserver.observe(aboutMe);


  //-------skills animation------//
  const skills = document.querySelectorAll('.skill-card');

  const skillObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        addClassAnimate(entry);
      }
    })
  }, option);

  skills.forEach(skill => {
    skillObserver.observe(skill);
  });


  //------projects animation-----//
  const projects =  document.querySelectorAll('.project-card');

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        addClassAnimate(entry);
      }
    })
  });

  projects.forEach(project => {
    projectObserver.observe(project);
  });

}