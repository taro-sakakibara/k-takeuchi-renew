import tw, { styled } from 'twin.macro'

interface Props {
  isBlack?: boolean
  isVertical?: boolean
}

const Element = styled.span`
  ${tw`
block border-solid border-r-[1px] border-b-[1px]
sp:(w-[calc(24/750*100vw)] h-[calc(8/750*100vw)])
md:(w-[12px] h-[4px])
`}
`
// eslint-disable-next-line react/prop-types
export const Arrow: React.FC<Props> = ({ isBlack, isVertical }) => {
  const borderColor = isBlack
    ? 'border-transparentBlack'
    : 'border-transparentWhite'
  const arrowDirection = isVertical
    ? 'transform translate-x-[-10%] translate-y-[35%] rotate-[-90deg] skew-x-[45deg]'
    : 'transform translate-x-[-15%] translate-y-[-25%] skew-x-[45deg]'
  const classNames = [borderColor, arrowDirection]

  return <Element className={classNames.join(' ')} />
}
export default Arrow
