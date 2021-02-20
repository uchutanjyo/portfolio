let fast = document.getElementById('fast');
// let friendly = document.getElementById('friendly');
// let creative = document.getElementById('creative');
// let cool = document.getElementById('cool');
// let tools = document.getElementById('tools');

document.addEventListener('scroll',  (e) => {
  let top  = window.pageYOffset + window.innerHeight,
      isVisibleIcons = top > document.querySelector('.icon-description').offsetTop,
      isVisibleTools = top > document.querySelector('.tools').offsetTop;
      isVisibleProjectsTitle = top > document.querySelector('.tools').offsetTop;
console.log(isVisibleIcons);
   if (isVisibleIcons) {
     fast.classList.add('fast');
     document.getElementById('friendly').classList.add('friendly');
     document.getElementById('creative').classList.add('creative');
     document.getElementById('cool').classList.add('cool');
   }
   if (isVisibleTools) {
    document.getElementById('tools-title').classList.add('slide-in-right');
    document.getElementById('tools-icons').classList.add('slide-in-right');
    document.getElementById('about-me').classList.add('slide-in-left');
    document.getElementById('about-description').classList.add('slide-in-left');
    document.querySelectorAll('.icon-description').classList.add('slide-in-left')
   }
}
)
