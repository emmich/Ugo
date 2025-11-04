import '../styles/Main.css'
import Works from '../components/Works'
import Experience from './Experience';

const Main = () => {
    return ( 
        <main>
            <div className="container">
                <div className="section_one">
                
                    {/* <div className="hello">Hello! &nbsp; I am</div> */}
                    {/* <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button> */}
                    <div className="hello text-center rounded-md bg-purple-10 px-2 py-1 text-md font-medium text-white ring-1 ring-purple-700/100 ring-inset">Hey there!&nbsp;I am</div>
                    <h1 className="animate-character mt-5 underline">ugo ogbonna</h1>
                    <p className="moresub mt-4">A digital and tech-focused individual, experienced in <span><i>IT Infrastructure, Frontend Development, Digital Strategist & Performance, Product Designs and Cloud Engineer. </i></span></p>
                    <p className="subhead mt-5">Transforming visions into reality, one <span><i>frame </i></span> at a time. </p>
                    <br /> <br />
                    <div className="relative">
                    <button href="#contact" className="more_button relative animate-button ">Let's create!</button>
                    <span className="absolute bubble flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    </div>
                    
                    
                    {/* <div className="clipart"></div> */}


                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <br></br>
                    <div className="container mt-5 gap-6 pl-2 pr-2 lg:pl-0 lg:pr-0 flex flex-col md:flex-row justify-center md:items-stretch items-center">
                        <div className="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl" >
                            <span class="text-4xl sm:text-5xl font-semibold text-center text-white flex items-center">
                                <span class="inline-block tabular-nums tracking-wider">5</span>+</span>
                                <p class="subtle-text !text-base lg:!text-md dark:text-white text-center line-clamp-2">Years of Experience</p>
                        </div>
                        <div class="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl" >
                            <span class="text-4xl sm:text-5xl font-semibold text-center text-white flex items-center">
                                <span class="inline-block tabular-nums tracking-wider  dark:text-white">6</span>+</span>
                                <p class="subtle-text !text-base lg:!text-md dark:text-white text-center line-clamp-2">Completed Projects & Demos</p>
                        </div>
                        <div class="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl" >
                            <span class="text-4xl sm:text-5xl font-semibold text-center text-white flex items-center">
                                <span class="inline-block tabular-nums tracking-wider  dark:text-white">10</span>+</span>
                                <p class="subtle-text !text-base lg:!text-md dark:text-white text-center">Satisfied Brands & Industries</p>
                        </div>

                    </div>

                </div>
                {/* <svg className="animate-bounce w-20 h-20">
                <img src="/assets/home.png" width= "22px;" height="22px" alt="Github" />
                </svg> */}

                {/* <img src="/assets/person.png" width= "380px;" height="380px" alt="Linkedin"  className="person"/> */}

                <div className="section_two">
                    <div className="me" id="me">
                        <div className="row">
                            <div className="col-lg-12 about">
                                <h1>who am i?</h1>
                                <p className='d-flex'>Hey there once again, This is Ugo. <img src="/assets/me.png" width= "25px;" height="25px" alt="me" /></p>
                                <p>I am an IT Personel and Digital Strategist with experience in all sectors of Digital & Brand Growth in the IT Department. A Software Developer practicing in frontend engineering, skilled at bringing ideas into life, brand awareness, growth hacker and web experience interactions. Making use of world-class tools, ideas, inspirations and collaborative minds to produce great user experience.  </p>
                                <p className="moresub mt-2">Building creative web/digital products and designs with accepted user experience concepts. I enjoy digging my hands in digital and tech projects, collaborating and getting exposed. I also work remotely as a digital strategist and product designer for a few teams and organization.</p>
                            </div>
                            <div className="col-lg-12"></div>
                            <br></br>
                        </div>
                        
                        <div className="row and_more">
                            <div className="col-12">
                            <h1 className="d-flex text-center justify-center">one more thing! <img src="/assets/finger.png" width= "40px;" height="40px" alt="finger" /></h1>
                            <i>Digital Strategist . Social Media Manager . Growth Hacker . Brand Manager . Cloud Engineer</i>
                              <p>Together with my frontend engineering skills, I currently deliver sound user experience product designs in a few organizations settled in Lagos. There, I make research with the team to project company's ideas
                              in the digital space, as well as structure and implement methods to create awareness and turn in possible clients. </p>
                                <p>There's nothing more interesting and mind-blowing than seeing new creativity, eager to grasp knowledge with an urge to work with like-minded collaborators. It is indeed beautiful to watch your works and projects come alive  whilst solving problems and delivering opportunities to those in need of our services.
                                   <br></br><br></br>
                                <span className="animate-character2 d-flex text-center justify-center">That is how I perceive the world and the tech space. To grow and challenge.   </span>
                             </p>

                            </div>
                        </div>
                        
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                        
                    </div>
                    
                </div>

                <hr className="divide"></hr>



                <div className="section_three relative ">
                    <div className="experience">
                        <h1>Work Experience</h1>
                        <p className="exp-story">Industries and places where experience was gained.</p>

                        <div className="experience-card mt-4" >
                            <Experience />
                        </div>
                    </div>


                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="works" id="works">
                        <h1>hands on</h1>
                        <div className="work_container">
                            <Works />

                        </div>

                        {/* <a href="https://www.behance.net/emmanuelogbonna" target='_blank' rel='noreferrer' class="more mt-5">View More</a>
                        <a href="https://instagram.com/easywinigeria?igshid=YmMyMTA2M2Y=" class="more_ig mt-5" target='_blank' rel='noreferrer'>View Works on Instagram</a> */}
                        
                    </div>
                </div>

                <hr className="divide"></hr>


                <div className="section_four relative">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        >
                        <div
                            style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                        
                    </div>
                    <h3 className="work_with">Clients & Partners</h3>
                    <div className="partners" id="">
                        <ul className="primary">
                            <li><img src="/assets/umdigi.png" alt="um"></img></li>
                            <li><img src="/assets/euc.png" alt="euc"></img></li>
                            <li><img src="/assets/easylotto.png" alt="easy"></img></li>
                            <li><img src="/assets/easysport.png" alt="easy"></img></li>
                            <li><img src="/assets/wn.png" alt="wn"></img></li>
                            <li><img src="/assets/isyk.png" alt="isyk"></img></li>
                            <li><img src="/assets/oroko.png" alt="oroko"></img></li>
                            <li><img src="/assets/upgradely.png" alt="upgradely"></img></li>
                            <li><img src="/assets/luxx.png" alt="lux" width="8px"></img></li>
                            <li><img src="/assets/zelasa.png" alt="zelasa"></img></li>
                            <li><img src="/assets/stackwisr.png" alt="stackwisr"></img></li>
  
                        </ul>
                        
                        <ul className="secondary">
                            <li><img src="/assets/umdigi.png" alt="um"></img></li>
                            <li><img src="/assets/euc.png" alt="euc"></img></li>
                            <li><img src="/assets/easylotto.png" alt="easy"></img></li>
                            <li><img src="/assets/easysport.png" alt="easy"></img></li>
                            <li><img src="/assets/wn.png" alt="wn"></img></li>
                            <li><img src="/assets/isyk.png" alt="isyk"></img></li>
                            <li><img src="/assets/oroko.png" alt="oroko"></img></li>
                            <li><img src="/assets/upgradely.png" alt="upgradely"></img></li>
                            <li><img src="/assets/luxx.png" alt="lux" width="8px"></img></li>
                            <li><img src="/assets/zelasa.png" alt="zelasa"></img></li>
                            <li><img src="/assets/stackwisr.png" alt="stackwisr"></img></li>
                        </ul>
                        
                    </div>
                        
                        
                </div>
                


                <div className="bold technologies">
                    <h1 className="tech-title">Technologies & Tools Used</h1>
                    <p className="tech-info text-center">A dynamic problem solver with over 4 years of programming experience, I have worked with various languages, libraries, and technology stacks, refining my expertise in frontend, backend, and app development.</p>

                    <div className="flex flex-col items-start">
                        <h2 className="">Frontend Tools</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">HTML</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">CSS</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">JS</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">React</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Typescript</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">NextJS</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Tailwind</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Boostrap</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">SCSS</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">JSON</div>
                        </div>


                        <h2 className="">Other IT Skills & Technology Tools</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white  shadow-md">Cloud Practictioner</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">AWS</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">User Experience Strategist</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Branding</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Growth Strategist</div>


                        </div>

                        <h2 className="">Design & Media Tools</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white  shadow-md">UI Designs</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Figma</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Adobe</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Canva</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Capcut</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Powerpoint</div>

                        </div>

                        <h2 className="">Digital Strategist Tools</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white  shadow-md">Web Management</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Content Strategist</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Socia Media Management</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Ad Manager</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Email Marketing</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Performance Manager</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Editor</div>
                            <div className="bg-slate-gray rounded-lg py-2 px-3 dark:text-black text-black dark:bg-secondary whitespace-nowrap bg-white shadow-md">Lead Management & Stages</div>

                        </div>

                        <br></br>
                        

                        
                    </div>

                </div>




                <div className="section_five">
                    <div className="contact" id="contact">
                        <h1>Get in Touch</h1>
                        <div className="medium grid gap-5 sm:grid-cols-2 w-full">
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto:ugochukwu.ogbona@gmail.com?" className="email-box py-6 px-8 dark:bg-secondary rounded-lg shadow-sm flex flex-col gap-3 cursor-pointer">
                                <span class="font-semibold">Email</span>
                                <p>ugochukwu.ogbona@gmail.com</p>
                            </a>
                            <a href="https://wa.me/2348164219213" className="email-box py-6 px-8 dark:bg-secondary rounded-lg shadow-sm flex flex-col gap-3 items-start cursor-pointer">
                                <span class="font-semibold">Phone</span>
                                <p>+2348164219213</p>
                            </a>
                        
                        </div>
                        
                    </div>
                </div>
            </div>


            
        </main>
     );
}
 
export default Main;