import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-connect.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  title: string[];
  intro: string[];
  videoURL: string;
};
/**
 * SectionConnect 组件用于创建一个带有视频的连接部分，并应用动画效果。
 * 该组件使用 GSAP 和 ScrollTrigger 来控制视频信息和视频的显示与隐藏。
 *
 * @param props 组件的属性对象，包含标题、介绍和视频URL。
 * @returns 返回一个带有视频的连接部分的 React 组件。
 */
export default function SectionConnect(props: Props): React.ReactElement {
  // 初始化 refs 用于引用 HTML 元素。
  const connectRef = useRef<HTMLDivElement | null>(null);
  const videoInfoRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 使用 useGSAP 钩子来创建动画效果。
  useGSAP(() => {
    // 创建第一个 ScrollTrigger，用于控制视频信息的显示与隐藏。
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: 'top 70%',
      onToggle: ({ isActive }) => {
        console.log('isActive', isActive, 35);

        // 当视频信息不再激活时，将其隐藏。
        if (!isActive) {
          gsap.to(videoInfoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5
          });
          return;
        }

        // 当视频信息激活时，将其显示。
        gsap.fromTo(
          videoInfoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });

    // 创建第二个 ScrollTrigger，用于控制视频的显示与隐藏。
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: 'top center',
      onToggle: ({ isActive }) => {
        // 当视频不再激活时，将其隐藏。
        if (!isActive) {
          gsap.to(videoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5
          });
          return;
        }

        // 当视频激活时，将其显示。
        gsap.fromTo(
          videoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });
  });

  // 渲染组件。
  return (
    <section className="section-connect" ref={connectRef}>
      <div className="section-wrapper">
        // 视频信息部分，包含标题和介绍。
        <div className="video-info" ref={videoInfoRef}>
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: props.title?.join?.('<br />') }}
          ></h2>
          <h2
            className="intro"
            dangerouslySetInnerHTML={{ __html: props.intro?.join?.('<br />') }}
          ></h2>
        </div>
        // 视频部分，自动播放、循环、静音。
        <video className="video" autoPlay playsInline loop muted ref={videoRef}>
          <source src={getImageUrl(props.videoURL)} />
        </video>
      </div>
    </section>
  );
}
