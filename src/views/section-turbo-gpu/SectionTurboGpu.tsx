import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-gpu.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboGpu(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  // 使用 useGSAP 钩子来初始化 GSAP 动画
  useGSAP(() => {
    // 创建一个 GSAP 时间线，并配置滚动触发器
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-turbo-gpu .section-wrapper', // 触发元素
        start: 'top 65px', // 开始滚动的位置
        pin: true, // 固定触发元素
        scrub: 0.5 // 滚动同步动画
      }
    });

    // 获取包裹元素的高度
    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    // 获取标题元素的高度
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    // 获取标题元素的顶部偏移量
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    // 设置标题元素的初始位置
    timeline.set('.section-turbo-gpu .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    // 设置内容区域的初始位置
    timeline.set('.section-turbo-gpu .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    // 设置标题包裹元素的初始缩放比例
    timeline.set('.section-turbo-gpu .headline-wrapper', { scale: 0.666667 });

    // 从初始状态到目标状态的动画
    timeline.fromTo(
      '.section-turbo-gpu .headline-wrapper .mask',
      {
        '--gradient-left': '50%', // 初始左侧渐变位置
        '--gradient-right': '50%' // 初始右侧渐变位置
      },
      {
        '--gradient-left': '0%', // 目标左侧渐变位置
        '--gradient-right': '100%' // 目标右侧渐变位置
      }
    );

    // 从初始状态到目标状态的动画
    timeline.from('.section-turbo-gpu .fill-top', { xPercent: 100 }); // 顶部填充元素向左移动
    timeline.from('.section-turbo-gpu .fill-bottom', { xPercent: -100 }, '<'); // 底部填充元素向右移动
    timeline.fromTo(
      '.section-turbo-gpu .headline-wrapper .mask',
      { autoAlpha: 1 }, // 初始透明度
      { autoAlpha: 0 }, // 目标透明度
      '<'
    );

    // 缩放和透明度变化动画
    timeline.to('.section-turbo-gpu .turbo-os', { scale: 0.4, opacity: 0.6 });
    timeline.to('.section-turbo-gpu .headline-wrapper', { scale: 1 }, '<');

    timeline.to('.section-turbo-gpu .headline', { y: 0, duration: 1.5 });
    timeline.to(
      '.section-turbo-gpu .section-content',
      { y: 0, duration: 1.5 },
      '<'
    );
  });

  return (
    <section className="section-turbo-gpu">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-gpu/turbo-gpu.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">帧率更高更稳定</div>
          </div>
        </div>
        <div className="section-content">
          <img src={getImageUrl('assets/section-turbo-gpu/s7-01.png')} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionTurboGpu;
