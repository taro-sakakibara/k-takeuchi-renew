import { useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useMedia } from 'use-media'

interface Props {
  number: string
  title: string | JSX.Element
  bgGray?: boolean
  id?: string
}

const Wrapper = styled.h2`
  ${tw`
font-en inline-flex items-center leading-[1]

md:flex-col
`}
`

const Number = styled.span`
  ${tw`
block opacity-0

sp:text-[calc(54/750*100vw)]
md:text-[3.6rem]
`}
`

const Line = styled.span<{ bgGray?: boolean }>`
  ${tw`
block bg-black

sp:(w-[2px] h-[calc(40/750*100vw)] ml-[10px] mr-[20px] origin-top scale-y-0)
md:(w-[40px] h-[1px] mt-[10px] mb-[25px] origin-left scale-x-0)
`}
  background-color:${({ bgGray }) => (bgGray ? '#fff' : '#333')};
`

const Title = styled.p<{ bgGray?: boolean }>`
  ${tw`
text-h2
md:(writing-mode-vertical-lr transform rotate-180)
`}
  color:${({ bgGray }) => (bgGray ? '#666' : '#fff')};
`

// eslint-disable-next-line react/prop-types
export const Heading2: React.FC<Props> = ({ number, title, bgGray, id }) => {
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
          ? tl.to(`#${id} > p`, { textShadow: '0px 0px 1px white' }, 0)
          : tl.to(`#${id} > p`, { textShadow: '0px 0px 1px black' }, 0)
        bgGray
          ? tl.to(`#${id} > p`, { color: 'white' }, 1)
          : tl.to(`#${id} > p`, { color: 'black' }, 1)
        tl.to(`#${id} > p`, { textShadow: 'none', ease: 'power4.in' }, 1)
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
          ? tl.to(`#${id} > p`, { textShadow: '0px 0px 1px white' }, 0)
          : tl.to(`#${id} > p`, { textShadow: '0px 0px 1px black' }, 0)
        bgGray
          ? tl.to(`#${id} > p`, { color: 'white' }, 1)
          : tl.to(`#${id} > p`, { color: 'black' }, 1)
        tl.to(`#${id} > p`, { textShadow: 'none', ease: 'power4.in' }, 1)
        // prettier-ignore
        tl.to(`#${id} > #js-line`,{ transform: 'scaleY(1)', ease: 'power4.in' },1)
        tl.to(`#${id} > #js-number`, { opacity: '1', ease: 'power4.in' }, 1)
      }

  return (
    <Wrapper id={id}>
      <Number id="js-number">{number}</Number>
      <Line bgGray={bgGray} id="js-line" />
      <Title bgGray={bgGray}>{title}</Title>
    </Wrapper>
  )
}
export default Heading2
