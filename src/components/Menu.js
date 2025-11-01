import '../styles/Menu.css'
import React from 'react';
// import Works from '../components/Works'

    export default function Menu() {
        const onButtonClick = () => {
          // using Java Script method to get PDF file
          fetch('UgoCVIT.pdf').then(response => {
              response.blob().then(blob => {
                  // Creating new object of PDF file
                  const fileURL = window.URL.createObjectURL(blob);
                  // Setting various property values
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'ugocv.pdf';
                  alink.click();
              })
          })
      }


    return ( 
        <main>
            <div className="sticky-menu z-50 dark:ring-1 dark:ring-transparent dark:shadow-2xl fixed left-1/2 bottom-8 -translate-x-1/2  transition-all supports-backdrop-blur:bg-white/40 supports-backdrop-blur:dark:bg-black/40 mx-auto mt-8 flex px-4 py-1 w-max gap-1 rounded-2xl border-border shadow-md p-2 backdrop-blur-xl items-center
            	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);">
                    <div className="socials d-flex flex group cursor-pointer items-center justify-center justify-between">
                        <a href="#home" target='_blank' rel='noreferrer'><img src="/assets/home.png" width= "22px;" height="22px" alt="Home" /></a>
                        <div className="hide">Home</div>
                        <a href="https://linkedin.com/in/emmanuel67" className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"target='_blank' rel='noreferrer'><img src="/assets/linkedin-white.png" width= "22px;" height="22px" alt="Linkedin" /></a>
                        <div className="hide1">Linkedin</div>
                        <a href="https://github.com/emmich" target='_blank' rel='noreferrer'><img src="/assets/git.png" width= "22px;" height="22px" alt="Github" /></a>
                        <div className="hide2">Github</div>
                        <a href="/#" onClick={onButtonClick} className="cv" rel='noreferrer'><img src="/assets/file.png" width= "22px;" height="22px" alt="Resume" /></a>
                        <div className="hide3">Resume</div>
                        
                    </div>
            </div>

        </main>
     );
}
 
// export default Menu;        