import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-notice.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// 定义一个名为 SectionNotice 的函数组件，返回一个 React 元素
function SectionNotice(): React.ReactElement {
  // 使用 useRef 创建一个引用，用于获取 .sticky-content 元素的 DOM 节点
  const stickyContentRef = useRef<HTMLDivElement | null>(null);

  // 使用 useGSAP 钩子来初始化 GSAP 动画
  useGSAP(() => {
    // 获取视口宽度
    const clientWidth = document.documentElement.clientWidth;
    // 获取 .sticky-content 元素的滚动宽度，如果不存在则默认为 0
    const scrollWidth = stickyContentRef.current?.scrollWidth ?? 0;
    // 获取 .sticky-content 元素的偏移量，如果不存在则默认为 0
    const offsetLeft = stickyContentRef.current?.offsetLeft ?? 0;

    // 使用 GSAP 动画 .section-notice .sticky-content 元素
    gsap.to('.section-notice .sticky-content', {
      // 设置滚动触发器
      scrollTrigger: {
        trigger: '.section-notice', // 触发元素
        start: 'top 65px', // 动画开始位置
        end: 'bottom 100%', // 动画结束位置
        scrub: 0 // 动画同步滚动
      },
      // 设置动画属性：水平移动距离
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),

      // 设置缓动函数
      ease: 'power3.inOut'
    });

    // 使用 GSAP 动画 .section-notice .card-blur .card-content 元素
    gsap.to('.section-notice .card-blur .card-content', {
      scrollTrigger: {
        trigger: '.section-notice',
        start: 'top 65px',
        end: 'center 100%',
        scrub: 0
      },
      filter: 'blur(0px)',
      scale: 1,
      ease: 'back.inOut'
    });

    gsap.to('.section-notice .card-offset', {
      scrollTrigger: {
        trigger: '.section-notice',
        start: 'center center',
        end: 'bottom bottom',
        scrub: 0
      },
      x: -offsetLeft,
      ease: 'none'
    });
  });

  return (
    <section className="section-notice">
      <div className="section-wrapper">
        <div className="sticky-content" ref={stickyContentRef}>
          <div className="card card-offset">
            <div className="card-content">
              <div className="cover-info">
                <h2 className="title">
                  重要不错过
                  <br />
                  重在不打扰
                </h2>
                <p className="intro">
                  直接在当前使用的荣耀设备上，
                  <br />
                  支持定制查看和回复所有手机通知消息。
                  <br />
                  重要信息不容错过，专注工作不被打扰。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-notice/s1-01.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur">
            <div className="card-content">
              <div className="cover-info">
                <h2 className="title">
                  来电不漏接
                  <br />
                  思考不中断
                </h2>
                <p className="intro">
                  在当前使用的荣耀设备上接打电话，
                  <br />
                  让重要来电不漏接，专注效率不中断。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-notice/s1-02.jpg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNotice;
