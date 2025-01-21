import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-device.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTvc(): React.ReactElement {
  // 使用GSAP动画库和ScrollTrigger插件来创建滚动触发的动画效果
  useGSAP(() => {
    // 创建一个ScrollTrigger实例，用于控制动画的触发
    ScrollTrigger.create({
      // 指定触发元素的选择器
      trigger: '.section-device',
      // 定义动画开始的条件，当元素顶部进入视口85%高度时开始动画
      start: 'top 85%',
      // 在ScrollTrigger激活状态改变时调用的函数
      onToggle: ({ isActive }) => {
        // 如果ScrollTrigger不处于激活状态，则不执行任何操作
        if (!isActive) {
          return;
        }

        // 创建一个GSAP时间线实例，用于编排动画
        const timeline = gsap.timeline();

        // 以下代码定义了时间线上的各个动画

        // 对标题进行从下到上的淡入动画
        timeline.fromTo(
          '.section-device .title', // 选择器
          { y: 50, opacity: 0 }, // 动画开始时的样式
          { y: 0, opacity: 1, duration: 0.5 } // 动画结束时的样式和持续时间
        );
        // 对介绍文本进行从下到上的淡入动画
        timeline.fromTo(
          '.section-device .intro',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );

        // 对PC图片进行淡入动画
        timeline.fromTo(
          '.section-device .pc',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0
        );
        // 对iPad图片进行淡入动画，比PC图片延迟0.5秒开始
        timeline.fromTo(
          '.section-device .ipad',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.5
        );
        // 对手机图片进行淡入动画，比iPad图片再延迟0.5秒开始，即总共延迟1秒开始
        timeline.fromTo(
          '.section-device .mobile',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          1
        );
      }
    });
  });

  return (
    <section className="section-device">
      <div className="section-wrapper">
        <div className="image-info">
          <h2 className="title">
            多端同步
            <br />
            随处可见
          </h2>
          <p className="intro">
            首发电脑版荣耀笔记，帮你更高效的笔记整理，更快速的笔记编辑。在荣耀手机、平板、电脑设备上，随时随处查看修改笔记。
          </p>
        </div>
        <div className="image-content">
          <img
            className="pc"
            src={getImageUrl('assets/section-device/s3-01.png')}
            alt=""
          />
          <img
            className="ipad"
            src={getImageUrl('assets/section-device/s3-02.png')}
            alt=""
          />
          <img
            className="mobile"
            src={getImageUrl('assets/section-device/s3-03.png')}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTvc;
