'use client';

import styles from './HeroSection.module.css';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax and 3D effects on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      
      heroRef.current.style.transform = `translateY(${parallax}px)`;
    };

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    window.addEventListener('scroll', handleScroll);
    createParticles();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      {/* Advanced Background Effects */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationShape1}></div>
        <div className={styles.decorationShape2}></div>
        <div className={styles.decorationShape3}></div>
        <div className={styles.neonGrid}></div>
        <div ref={particlesRef} className={styles.particles}></div>
      </div>
      
      {/* Floating Glass Card */}
      <div className={styles.floatingCard}>
        <div className={styles.cardGlow}></div>
        <div className={styles.cardContent}>
          <div className={styles.hologramEffect}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title} ${styles.titleGradient}`}>
            <span className={styles.titleWord}>専門知識が</span>
            <span className={styles.titleWordGlow}>自動で売れる。</span>
          </h1>
          <div className={styles.titleShadow}>専門知識が自動で売れる。</div>
        </div>
        
        <p className={styles.subtitle}>
          あなたの専門性を24時間働き続けるデジタル資産に変換。<br />
          オートウェビナーで構築する、次世代マーケティング自動化の世界。
        </p>
        
        {/* Morphing CTA Buttons */}
        <div className={styles.ctaContainer}>
          <div className={styles.buttonWrapper}>
            <a 
              href="https://utage-system.com/p/EcESO02xLLoK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              <span className={styles.buttonText}>無料相談を開始する</span>
              <div className={styles.buttonRipple}></div>
              <div className={styles.buttonGlow}></div>
            </a>
          </div>
          
          <div className={styles.buttonWrapper}>
            <a 
              href="#features"
              className={styles.secondaryButton}
            >
              <span className={styles.buttonText}>詳細を見る</span>
              <div className={styles.buttonHologram}></div>
            </a>
          </div>
        </div>
        
        {/* 3D Interactive Demo */}
        <div className={styles.demoArea}>
          <div className={styles.demoContainer}>
            <div className={styles.demoGlass}>
              <div className={styles.demoHologram}>
                <div className={styles.hologramLines}></div>
                <div className={styles.hologramCircles}></div>
                <div className={styles.demoText}>オートウェビナー システムデモ</div>
              </div>
              <div className={styles.demoReflection}></div>
            </div>
            <div className={styles.demo3d}>
              <div className={styles.cube}>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollOrb}>
          <div className={styles.scrollCore}></div>
          <div className={styles.scrollRings}>
            <div className={styles.scrollRing}></div>
            <div className={styles.scrollRing}></div>
            <div className={styles.scrollRing}></div>
          </div>
        </div>
        <p className={styles.scrollText}>SCROLL TO EXPLORE</p>
        <div className={styles.scrollTrail}></div>
      </div>
    </section>
  );
}