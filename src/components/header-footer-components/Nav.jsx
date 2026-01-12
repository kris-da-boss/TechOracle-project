import { useState } from 'react';
import './nav.css'
import { Link} from 'react-router';

import { SettingsIcon, List, Users2Icon, ChartAreaIcon, PuzzleIcon, ArrowUpRightSquare, UserIcon, HelpCircle, MessageSquareWarning, LogOutIcon} from 'lucide-react'

export default function Nav({showNav, setShowNav, interaction}){
    const showNaClass=showNav?'nav-bar-open':'nav-bar-close';
    const [clicked, setClicked]=useState(0);
    const NavList=[
      {
        text: 'My Polls',
        icon: <List/>,
        links: '/',
        interaction:true

      },
      {
        text: 'Team',
        icon: <Users2Icon/>,
        links:'/team'
      },
      
      {
        text: 'Analytics',
        icon: <ChartAreaIcon/>,
        links: '/analytics',
        interaction:true
      },
      {
        text: 'Integrations',
        icon: <PuzzleIcon/>,
        links:'/integrations'
      },
      {
        text: 'Upgrade',
        icon: <ArrowUpRightSquare/>,
        links: '/upgrade',
        interaction:true
      },
       {
        text: 'My Profile',
        icon: <UserIcon/>,
        links: '/profile'
      },
       {
        text: 'Help Center',
        icon: <HelpCircle/>,
        links: '/help'
      },
      {
        text: 'Send us feedback',
        icon: <MessageSquareWarning/>,
        links:'feedback',
        interaction:true
      },
      {
        text: 'Log Out',
        icon: <LogOutIcon/>,
        links:'/welcome',
        interaction:true
      },
    ]
    const addObj={
        text: 'Interaction',
        icon: <List/>,
        links: '/my-interaction',
        interaction:true,
        ExemptFromAll:true

      }
    const filterInteractions=[addObj,...NavList.filter((list)=> list.interaction) ]
      
    const navMap=interaction? filterInteractions:NavList;
    const displayNavList=navMap.map((list, index)=>{
    const showClicked=clicked===index?'clicked':'unclicked'
        return(
          <Link to={`${list.links}`}
           key={index}
           className={showClicked}
           onClick={()=> {setClicked(index), setShowNav(false)}} >
          <p>{list.icon}{list.text} </p>
          </Link> 
        )
    })
    // Dynamic styles for interaction nav
    const headerClass=interaction? 'bg-blue':''
    const settingIcon=interaction ? 'bg-blue':'setting-icon'
    return(
        <>
        {showNav && <div className='overlay' onClick={()=>setShowNav(false)}> </div>}
           <div className={showNaClass}>
            {showNav && <div className='nav-bar'>
                 <div className={`nav-header ${headerClass}`}>
                    <div>
                    <p>Wilson's   Organization</p>
                    <p>owner  <button className='upgrade-in-nav'>UPGRADE</button></p>
                    </div>
                <button className= {settingIcon}> <SettingsIcon/></button> 
                 </div>
                 <div className='nav-list'>
                {displayNavList}
                 </div>
            </div>}
        </div>
       
        </>   
    
    )
}