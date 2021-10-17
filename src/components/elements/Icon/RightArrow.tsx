import tw, { styled } from 'twin.macro'

const Element = styled.span`
  ${tw`
block border-solid border-transparentWhite border-r-[1px] border-b-[1px]
transform translate-x-[-15%] translate-y-[-25%] skew-x-[45deg]
sp:(w-[calc(24/750*100vw)] h-[calc(8/750*100vw)])
md:(w-[12px] h-[4px])
`}
`

export const RightArrow: React.FC = () => {
  return <Element />
}
export default RightArrow
