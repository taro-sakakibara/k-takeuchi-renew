import tw, { styled } from 'twin.macro'
import { Circle, RightArrow } from '@/elements/index'

interface Props {
  text: string
  href: string
}

const Wrapper = styled.div`
  ${tw`
bg-lightGray rounded-[5px] transition-colors

sp:(w-[calc(690/750*100vw)])
md:(w-[300px])

hover:(bg-deepGray)
`}
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
export const ContactButton: React.FC<Props> = ({ text, href }) => {
  return (
    <Wrapper>
      <Inner href={href}>
        <Circle>
          <RightArrow />
        </Circle>
        <Text>{text}</Text>
      </Inner>
    </Wrapper>
  )
}
export default ContactButton
