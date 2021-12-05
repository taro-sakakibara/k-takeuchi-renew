import tw, { styled } from 'twin.macro'
import { renderTitle } from './TitleSvg'
import { Heading2Animation } from './Animate'

interface Props {
  number: string
  title: string
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

// eslint-disable-next-line react/prop-types
export const Heading2: React.FC<Props> = ({ number, title, bgGray, id }) => {
  Heading2Animation(id, bgGray)
  return (
    <Wrapper id={id}>
      <Number id="js-number">{number}</Number>
      <Line bgGray={bgGray} id="js-line" />
      {renderTitle(title)}
    </Wrapper>
  )
}
export default Heading2
