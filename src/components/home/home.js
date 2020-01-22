import React from 'react';
import { Link } from 'react-router-dom';

import bookCover from '../../images/bookCover.png';
import pickingMain from '../../images/PickingMain.png';
import grinding from '../../images/Grinding.png';
import yourParty from '../../images/YourParty.png';
import fearFailure from '../../images/FearFailure.png';
import distractions from '../../images/Distractions.png';
import mPAndP from '../../images/MonstersP&P.png';
import lostOnMap from '../../images/LostOnMap.png';
import Scott from '../../images/Scott_Davenport.JPG';

import './home.css';

const Home = () => {
    return(
        <div className="Home">
            <div className="Mission_Statement">
            <h1>Engaging & Inspiring Youth Ministry</h1>
                <div className="Textbox_1">
                    <p>Scott Davenport’s book, <i>Press A To Begin</i>, the first book in his Neptic Warrior series, uses gaming vernacular to speak to young people about the challenges they face every day. Blending timeless biblical wisdom and the early Church Fathers with concepts they use while gaming, <i>Press A To Begin</i> inspires young people to take control of their lives and to be more intentional in every decision they make.</p>
                </div>
                <img src={bookCover} alt="BookCover"/>
            </div>
            <div className="Buttons">
                <div className="ContactButton">
                    <Link to='/contact'><b>Contact for Seminar</b></Link>
                </div>
                <div className="ContactButton">
                    <Link to='/shop'><b>Buy Book</b></Link>
                </div>
            </div>
        
            <div className="SectionTitle">
                <h1>7 Lessons to Prepare for the Adventures to Come</h1>
            </div>

                <div className="Chapters">
                    <div className="Chapter1">
                        <div className="chap1"><img src={pickingMain}/></div>
                        <div className="ch1_txt">
                            <h4>Level 1: Picking Your Main</h4>
                            <p>Knowing where we are going and who we want to be when we get there, gives meaning and purpose to everything we do.</p>
                        </div>
                    </div>

                    <div className="Chapter2">
                        <div className="chap2"><img src={grinding}/></div>
                            <div className="ch2_txt">
                                <h4>Level 2: Grinding</h4>
                                <p>It takes effort on our part if we are to grow into the kind of person we want to be</p>
                            </div>
                    </div>

                    <div className="Chapter3">
                        <div className="chap3"><img src={yourParty}/></div>
                            <div className="ch3_txt">
                                <h4>Level 3: Your Party</h4>
                                <p>We can be strategic and pick friends who help us reach our objectives</p>
                            </div>
                    </div>

                    <div className="Chapter4">
                        <div className="chap4"><img src={fearFailure}/></div>
                            <div className="ch4_txt">
                                <h4>Level 4: Fear and Failure</h4>
                                <p>A key lesson in gaming is that failure only makes us better, more prepared players in the game</p>
                            </div>
                    </div>

                    <div className="Chapter5">
                        <div className="chap5"><img src={distractions}/></div>
                            <div className="ch5_txt">
                                <h4>Level 5: Distractions</h4>
                                <p>Social Media and the critics can distract us. Take control of these tools and let go of things that are not helpful.</p>
                            </div>
                    </div>

                    <div className="Chapter6">
                        <div className="chap6"><img src={mPAndP}/></div>
                            <div className="ch6_txt">
                                <h4>Level 6: Monsters, Potions and Passions</h4>
                                <p>All addictions take over our lives and separate us from who we want to be.</p>
                            </div>
                    </div>

                    <div className="Chapter7">
                        <div className="chap7"><img src={lostOnMap}/></div>
                            <div className="ch7_txt">
                                <h4>Level 7: Lost on the Map</h4>
                                <p>We all get lost in our lives at some point. They key is to know that we don’t have to stay lost.</p>
                            </div>
                    </div>
                </div>

                <div className="aboutAuthor">
                    <div className="Textbox_2">
                        <h2>About the Author</h2>
                        <p>Author and public speaker, Scott Davenport is a graduate of the University of Georgia. He spent 25 years in the music industry with Island Def Jam and Geffen Records working with artists such as Justin Bieber, Rihanna, Jay Z, Aerosmith, Kanye West, The Eagles, Guns and Roses, Bon Jovi, Mariah Carey, Nirvana and more. Scott is a member of the Annunciation Greek Orthodox Cathedral in Atlanta where he teaches Sunday school, adult catechesis (Road to Orthodoxy), and serves as Vice President of the Parish Council, chairman of the EHCYD committee and goal captain of the strategic plan for youth ministry. Scott also serves on the board for the Diakonia Retreat Center and the Annunciation Day School board. When he’s not devoting his time to the Church, Scott spends the rest of his time with his wife Lisa, two daughters Alexandra and Reagan and their two Great Danes Artemis and Misha.</p>
                    </div>
                    <img src={Scott}/>
                </div>
                

            
        </div>
    )
}

export default Home;