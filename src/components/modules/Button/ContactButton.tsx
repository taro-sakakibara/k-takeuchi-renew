import tw, { styled } from 'twin.macro'
import { Circle, Arrow } from '@/elements/index'

interface Props {
  text: string
  href: string
  marginTop?: boolean
}

const Wrapper = styled.div<{ marginTop?: boolean }>`
  ${tw`
bg-lightGray rounded-[5px] transition-colors

sp:(w-[calc(690/750*100vw)])
md:(w-[300px])

hover:(bg-hoverGray)
`}
  margin-top: ${({ marginTop }) => (marginTop ? 'calc(60/750*100vw)' : '')};
  @media (min-width-769px) {
    margin-top: ${({ marginTop }) => (marginTop ? '30px' : '')};
  }
`

const Inner = styled.a`
  ${tw`
flex items-center
sp:(py-[calc(50/750*100vw)] px-[calc(40/750*100vw)])
md:(py-[25px] px-[30px])
`}
`

const Text = styled.span`
  ${tw`
block text-white text-baseSize
sp:ml-[10px]
md:ml-[20px]
`}
`

// eslint-disable-next-line react/prop-types
export const ContactButton: React.FC<Props> = ({ marginTop, text, href }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <Inner href={href}>
        <Circle>
          <Arrow />
        </Circle>
        <Text>{text}</Text>
      </Inner>
    </Wrapper>
  )
}
export default ContactButton
