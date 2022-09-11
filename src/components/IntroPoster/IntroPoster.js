import React, {useState} from 'react'
import css from './IntroPoster.module.css'

import noise from '../../img/noise.png'
import groovy from '../../img/groovy.png'
import Terms from '../../img/Terms.png'
import X from '../../img/X.png'
import Accept from '../../img/Accept.png'
import Cancel from '../../img/Cancel.png'

import IntroCard from '../../img/IntroCard.png'
import { useEffect } from 'react'

export default function IntroPoster() {
    const [isShown, setIsShown] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsShown(true);
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

      const termsWrapper = () => {
        return (
            <div className={css.termsContainer}>
                <div className={css.termsWrapper}>
                    <img src={Terms} className={css.terms} />
                    <img src={X} className={css.x} />
                    <a href='/join'><img src={Accept} className={isAccepted ? css.accept : css.waiting} onClick={() => {
                        setIsAccepted(true)

                    }}/></a>
                    <img src={Cancel} className={css.cancel} />
                </div>
            </div>
        )
      }
    
    return (
        <>  
        <div className={css.container}>
            {isShown ? termsWrapper() : <></>}
            <img src={noise} className={css.noise} />
            <img src={noise} className={css.noise2} />
            <img src={groovy} className={css.background}/>
            <img src={IntroCard} className={css.poster}/>
        </div>
        <div>

        </div>
        </>
    )
}