import tw, { styled } from 'twin.macro'

interface Props {
  isBlack?: boolean
}

const Element = styled.span`
  ${tw`
block border-solid border-r-[1px] border-b-[1px]
transform translate-x-[-15%] translate-y-[-25%] skew-x-[45deg]
sp:(w-[calc(24/750*100vw)] h-[calc(8/750*100vw)])
md:(w-[12px] h-[4px])
`}
`
// eslint-disable-next-line react/prop-types
export const RightArrow: React.FC<Props> = ({ isBlack }) => {
  const borderColor = isBlack
    ? 'border-transparentBlack'
    : 'border-transparentWhite'

  return <Element className={borderColor} />
}
export default RightArrow
