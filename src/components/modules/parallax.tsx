import tw, { styled } from 'twin.macro'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import { useMedia } from 'use-media'

const Wrapper = styled.div`
  ${tw`
absolute transform

sp:(-translate-y-1/2 right-0 top-0)
md:(translate-y-1/2 right-0 bottom-0)
`}
`

const Container = styled.div`
  ${tw`
relative overflow-y-hidden

sp:(w-[calc(720/750*100vw)] h-[calc(300/750*100vw)])
md:(w-[calc(1200/1400*100vw)] h-[300px])
`}
`

const AnimateContainer = styled.div`
  ${tw`
absolute bottom-0

sp:(w-[calc(720/750*100vw)] h-[calc(400/750*100vw)])
md:(w-[calc(1200/1400*100vw)] h-[400px])
`}
  background-image: url('parallax_img01.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Parallax: React.FC = () => {
  const isMobile = useMedia({ maxWidth: '768px' })

  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation(isMobile)
    }
  }, [])

  const setAnimation = (isMobile: boolean) => {
    gsap.to('#parallax-animate', {
      bottom: `${isMobile ? 'calc(-100/750*100vw)' : '-100px'}`,
      scrollTrigger: {
        trigger: '#parallax-trigger',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    })
  }

  return (
    <Wrapper id="parallax-trigger">
      <Container>
        <AnimateContainer id="parallax-animate" />
      </Container>
    </Wrapper>
  )
}
export default Parallax
