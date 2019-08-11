import React from 'react';

import StGeorge from '../../images/St_George.jpg'

import './relics.css';

const Lance = () => {
    return(
        <div className="Relic">
        <h1>The Lance of St. George:</h1>
            <ul>
                <li>In Medieval Romance, ‘Ascalon’ is the name of the lance used by St George to slay the dragon</li>
            </ul>
            
            <h3>George the Trophy-bearer</h3>
            <img src={StGeorge} alt='StGeorge'/>
            <ul>
                <li>According to Tradition, George was born to a Christian family during the late 3rd century. His father was from Cappadocia and served as an officer of the army. His mother was from Lydda, Palestine. She returned to her native city as a widow along with her young son after the martyrdom of George's father, where she provided him with a respectable education and raised him in piety.</li>
                <li>The youth, it would seem, followed his father's example in joining the army soon after his coming of age. He proved to be a charismatic soldier and consequently rose quickly through the military ranks of the time. In time George was stationed in Nicomedia as a member of the personal guard attached to Roman Emperor Diocletian (reign 284–305). </li>
                <li>In 303, Diocletian issued an edict authorizing the systematic persecution of Christians across the Empire. His Caesar, Galerius, was supposedly responsible for this decision and would continue the persecution during his own reign (305–311). It is believed that George was ordered to take part in the persecution but instead confessed to being a Christian himself and criticized the imperial decision. An enraged Diocletian proceeded in ordering the torture of this apparent traitor and his execution.</li>
                <li>Then, after innumerable forms of torture, George was executed by decapitation in front of Nicomedia's defensive wall on April 23, 303. The witness of his suffering convinced Empress Alexandra and Athanasius, a pagan priest, to also become Christians, and so they also joined George in martyrdom as consequence. </li>
            </ul>
            
            <h3>George and the dragon</h3>
            <ul>
                <li>St. George is often depicted with a dragon or some other serpentine creature under his feet. This comes from a legend whose details may vary according to local tradition. The tale begins with a dragon making its nest at the spring (or lake) that provided a town (either near Beirut or Silena, Libya, often) with water. Consequently, the citizens had to temporarily remove the dragon from its nest in order to collect water. To do so, they offered the dragon a daily human sacrifice. The victim of the day was chosen by drawing lots. Eventually, the "winner" of this lottery happened to be the local princess. The local monarch is occasionally depicted begging for her life with no result. She is offered to the dragon, but at this point a traveling George arrives. He faces the dragon, and, after invoking the name of the Holy Trinity, slays it and saves the princess. The grateful citizens then abandon their ancestral paganism and convert to Christianity. </li>
            </ul>
            
        </div>
    )
}

export default Lance;