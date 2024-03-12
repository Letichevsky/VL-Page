import React from 'react';
import './Clients.scss';
import Socialitem from './Socialitem';
import tg from '../../assets/icons/TG.svg'

class Clients extends React.Component {
    render() {
        return(
            <div className="Clients" id='Clients'>
                <section className="contentBox">
                    <h2>FOR CLIENTS</h2>
                    <p> If you are a client and need a high-quality website with a beautiful,
                        concise, modern design or anything else, please feel free to contact 
                        me through any convenient means to obtain detailed information. 
                        In each of my projects, every detail matters and doesn't go unnoticed.
                    </p>
                    <div className="socialBox">
                        <Socialitem target={tg}></Socialitem>
                        <Socialitem target={tg}></Socialitem>
                        <Socialitem target={tg}></Socialitem>
                        <Socialitem target={tg}></Socialitem>
                    </div>
                </section>
            </div>
        )
    }
}

export default Clients;