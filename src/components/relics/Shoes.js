import React from 'react';

import StSpyri from '../../images/St_Spyridon.jpg';

import './relics.css';

const Shoes = () => {
    return(
        <div className="Relic">
        <h1>The Shoes of St. Spyridon:</h1>
        <ul>
            <li>Saint Spyridon's silk slippers which clothe the feet of his relics wear out each year and are replaced on his feast day.<a href="https://orthodoxwiki.org/Spyridon_of_Trimythous"><sup>1</sup></a></li>
        </ul>
            <h3>The life of St. Spyridon</h3>
            <img src={StSpyri} alt="StSpyri"/>
        <ul>
            <li>Our father among the saints Spyridon of Trimythous the Wonderworker ca. 270-348) was a fourth century bishop who was present at the First Ecumenical Council. He is also commonly referred to in Corfu as Keeper of the City  since he is also the patron saint of that island (this is where his relics are located and venerated). He is commemorated by the church on December 12. <sup>1</sup> </li>
            <li>Spyridon was born in the village of Ashia Cyprus (270 AD) and died in Trimythous, Cyprus (348 AD). He was a peasant farmer and shepherd and was not educated. Spyridon was married and had a daughter, Irene. After his wife died, he and his daughter both entered into monasticism. He later became the Bishop of Trimythous (during the reign of Constantine the Great) and continued in piety for which he was greatly known. <sup>1</sup> </li>
            <li>He is the patron saint of potters from the miracle where pulled the fire, water, and dust that made up a pot shard to prove the Holy Trinity.<sup>1</sup> </li>
        </ul>
            <h3>Persecutions and witness to Orthodox Faith</h3>
        <ul>
            <li>During the Maximilian persecutions (295 AD) he was arrested and exiled. In 325 AD, he was present at the First Ecumenical Council of Nicea where he astonished many with his simple explanations of the Orthodox Faith. Though not well-educated, he surprised everyone at the Council of Nicea by converting a famous philosopher to Orthodoxy from Arianism. He explained the unity and diversity of the Trinity by holding up a brick, then commonly thought to be a combination of the elements fire, earth and water; as he spoke, fire blazed from the top of the brick while water gushed out underneath. There too, at Nicea, he met St. Nicholas of Myra, with whom he formed a lasting friendship. <sup>1</sup> </li>
        </ul>
            <h3>Departure and relics</h3>
        <ul>
            <li>St. Spyridon lived most of his earthly life in Cyprus, where he also reposed in 348 AD and was buried in the Church of the Holy Apostles in Trimythous. <sup>1</sup> </li>
            <li>When the Saracens took the island, the Cypriots opened his grave in order to remove his sacred bones to Constantinople. They found that his body had remained intact, while from the grave emanated a scent of basil, true signs of the sainthood he had shown during his lifetime. When Constantinople fell in 1453, he was transferred to Serbia, then a Corfiot elder, Georgios Kalohairetis, brought him to the island of Corfu in Greece where he is currently buried. <sup>1</sup> </li>
        </ul>

        <ul>
            <li> <sup>1</sup> <a href="https://orthodoxwiki.org/Spyridon_of_Trimythous">https://orthodoxwiki.org/Spyridon_of_Trimythous</a></li>
        </ul>
        </div>
    )
}

export default Shoes;