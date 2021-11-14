import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element
  isBlack?: boolean
  isLarge?: boolean
}

const Wrapper = styled.span<{ isLarge?: boolean }>`
  ${tw`
flex items-center justify-center
rounded-[50%] border-solid border-[1px]
`}
  width:${({ isLarge }) =>
    isLarge ? 'calc(80/750*100vw)' : 'calc(60/750*100vw)'};
  height: ${({ isLarge }) =>
    isLarge ? 'calc(80/750*100vw)' : 'calc(60/750*100vw)'};
  @media (min-width: 769px) {
    width: ${({ isLarge }) => (isLarge ? '40px' : '30px')};
    height: ${({ isLarge }) => (isLarge ? '40px' : '30px')};
  }
`
// eslint-disable-next-line react/prop-types
export const Circle: React.VFC<Props> = ({ children, isBlack, isLarge }) => {
  const borderColor = isBlack
    ? 'border-transparentBlack'
    : 'border-transparentWhite'

  return (
    <Wrapper className={borderColor} isLarge={isLarge}>
      {children}
    </Wrapper>
  )
}
export default Circle
