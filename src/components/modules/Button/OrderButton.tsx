/* eslint-disable react/prop-types */
import tw, { styled } from 'twin.macro'
import { Circle, Arrow, DottedText } from '@/elements/index'

interface Props {
  href: string
  number: string
  numberOfPrice: string
  text: string
}

const Wrapper = styled.div`
  ${tw`
bg-Gray rounded-[5px] transition-colors

sp:(w-[calc(690/750*100vw)])
md:(w-[340px])

hover:(bg-lightGray)
`}
`

const Inner = styled.a`
  ${tw`
flex items-center justify-between
sp:(py-[calc(50/750*100vw)] px-[calc(60/750*100vw)])
md:(py-[25px] px-[40px])
`}
`

const Numbering = styled.span`
  ${tw`
	border-b-2 border-solid
sp:(text-[calc(50/750*100vw)] )
md:(text-[2.4rem] )
`}
`

const PriceWrapper = styled.span`
  ${tw`
inline-block
`}
`

const Price = styled.span`
  ${tw`
font-bold
sp:(text-[calc(36/750*100vw)])
md:(text-[1.8rem])
`}
`

const PriceNumber = styled.span`
  ${tw`
font-bold
sp:(text-[calc(48/750*100vw)])
md:(text-[2.5rem])
`}
`

const Tax = styled.span`
  ${tw`
opacity-[50%]
sp:(text-[calc(24/750*100vw)])
md:(text-[1.4rem])
`}
`

export const OrderButton: React.FC<Props> = ({
  href,
  number,
  numberOfPrice,
  text,
}) => {
  return (
    <Wrapper>
      <Inner href={href}>
        <Numbering>{number}</Numbering>
        <div>
          <PriceWrapper>
            <Price>¥ </Price>
            <PriceNumber>{numberOfPrice}</PriceNumber>
            <Tax>（税込）</Tax>
          </PriceWrapper>
          <DottedText text={text} />
        </div>
        <Circle isBlack>
          <Arrow isBlack />
        </Circle>
      </Inner>
    </Wrapper>
  )
}
export default OrderButton
