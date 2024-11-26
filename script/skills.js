export function SkillsFunctionality(){

  const skills = [
    // add and delete skills here
    {
      icon: 'html.png', 
      name: 'HTML',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'CSS (2).png', 
      name: 'CSS',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'js (1).png', 
      name: 'JavaScript',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      icon: 'php.png', 
      name: 'PHP',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'React (2).png', 
      name: 'React',
      mastery: 'Intermediate',
      type: 'tech-stack'
    },
    {
      icon: 'Git.png', 
      name: 'Git',
      mastery: 'Intermediate',
      type: 'tool'
    },
    {
      icon: 'github.png', 
      name: 'GitHub',
      mastery: 'Intermediate',
      type: 'tool'
    },
    {
      icon: 'visual-studio.png', 
      name: 'Visual Studio',
      mastery: 'Intermediate',
      type: 'tool'
    }
  ];

  let skillsHTML = '';

  skills.forEach(skill => {
    skillsHTML += `
      <div class="skill-card ${skill.type}">
        <img src="images and icons/icons/${skill.icon}" alt="skill-icon" class="skill-icon">
        <div>
          <p class="skill-name">${skill.name}</p>
          <p class="mastery-level">${skill.mastery}</p>
        </div>
      </div>
    `
  });

  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillsHTML;
  


  //---skill type button---//
  const techStackBtn = document.querySelector(".tech-stacks-btn");
  const toolsBtn = document.querySelector(".tools-btn");
  const techStackSkills = document.querySelectorAll(".skill-card.tech-stack");
  const toolsSkills = document.querySelectorAll(".skill-card.tool");

  toolsBtn.addEventListener("click", ()=>{
    toolsBtn.classList.add("selected");
    techStackBtn.classList.remove("selected");

    toolsSkills.forEach(skills => {
      skills.style.display = "flex";
    });
    techStackSkills.forEach(skill => {
      skill.style.display = "none";
    });
  });

  techStackBtn.addEventListener("click", ()=> {
    techStackBtn.classList.add("selected");
    toolsBtn.classList.remove("selected");
  
    techStackSkills.forEach(skill => {
      skill.style.display = "flex";
    });
    toolsSkills.forEach(skills => {
      skills.style.display = "none";
    });
  });

  
}