/* eslint-disable react/prop-types */
import tw, { styled } from 'twin.macro'
import { Circle, RightArrow } from '@/elements/index'

interface Props {
  href: string
  Number: string
  NumberOfPrice: string
  DetailText: string
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
flex items-center
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

const TextWrapper = styled.div`
  ${tw`
sp:ml-[calc(60/750*100vw)]
md:ml-[40px]
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

const Detail = styled.span`
  ${tw`
flex items-center

sp:(text-[calc(16/750*100vw)])
md:(text-[1.6rem])

before:(
	rounded-[50%] border-[1px]

	sp:(w-[calc(10/750*100vw)] h-[calc(10/750*100vw)] mr-[calc(14/750*100vw)])
	md:(w-[4px] h-[4px] mr-[8px])
)
`}
`

const IconWrapper = styled.span`
  ${tw`
sp:ml-[calc(123/750*100vw)]
md:ml-[26px]
`}
`

export const OrderButton: React.FC<Props> = ({
  href,
  Number,
  NumberOfPrice,
  DetailText,
}) => {
  return (
    <Wrapper>
      <Inner href={href}>
        <Numbering>{Number}</Numbering>
        <TextWrapper>
          <PriceWrapper>
            <Price>¥ </Price>
            <PriceNumber>{NumberOfPrice}</PriceNumber>
            <Tax>（税込）</Tax>
          </PriceWrapper>
          <Detail>{DetailText}</Detail>
        </TextWrapper>
        <IconWrapper>
          <Circle isBlack>
            <RightArrow isBlack />
          </Circle>
        </IconWrapper>
      </Inner>
    </Wrapper>
  )
}
export default OrderButton
