import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-suggest.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionSuggest(): React.ReactElement {
  // 使用 useGSAP 钩子来初始化 GSAP 动画
  useGSAP(() => {
    // 创建一个新的时间线对象
    const timeline = gsap.timeline({
      // 配置滚动触发器
      scrollTrigger: {
        // 触发元素选择器
        trigger: '.section-suggest .section-wrapper',
        // 触发开始位置，视口顶部距离元素顶部65px时触发
        start: 'top 65px',
        // 固定元素，使其在滚动时保持位置不变
        pin: true,
        // 滚动 scrub 效果，值为0.5表示动画进度与滚动进度同步
        scrub: 0.5
      }
    });

    // 设置初始状态，将第一个卡片列表向左移动50%
    timeline.set('.section-suggest .card-list-1', { xPercent: -50 });
    // 设置初始状态，将第二个卡片列表保持原位
    timeline.set('.section-suggest .card-list-2', { xPercent: 0 });

    // 动画效果，将第一个卡片列表移动到原位
    timeline.to('.section-suggest .card-list-1', { xPercent: 0 });
    // 动画效果，将第二个卡片列表向左移动50%，与第一个动画同时开始
    timeline.to('.section-suggest .card-list-2', { xPercent: -50 }, '<');
  });

  return (
    <section className="section-suggest">
      <div className="section-wrapper">
        <div className="suggest-info">
          <h2 className="title">系统级卡片建议</h2>
          <p className="intro">基于运动场景智能推荐 300+个系统级卡片建议。</p>
        </div>
        <div className="suggest-content">
          <div className="card-list card-list-1">
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-01.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-02.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-03.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-04.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-05.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-06.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-07.png')}
              alt=""
            />
          </div>
          <div className="card-list card-list-2">
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-01.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-02.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-03.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-04.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-05.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-06.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-07.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSuggest;
