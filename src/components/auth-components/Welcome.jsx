import './welcome.css'
import { MenuIcon, VoteIcon, ArrowBigRight, List, ChartBar,HelpCircle, Users, Share, CreativeCommons, FileOutput, FileOutputIcon, Quote } from 'lucide-react'
import { Link } from 'react-router'
import { useState } from 'react'
import Menu from './Menu'

export default function Welcome(){
const [showMenu, setShowMenu]=useState(false);
const menuClass=showMenu ?'showMenu':'closeMenu';
const testimonials=[
  {name:'Paul',
  job:'worker at Sivex global limited',
   quote:'"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis earum saepe asperiores iure magni illo alias corporis tenetur voluptatem harum cumque at nesciunt, delectus veniam ad enim sint minima?"',
   image:''
  },
  {
   name:'Emmanuel',
   job:'Founder and CEO of Emac limited',
   quote:'"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis earum saepe asperiores iure magni illo alias corporis tenetur voluptatem harum cumque at nesciunt, delectus veniam ad enim sint minima?"',
   image:''
  },
  {name:'Best',
  job:'Buisness woman and worker at foreign affairs Abuja',
   quote:'"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis earum saepe asperiores iure magni illo alias corporis tenetur voluptatem harum cumque at nesciunt, delectus veniam ad enim sint minima?"',
   image:''
  }
].map((person)=>{
  return(
    <div className='testimonial'>
    <div>
      <div><img src="" alt="" /></div>
      <div>
        <p>{person.name}</p>
        <p>{person.job}</p>
        <p><Quote className='quote-icon'/>
        {person.quote}
        <Quote/>
        </p>
      </div>
    </div>
    <button>Learn More</button>
    </div>
  )
})
    return(
        <>
        <header className="welcome-header">
        <h2 className='logo'>ChoiceHub</h2>
        <div>
            <Link to="/login">
             <button className='login-btn'>Log in</button>
            </Link>
            
            <Link to="/signup">
            <button className='signup-btn'>Sign Up</button></Link>

              <button onClick={()=> setShowMenu(true)} className='menu-icon'><MenuIcon/></button>

              <Menu                
              menuClass={menuClass}   
              />
        </div>
        </header>
        <main className='welcome-main'>

        <div className='join-as-participant'>
            <p>Join as participant</p>
            <button className='participant-code-btn'>
              <input type="text" placeholder='Enter Code Here'/>
              <span>
              <ArrowBigRight/>
              </span>
            </button>
        </div>
          <section className='tag-1-div' >
        <p className='tag-1'>vote without Rigging</p><br /><br />
        <p>The easiest way to make your meetings interactive
        Engage Your participant with live polls, Q&A, quizzes and word clouds - whether you meet in the office, online or in between.
        </p><br />
        <button>Get started for free</button>
         </section>
       
       <section className='offer'>
        <h2>It's how you <span>include everyone</span> in your meetings</h2><br /><br />
        <p>
             ChoiceHub gives you everything you need to engange  your participant, capture their views and make everyone feel connected - whether you're running a team call, traning or an all-company meeting.
        </p><br />

         <div className='offer-div' data-aos='fade-up'>
            <div >
             <VoteIcon/>
            <p>Live polls</p>
            </div>
            <div>
            <Users/>
            <p>Audience Q&A</p>
            </div>
        <div>
            <HelpCircle/>
           <p>Quizzes</p>
        </div>
       <div>
        <ChartBar/>
          <p>Analytics</p>
       </div>
        
       </div>
       </section>

      
       <section className='how-it-works'>
       <h2>How it Works</h2>
       <div data-aos='slide-up'>
        <CreativeCommons/>
        <h3>1. CREATE</h3>
        <p>Admin Create a Voting session</p>
       </div>
       <div data-aos='slide-up'>
         <Share/>
        <h3>2. SHARE</h3>
        <p>Share a link or QR code.</p>
       </div>
       <div data-aos='slide-up'>
         <VoteIcon/>
        <h3>3. VOTE</h3>
        <p>Participants vote in real time.</p>
       </div>
       <div data-aos='slide-up'>
         <FileOutputIcon/>
        <h3>4. RESULTS</h3>
        <p>Results update instantly.</p>
       </div>
       </section>

       {/* <div>
        <h3>Get started for free</h3>
        <p>Start with out forever-free Basic plan,or get more from Choice Hub</p>
       </div> */}
       <section className='who-uses'>
        <h2>Who is it for?</h2>
          <div>
            <img src="" alt="" />
            <p>Community meetings</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Schools & Universities</p>
          </div>
            <div>
            <img src="" alt="" />
            <p>Organizations and NGOs</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Live Events & Polls</p>
          </div>
       </section>
        
       <div className='testimonials'>
        <h3>Trusted by Millons around the World</h3>
        {testimonials}
       </div>
       <div className='extraTag' data-aos='slide-up'>
        <p>Make your meetings more interactive with ChoiceHub.</p>
         <Link to='/signup'> <button >Start Voting</button></Link>
       </div>
       
   </main>
        </>
    )
}