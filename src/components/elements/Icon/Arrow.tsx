import tw, { styled } from 'twin.macro'

interface Props {
  isBlack?: boolean
  isVertical?: boolean
  isLarge?: boolean
}

const Element = styled.span<{ isLarge?: boolean }>`
  ${tw`
block border-solid border-r-[1px] border-b-[1px]
`}
  width:${({ isLarge }) =>
    isLarge ? 'calc(36/750*100vw)' : 'calc(24/750*100vw)'};
  height: ${({ isLarge }) =>
    isLarge ? 'calc(14/750*100vw)' : 'calc(8/750*100vw)'};
  @media (min-width: 769px) {
    width: ${({ isLarge }) => (isLarge ? '18px' : '12px')};
    height: ${({ isLarge }) => (isLarge ? '7px' : '4px')};
  }
`
// eslint-disable-next-line react/prop-types
export const Arrow: React.FC<Props> = ({ isBlack, isVertical, isLarge }) => {
  const borderColor = isBlack
    ? 'border-transparentBlack'
    : 'border-transparentWhite'
  const arrowDirection = isVertical
    ? 'transform translate-x-[-10%] translate-y-[35%] rotate-[-90deg] skew-x-[45deg]'
    : 'transform translate-x-[-15%] translate-y-[-25%] skew-x-[45deg]'
  const classNames = [borderColor, arrowDirection]

  return <Element isLarge={isLarge} className={classNames.join(' ')} />
}
export default Arrow
