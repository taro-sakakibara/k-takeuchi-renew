import tw, { styled } from 'twin.macro'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

const Wrapper = styled.div`
  ${tw`
absolute transform -translate-y-1/2 right-0 top-0

sp:(-translate-y-1/2 right-0 top-0)
md:(-translate-y-1/2 right-0 top-0)
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
  background-image: url('parallax_img02.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ParallaxTop: React.FC = () => {
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  const setAnimation = () => {
    gsap.to('#parallax-top-animate', {
      bottom: '-33%',
      scrollTrigger: {
        trigger: '#parallax-top-trigger',
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    })
  }
  return (
    <Wrapper id="parallax-top-trigger">
      <Container>
        <AnimateContainer id="parallax-top-animate" />
      </Container>
    </Wrapper>
  )
}
export default ParallaxTop
