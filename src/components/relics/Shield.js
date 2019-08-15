import React from 'react';
import { Link } from 'react-router-dom';

import StMichael from '../../images/St_Michael.jpg'
import Spear from '../../images/Spear.png';

import './relics.css';

const Shield = () => {
    return(
        <div className="Relic">
        <h1>The Shield of St. Michael:</h1>
            <ul>
                <li>While not a physical relic, as Saint Michael was never mortal, the shield embodies the Archangel Michael's role as the protector of Christ's Church and the faithful.</li>
            </ul>
            <h3>The Archangel</h3>
            <img src={StMichael} alt="StMichael"/>
            <ul>
                <li>The Holy Archangel Michael is one of the most celebrated of the Angels and bodiless powers; he is called the Archistrategos, or chief commander, of all the bodiless powers. According to Holy Scripture and Tradition, he has interceded for humanity multiple times and continues to serve as the Defender of the Faith. St Michael is most often invoked for protection from invasion by enemies and from civil war, and for the defeat of adversaries on the field of battle. He is celebrated primarily on November 8, the Synaxis of Michael and all the Bodiless Powers of Heaven; September 6 also marks the miracle of the Archangel at Colossae. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
            </ul>
            <h3>Scripture and Tradition</h3>
            <ul>
                <li>The name Michael means "like unto God" or "Who is like unto God?" </li>
                <li>Michael first appears in the Old Testament in the book of Joshua's account of the fall of Jericho. Though Michael is not mentioned by name in the text, it is said that Joshua "looked up and saw a man standing in front of him with a drawn sword in his hand." When the still unaware Joshua asks which side of the fight the Archangel is on, Michael responds, "neither...but as commander of the army of the Lord I have now come" (Joshua 5:13-14)1. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a></li>
                <li>In the book of Daniel, Michael appears first to help the Archangel Gabriel defeat the Persians (10:13). In a later vision it is revealed to Daniel that "at that time [the end times] Michael, the great prince who protects your people, will arise. There will be a time of distress such as has not happened from the beginning of nations until then..." (Ch. 12)1. Michael thus plays an important role as the protector of Israel and later of his chosen people, the Church. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
                <li>The Church Fathers also ascribe to Michael the following events: During the Exodus of the Israelites from Egypt he went before them in the form of a pillar of cloud by day and a pillar of fire by night; the power of the great Chief Commander of God was manifest in the annihilation of the 185 thousand soldiers of the Assyrian emperor Sennacherib (4/2 Kings 19:35); also in the smiting of the impious leader Heliodorus (2 Macc. 3: 24-26); and in the protection of the Three Holy Youths: Ananias, Azarias and Misail, thrown into the fiery furnace for their refusal to worship an idol (Dan 3:22-25). Through the will of God, the Chief Commander Michael transported the Prophet Habbakuk (December 2) from Judea to Babylon, to give food to Daniel in the lions' den (Dan. 14:33-37). The Archangel Michael disputed with the devil over the body of the holy Prophet Moses (Jude 1:9). <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
                <li>In New Testament times, the holy Archangel Michael showed his power when he miraculously saved a young man, cast into the sea by robbers with a stone about his neck on the shores of Mt Athos. This story is found in the Athonite Paterikon, and in the Life of St Neophytus of Docheiariou (November 9). <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
                <li>Perhaps his most famous miracle, though, is the salvation of the church at Colossae. Here a number of pagans tried to destroy this church by diverting the flow of two rivers directly into its path. However, the Archangel appeared amongst the waters, and, carrying a cross, channeled the rivers underground so that the ground the church stood on would not be destroyed. The spring which came forth after this event is said to have special healing powers. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
                <li>Michael also has been associated with healing in other cases, as well as his primary role as leader of the Church Militant. He has been said to appear to Emperor Constantine the Great (d. 337) at Constantinople, to have intervened in assorted battles, and appeared, sword in hand, over the mausoleum of Hadrian, in apparent answer to the prayers of Pope St. Gregory I the Great (r. 590-604) that a plague in Rome should cease. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
            </ul>
            <h3>Iconography</h3>
            <ul>
                <li>There are three icons of the Archangel Michael that he has personally intervened miraculously to the "authoring" of his image; Mantamados, Panormitis and Nenita. Each of these icons are different. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
                <li>More typically, he is represented as the Chief Commander of the Heavenly hosts, where he holds a sword in one hand; in the other he often carries either a shield, a date-tree branch, a spear, or a white banner (possibly with a scarlet cross). Some icons of the Archangel Michael (or the Archangel Gabriel) show the angel holding an orb in one hand and a staff in the other. <a href="https://orthodoxwiki.org/index.php?title=Archangel_Michael&mobileaction=toggle_view_mobile"><sup>1</sup></a> </li>
            </ul>

            <ul>
                <li>Level 5</li>
                <Link to='/relics/spear'><img src={Spear} alt="Spear"/></Link>
            </ul>
        </div>
    )
}

export default Shield;