import React from 'react';

import StPatty from '../../images/St_Patrick.jpg';

import './relics.css';

const Breastplate = () => {
    return(
        <div className="Relic">
        <h1>The Breastplate of Saint Patrick:</h1>
            <ul>
                <li>a Prayer of Protection, traditionally attributed to Saint Patrick during his Irish ministry in the 5th century. <a href="https://en.wikipedia.org/wiki/Saint_Patrick%27s_Breastplate"><sup>1</sup></a> </li>
                <li>Christ, be with me, Christ before me, Christ behind me,</li>
                <li>Christ in me, Christ beneath me, Christ above me,</li>
                <li>Christ on my right, Christ on my left, Christ where I lie, Christ where I sit,</li>
                <li>Christ where I arise, Christ in the heart of every man who thinks of me,</li>
                <li>Christ in the mouth of every man who speaks of me,</li>
                <li>Christ in every eye that sees me, Christ in every ear that hears me <a href="https://www.catholic.org/prayers/prayer.php?p=3290"><sup>2</sup></a> </li>
            </ul>

            <h3>More on St. Patrick</h3>
            <img src={StPatty} alt='StPatty'/>
            <ul>
                <li>Saint Patrick was born around 390 (likely in 387), at Kilpatrick, near Dumbarton, in Scotland. His name is from the Latin Patricius, meaning high-born. His parents were part of the Christian minority of Britain; his father, Calpurnius, was a deacon, "the son of Potitus, a priest, of the village Bannavem Taburniæ." <a href="https://orthodoxwiki.org/Patrick_of_Ireland"><sup>3</sup></a> </li>
                <li>At the age of 16, he was captured during a raiding party and taken to Ireland as a slave to herd and tend sheep. During that time, he prayed frequently and came for the first time to have a true faith in God. At age 22, he had a vision in which God told him to be prepared to leave Ireland. Soon, he escaped, walking 200 miles to a ship and returning to England. In a dream, he saw the people of Ireland calling him, "We beg you, holy youth, that you shall come and shall walk again among us." <a href="https://orthodoxwiki.org/Patrick_of_Ireland"><sup>3</sup></a> </li>
                <li>St Patrick sought clerical training. He was ordained by St. Germanus, bishop of Auxerre. Around 430 he was ordained a bishop, after which he returned to Ireland. There, he preached the Gospel, reaching tribal chieftains, gaining their permission to teach their subjects also. During his episcopate, he was attacked for a sin he confessed to a close friend, a sin he committed "in a single hour" when only 15, but he did not suffer as a result. He established an episcopal administration and led a monastic lifestyle, establishing Christianity in Ireland. St. Patrick died at Saul, Downpatrick, Ireland, on March 17, 461. <a href="https://orthodoxwiki.org/Patrick_of_Ireland"><sup>3</sup></a> </li>
            </ul>
        </div>
    )
}

export default Breastplate;