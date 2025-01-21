import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-link.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboLink(): React.ReactElement {
  // 创建一个引用，用于获取HTMLDivElement元素，初始值为null
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // 创建一个引用，用于获取HTMLDivElement元素，初始值为null
  const headlineRef = useRef<HTMLDivElement | null>(null);

  // 使用useGSAP钩子来初始化动画
  useGSAP(() => {
    // 创建一个时间线对象，用于管理动画序列
    const timeline = gsap.timeline({
      // 设置滚动触发器，当滚动到指定位置时触发动画
      scrollTrigger: {
        trigger: '.section-turbo-link .section-wrapper', // 触发元素
        start: 'top 65px', // 开始触发位置
        pin: true, // 固定触发元素
        scrub: 0.5 // 滑动速度
      }
    });

    // 获取wrapper元素的高度，如果不存在则默认为0
    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    // 获取headline元素的高度，如果不存在则默认为0
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    // 获取headline元素的顶部偏移量，如果不存在则默认为0
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    // 设置headline元素的垂直位置
    timeline.set('.section-turbo-link .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    // 设置section-content元素的垂直位置
    timeline.set('.section-turbo-link .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    // 设置headline-wrapper元素的缩放比例
    timeline.set('.section-turbo-link .headline-wrapper', { scale: 0.666667 });

    // 从初始状态到目标状态，改变mask元素的渐变位置
    timeline.fromTo(
      '.section-turbo-link .headline-wrapper .mask',
      {
        '--gradient-left': '50%',
        '--gradient-right': '50%'
      },
      {
        '--gradient-left': '0%',
        '--gradient-right': '100%'
      }
    );

    // 从初始状态到目标状态，改变fill-top元素的横向百分比位置
    timeline.from('.section-turbo-link .fill-top', { xPercent: 100 });
    // 从初始状态到目标状态，改变fill-bottom元素的横向百分比位置
    timeline.from('.section-turbo-link .fill-bottom', { xPercent: -100 }, '<');
    // 从初始状态到目标状态，改变mask元素的透明度
    timeline.fromTo(
      '.section-turbo-link .headline-wrapper .mask',
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      '<'
    );

    // 从初始状态到目标状态，改变turbo-os元素的缩放比例和透明度
    timeline.to('.section-turbo-link .turbo-os', { scale: 0.4, opacity: 0.6 });
    // 从初始状态到目标状态，改变headline-wrapper元素的缩放比例
    timeline.to('.section-turbo-link .headline-wrapper', { scale: 1 }, '<');

    // 从初始状态到目标状态，改变headline元素的垂直位置，持续时间为1.5秒
    timeline.to('.section-turbo-link .headline', { y: 0, duration: 1.5 });
    // 从初始状态到目标状态，改变section-content元素的垂直位置，持续时间为1.5秒
    timeline.to(
      '.section-turbo-link .section-content',
      { y: 0, duration: 1.5 },
      '<'
    );
  });

  return (
    <section className="section-turbo-link">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-link/turbo-link.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">网络自主优选 通信稳定流畅</div>
          </div>
        </div>
        <div className="section-content">
          <img
            src={getImageUrl('assets/section-turbo-link/tower-white.svg')}
            alt=""
          />
          <div className="improved">
            <p className="subtitle">蜂窝网络数据卡顿率</p>
            <div className="ratio">
              <img
                src={getImageUrl('assets/section-turbo-link/arrow-down.svg')}
                alt=""
              />
              <p>83%</p>
            </div>
          </div>
          <img
            src={getImageUrl('assets/section-turbo-link/tower-blue.svg')}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTurboLink;
