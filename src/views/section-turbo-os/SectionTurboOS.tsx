import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-os.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboOS(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // 创建一个时间线实例，并配置滚动触发器
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-turbo-os .section-wrapper', // 触发元素
        start: 'top 65px', // 开始滚动的位置
        pin: true, // 固定触发元素
        scrub: 0.5 // 滚动同步
      }
    });

    // 获取包装器的高度
    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    // 获取标题的高度
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    // 获取标题的顶部偏移量
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    // 设置标题的初始位置
    timeline.set('.section-turbo-os .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    // 设置内容区域的初始位置
    timeline.set('.section-turbo-os .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    // 设置标题包装器的初始缩放比例
    timeline.set('.section-turbo-os .headline-wrapper', { scale: 0.666667 });

    // 从初始状态到目标状态的动画
    timeline.fromTo(
      '.section-turbo-os .headline-wrapper .mask',
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
    timeline.from('.section-turbo-os .fill-top', { xPercent: 100 }); // 从右侧进入
    timeline.from('.section-turbo-os .fill-bottom', { xPercent: -100 }, '<'); // 从左侧进入
    timeline.fromTo(
      '.section-turbo-os .headline-wrapper .mask',
      { autoAlpha: 1 }, // 初始透明度
      { autoAlpha: 0 }, // 目标透明度
      '<' // 与前一个动画同时开始
    );

    // 缩放和透明度变化动画
    timeline.to('.section-turbo-os .turbo-os', { scale: 0.4, opacity: 0.6 });
    timeline.to('.section-turbo-os .headline-wrapper', { scale: 1 }, '<'); // 与前一个动画同时开始

    // 标题和内容区域的最终位置动画
    timeline.to('.section-turbo-os .headline', { y: 0, duration: 1.5 });
    timeline.to(
      '.section-turbo-os .section-content',
      { y: 0, duration: 1.5 },
      '<' // 与前一个动画同时开始
    );
  });

  return (
    <section className="section-turbo-os">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-os/turbo-os.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">流畅升级 功耗更优</div>
          </div>
        </div>
        <div className="section-content">
          <div className="performance">
            <h3 className="subtitle">系统更流畅</h3>
            <div className="improved">
              <div className="improved-item">
                <p className="intro">应用滑动卡顿率</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-down.svg')}
                    alt=""
                  />
                  <p>43%</p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro">应用启动响应时延</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-down.svg')}
                    alt=""
                  />
                  <p>29%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="performance">
            <h3 className="subtitle">续航更持久</h3>
            <div className="improved">
              <div className="improved-item">
                <p className="intro">视频聊天</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-up.svg')}
                    alt=""
                  />
                  <p>
                    20
                    <span> 分钟</span>
                  </p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro">刷短视频</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-up.svg')}
                    alt=""
                  />
                  <p>
                    30
                    <span> 分钟</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTurboOS;
