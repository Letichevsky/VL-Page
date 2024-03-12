import React from 'react';
import './Partners.scss';
import Skill from './Skill';

import iconHtml from '../../assets/icons/html.svg'
import iconCss from '../../assets/icons/css.svg'
import iconJs from '../../assets/icons/javascript.svg'
import iconNode from '../../assets/icons/nodejs.svg'
import iconReact from '../../assets/icons/react.svg'
import iconTs from '../../assets/icons/typescript.svg'
import iconJquery from '../../assets/icons/jquery.svg'
import iconMysql from '../../assets/icons/mysql.svg'

class Partners extends React.Component {
    render() {
        return(
            <div className="Partners" id='Partners'>
                <section className="contentBox">
                    {/* LEFT HALF */}
                    <div className="halfBox" id="leftBox">
                        <h2 className="secTitle">FOR PARTNERS</h2>
                        <p className="secDescription">
                        During the initial six months of my journey, I immersed myself in 
                        the world of HTML and CSS, understanding that they form the foundation of web 
                        development. <strong> I embarked on various projects, faced challenges, and tirelessly 
                        sought solutions.</strong> I delved into the official documentation, learned about HTML
                         semantic tags, and explored the intricacies of CSS, including the distinctions
                          between measurement units, keyframes, media queries, and responsive design. <br/><br/>

                            Once I felt comfortable navigating the HTML and CSS landscape, I ventured into the realm of JavaScript.
                            Initially, it was a daunting experience, but within a few months, I discovered that I had gained a solid 
                            understanding.<strong> I continued my education while practicing extensively on real-world tasks.</strong>
                            <br/><br/>

                            As my proficiency in JavaScript grew, I undertook simple projects that I could confidently execute. 
                            Concurrently, I delved into Node.js, successfully completing projects such as Telegram bots.

                            Subsequently, I embarked on an in-depth exploration of the React framework and other valuable tools.
                            Since 2022, I've been actively involved in developing a wide range of projects, from straightforward
                            landing pages to complex e-commerce websites as a freelancer.<strong> My learning journey is ongoing, and as 
                            of the time of writing,</strong> I am proficient in the languages, tools, and software presented in this section.
                            <br/><br/>
                            
                            In the near future, my plans include diving into React Native, allowing me to develop mobile applications 
                            for both iOS and Android platforms.
                        </p>
                    </div>

                    {/* RIGHT HALF */}
                    <div className="halfBox" id="rightBox">
                        <h3>HOROSHO VLADEJU</h3>
                        <hr />
                        <div className="skillsBox">
                            <Skill target={iconHtml}></Skill>
                            <Skill target={iconCss}></Skill>
                            <Skill target={iconJs}></Skill>
                            <Skill target={iconNode}></Skill>
                            <Skill target={iconReact}></Skill>
                            <Skill target={iconTs}></Skill>
                            <Skill target={iconJquery}></Skill>
                            <Skill target={iconMysql}></Skill>
                        </div>
                        <h3>ZNAKOM S</h3>
                        <hr />
                        <div className="skillsBox">
                        <Skill target={iconHtml}></Skill>
                            <Skill target={iconCss}></Skill>
                            <Skill target={iconJs}></Skill>
                            <Skill target={iconNode}></Skill>
                            <Skill target={iconReact}></Skill>
                            <Skill target={iconTs}></Skill>
                            <Skill target={iconJquery}></Skill>
                            <Skill target={iconMysql}></Skill>
                        </div>
                        <h3>ISPOLZUJU</h3>
                        <hr />
                        <div className="skillsBox">
                        <Skill target={iconHtml}></Skill>
                            <Skill target={iconCss}></Skill>
                            <Skill target={iconJs}></Skill>
                            <Skill target={iconNode}></Skill>
                            <Skill target={iconReact}></Skill>
                            <Skill target={iconTs}></Skill>
                            <Skill target={iconJquery}></Skill>
                            <Skill target={iconMysql}></Skill>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Partners;