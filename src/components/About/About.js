import React from 'react';
import './About.scss';
import Photogallery from '../Photogallery/Photogallery';

class About extends React.Component {
    render() {
        return(
            <div className="About" id='About'>
                <section className="contentBox">
                    {/* Left half  */}
                <div className="halfBox" id="leftBox">
                <Photogallery/>
                </div>

                {/* Right half  */}
                <div className="halfBox" id="rigthBox">
                    <h2 className="secTitle">ABOUT ME</h2>
                    <p className="secDescription">My name is Vladislav Letichevsky, I'm 28 years old,
                     and I was born in Kyiv, Ukraine. Currently, I reside in Warsaw, Poland. From an 
                     early age, I had a passion for design, and I delved into this field. At the age of 
                     19, I started creating <strong> designs and corporate identities for various 
                     companies while collaborating with fellow designers and developers.</strong><br/><br/>
                     In 2018, I made the decision to move to Europe and developed an interest in web and 
                     mobile development. <strong> I chose to specialize in frontend development </strong> 
                     because I already possessed the skills to create professional designs and had a strong 
                     sense of visual aesthetics. I spent a year and a half honing my skills in this field
                      before taking on significant projects.<br/><br/>

                    Right from the beginning, I approached my work with dedication and a commitment to
                     maintaining a strong reputation for delivering results. My journey in development has 
                     been driven by <strong> a passion for excellence and a dedication to my 
                        craft.</strong> </p>
                </div>
                </section>
            </div>
        )
    }
}

export default About;