import React from 'react';

import StMarina from '../../images/St_Marina.jpg';

import './relics.css';

const Hammer = () => {
    return(
        <div className="Relic">
        <h1>The Hammer of St. Marina:</h1>
        <ul>
            <li>Saint Marina's most famous story is her three confrontations with Satan while she was imprisoned. Once as a dragon he attempted to devour her, holding half of her body in his mouth. Praying, she made the sign of the cross and the beast was torn apart and vanished. Again, he appeared as a man, black as night. She seized his hair and beat him with a hammer until he left her sight. Again, he grabbed her and threatened to kill her if she would not stop praying. She whipped him, and finally a light appeared from Heaven in the form of a cross. A white dove told her to rejoice for she had vanquished the enemy, and she was completely healed. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
        </ul>
        <h3>The Life of Saint Marina</h3>
        <img src={StMarina} alt="StMarina"/>
        <ul>
            <li>Marina lived in what is now modern-day Pisidia, Turkey, in the early fourth century. Her father was a pagan priest, and her mother died in childbirth. The unwanted Marina was then left in the care of a nursemaid, who was later discharged of her duties and sent to work as a shepherdess. While still a teenager, Marina made a vow of perpetual chastity to God. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
            <li>One day, while Marina was tending sheep, a Roman prefect attempted to seduce her. When she refused his advances, she was denounced as a Christian. Upon refusing to sacrifice to the pagan gods, she was subjected to various tortures, including being beaten with clubs and her skin being raked with iron combs. One rather interesting torment included plunging Marina into a cauldron of boiling water, out of which she came unharmed, singing God's praises. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
            <li>It was during this imprisonment that Marina had her encounters with the devil. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
            <li>She was eventually beheaded at the age of sixteen, around the year AD 304. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
            <li>Until the sacking of Constantinople by Western crusaders in the year 1204, the relics of the Great Martyr Marina were in the Panteponteia monastery. According to other sources, they were located in Antioch until the year 908 and from there transferred to Italy. Now they are in Athens, in a church dedicated to the holy Virgin Martyr. Her venerable hand was transferred to Mount Athos, to Vatopedi Monastery. <a href="https://orthodoxwiki.org/Marina_of_Antioch"><sup>1</sup></a> </li>
        </ul>
        </div>
    )
}

export default Hammer;