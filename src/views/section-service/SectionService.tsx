import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-service.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// 定义一个名为 SectionService 的函数组件，返回一个 React 元素
function SectionService(): React.ReactElement {
  // 使用 useGSAP 钩子来初始化 GSAP 动画库
  useGSAP(() => {
    // 创建一个 GSAP 时间线对象，并配置滚动触发器
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-service', // 触发动画的元素选择器
        start: 'top 50%', // 动画开始的滚动位置
        end: 'bottom 100%', // 动画结束的滚动位置
        scrub: 0.5 // 动画 scrub 效果的强度
      }
    });

    // 从初始状态开始，将 .section-service .image-content 元素的 scale 缩放至 0.9
    timeline.from('.section-service .image-content', { scale: 0.9 });

    // 将 .section-service .plan 元素的 scale 缩放至 1.35
    timeline.to('.section-service .plan', { scale: 1.35 });
    // 将 .section-service .schedule 元素的 scale 缩放至 1.35，与上一个动画同时开始
    timeline.to('.section-service .schedule', { scale: 1.35 }, '<');

    // 将 .section-service .left-info 元素的透明度设置为 1
    timeline.to('.section-service .left-info', { autoAlpha: 1 });
    // 将 .section-service .left-info 元素的透明度设置为 0
    timeline.to('.section-service .left-info', { autoAlpha: 0 });

    // 将 .section-service .right-info 元素的透明度设置为 1
    timeline.to('.section-service .right-info', { autoAlpha: 1 });
    // 将 .section-service .plan 元素的透明度设置为 0，与上一个动画同时开始
    timeline.to('.section-service .plan', { autoAlpha: 0 }, '<');
    // 将 .section-service .schedule 元素的透明度设置为 1，与上一个动画同时开始
    timeline.to('.section-service .schedule', { autoAlpha: 1 }, '<');
  });

  // 返回组件的 JSX 结构
  return (
    <section className="section-service">
      <div className="service-info">
        <h2 className="title">
          YOYO建议
          <br />
          多服务组合推荐 更懂你
        </h2>
        <p className="intro">
          YOYO 个人化服务场景更丰富，同时提供多场景下多个并行服务的组合推荐；
          <br />
          你需要的精准服务，一键直达，无需在APP内频繁操作。
        </p>
      </div>
      <div className="section-wrapper">
        <div className="sticky-content">
          <div className="image-info left-info">
            <h2 className="title">人因优化 顺畅出行</h2>
            <p className="intro">
              YOYO
              建议综合考虑你的当前位置、出发地天气、实时路况以及个人航旅习惯等多个因素，
              建议综合考虑你的当前位置、出发地天气、实时路况以及个人航旅习惯等多个因素，
              为你提供最适合的航旅出行建议，让航班出票、出发提醒、值机、登机等信息适时呈现。
            </p>
          </div>
          <div className="image-info right-info">
            <h2 className="title">安排不错 出行不错过</h2>
            <p className="intro">
              YOYO 在你出行前提示重要日程，
              <br />
              为你做好行程规划。
            </p>
          </div>
          <div className="image-content">
            <img
              className="mobile"
              src={getImageUrl('assets/section-service/s4-01.png')}
              alt=""
            />
            <img
              className="plan"
              src={getImageUrl('assets/section-service/s4-02.png')}
              alt=""
            />
            <img
              className="schedule"
              src={getImageUrl('assets/section-service/s4-03.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionService;
