import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-hero.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionHero(): React.ReactElement {
  useGSAP(() => {
    //实现magic-os先出来,然后再出现slogan,需要使用gsap的timeline
    // const timeline = gsap.timeline();
    // timeline
    //   .fromTo(
    //     '.section-hero .magic-os',
    //     { y: 50, opacity: 0 },
    //     { y: 0, opacity: 1, duration: 1 }
    //   )
    //   .fromTo(
    //     '.section-hero .slogan',
    //     { y: 50, opacity: 0 },
    //     { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    //   );

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-wrapper',
        toggleClass: 'animated'
      },
      yoyo: true,
      onComplete: () => {
        console.log('animation completed');
      }
    });
  });

  return (
    <section className="section-hero">
      <div className="section-wrapper">
        <img
          className="cover"
          src={getImageUrl('assets/section-hero/magic-kv.png')}
          alt=""
        />
        <div className="content">
          <img
            className="magic-os"
            src={getImageUrl('assets/section-hero/magic-os.svg')}
            alt=""
          />
          <h2 className="slogan">越用越好用 越用越懂你</h2>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
