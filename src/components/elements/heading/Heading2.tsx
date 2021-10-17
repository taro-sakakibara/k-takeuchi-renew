import tw, { styled } from 'twin.macro'

interface Props {
  number: string
  title: string
}

const Wrapper = styled.h2`
  ${tw`
font-en inline-flex items-center

md:flex-col
`}
`

const Number = styled.span`
  ${tw`
block

sp:text-[calc(54/750*100vw)]
md:text-[3.6rem]
`}
`

const Line = styled.span`
  ${tw`
block bg-black
sp:(w-[2px] h-[calc(40/750*100vw)] ml-[10px] mr-[20px])
md:(w-[40px] h-[1px] mb-[25px])
`}
`

const Title = styled.div`
  ${tw`
text-h2
md:(writing-mode-vertical-lr transform rotate-180)
`}
`

// ↓これよくわかっていない
// eslint-disable-next-line react/prop-types
export const Heading2: React.FC<Props> = ({ number, title }) => {
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Line />
      <Title>{title}</Title>
    </Wrapper>
  )
}
export default Heading2
