import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export function reverseBgColorAnimation01() {
  const setAnimation = () => {
    gsap.to('#reverse-bg-color-section01', {
      backgroundColor: '#666',
      ease: 'power4.in',
      delay: '0.05',
      scrollTrigger: {
        trigger: '#reverse-bg-color-section01',
        toggleActions: 'play reverse play reverse',
        start: 'top-=40%',
        end: 'bottom-=30%',
        // markers: true,
      },
    })
  }

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])
}

export function reverseBgColorAnimation02() {
  const setAnimation = () => {
    gsap.to('#reverse-bg-color-section02', {
      backgroundColor: '#666',
      ease: 'power4.in',
      delay: '0.05',
      scrollTrigger: {
        trigger: '#reverse-bg-color-section02',
        toggleActions: 'play reverse play reverse',
        start: 'top-=40%',
        end: 'bottom-=30%',
      },
    })
  }

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])
}
