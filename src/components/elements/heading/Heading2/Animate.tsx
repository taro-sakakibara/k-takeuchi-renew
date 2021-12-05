import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useMedia } from 'use-media'

export function Heading2Animation(id?: string, bgGray?: boolean) {
  const isMobile = useMedia({ maxWidth: '768px' })

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation(id, bgGray)
    }
  }, [])

  const setAnimation = isMobile
    ? (id: any, bgGray: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `#${id}`,
            toggleActions: 'play none none none',
          },
        })
        bgGray
          ? tl.to(`#${id} > svg > text`, { stroke: 'white' }, 0)
          : tl.to(`#${id} > svg > text`, { stroke: 'black' }, 0)
        bgGray
          ? tl.to(`#${id} > svg > text`, { fill: 'white' }, 1)
          : tl.to(`#${id} > svg > text`, { fill: 'black' }, 1)
        // prettier-ignore
        tl.to(`#${id} > #js-line`,{ transform: 'scaleX(1)', ease: 'power4.in' },1)
        tl.to(`#${id} > #js-number`, { opacity: '1', ease: 'power4.in' }, 1)
      }
    : (id: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `#${id}`,
            toggleActions: 'play none none none',
          },
        })
        bgGray
          ? tl.to(`#${id} > svg > text`, { stroke: 'white' }, 0)
          : tl.to(`#${id} > svg > text`, { stroke: 'black' }, 0)
        bgGray
          ? tl.to(`#${id} > svg > text`, { fill: 'white' }, 1)
          : tl.to(`#${id} > svg > text`, { fill: 'black' }, 1)
        tl.to(`#${id} > p`, { textShadow: 'none', ease: 'power4.in' }, 1)
        // prettier-ignore
        tl.to(`#${id} > #js-line`,{ transform: 'scaleY(1)', ease: 'power4.in' },1)
        tl.to(`#${id} > #js-number`, { opacity: '1', ease: 'power4.in' }, 1)
      }
}
