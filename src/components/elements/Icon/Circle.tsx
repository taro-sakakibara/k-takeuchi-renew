import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element
  isBlack?: boolean
}

const Wrapper = styled.div`
  ${tw`
flex items-center justify-center
rounded-[50%] border-solid border-[1px]
sp:(w-[calc(60/750*100vw)] h-[calc(60/750*100vw)])
md:(w-[30px] h-[30px])
`}
`
// eslint-disable-next-line react/prop-types
export const Circle: React.VFC<Props> = ({ children, isBlack }) => {
  const borderColor = isBlack
    ? 'border-transparentBlack'
    : 'border-transparentWhite'

  return <Wrapper className={borderColor}>{children}</Wrapper>
}
export default Circle
