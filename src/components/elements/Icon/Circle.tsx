import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element
}

const Wrapper = styled.div`
  ${tw`
flex items-center justify-center
rounded-[50%] border-solid border-[1px] border-transparentWhite
sp:(w-[calc(60/750*100vw)] h-[calc(60/750*100vw)])
md:(w-[30px] h-[30px])
`}
`
// eslint-disable-next-line react/prop-types
export const Circle: React.VFC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
export default Circle
