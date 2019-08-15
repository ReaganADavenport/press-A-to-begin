import React from 'react';
import { Link } from 'react-router-dom';

import StMartin from '../../images/St_Martin.jpg';
import Spear from '../../images/Spear.png';

import './relics.css';

const Cloak = () => {
    return(
        <div className="Relic">
        <h1>The Cloak of Saint Martin:</h1>
        <ul>
            <li>St. Martin had met at the gates of the city of Amiens a scantily dressed beggar for whom Martin cut in half his military cloak to share it with the beggar. That night he dreamed of Jesus wearing the half cloak that Martin had given away and heard Jesus telling the angels: "Here is Martin, the Roman soldier who was not baptized. He has clad me." Confirmed in his intent to become a Christian by this vision, Martin was baptized and after serving two more years left the army. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
        </ul>
        <h3>The Life of St. Martin</h3>
        <img src={StMartin} alt="StMartin"/>
        <ul>
            <li>Martin was born in 316 or 317 in Sabaria, Pannonia, in present day Hungary, into a military family. His father was a tribune in the Imperial Horse Guard and was stationed in Ticinum, Cisapline Gaul, which is modern day Pavia, Italy. He was named after the Roman god Mars. Against his parents' wishes, young Martin began attending church at the age of ten, becoming a catechumen. At the age of fifteen, and being the son of a Roman officer, he was required to join the cavalry. In the course of his duties in 334 he was stationed at Samarobriva, Gaul, modern day Amiens, France. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
            <li>After Martin's baptism, he traveled to Tours, to become a disciple of St. Hilary of Poitiers. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
            <li>St. Hilary was a chief proponent of Trinitarian Christianity and opposed the Arianism of the Visigothic nobility. Martin returned to Italy after Hilary was exiled. In Italy, he confronted the Arian Auxentius, Archbishop of Milan, who expelled Martin from the city. Martin then found refuge and lived the life of a hermit on an island in the Tyrrhenian Sea. Martin rejoined Hilary when Hilary returned to Poitiers in 361. Here, Martin established a monastery that in time became the Bendictine Abbey of Liguge. From his monastery, Martin traveled and preached throughout western Gaul, the memory of which is remembered in many local legends. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
            <li>In 371, Martin was acclaimed bishop of Tours. As bishop of Tours he greatly impressed the city's inhabitants with his demeanor and zeal in destroying the pagan temples. Sulpicius Severus recorded in the Vita of St. Martin many of the events of this period. Sulpicius further recorded Martin's withdrawal from the tensions of the city to the monastery, Marmoutier, that he founded across the Loire river from Tours. Here Martin led a austere life among the cave-dwelling cenobites who had gathered around him. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
            <li>St. Martin of Tours died on November 11, 397, at Candes. <a href="https://orthodoxwiki.org/Martin_of_Tours"><sup>1</sup></a> </li>
        </ul>

        <ul>
            <li>Level 7</li>
            <Link to='/relics/hammer'><img src={Spear} alt="Spear"/></Link>
        </ul>

        </div>
    )
}

export default Cloak;