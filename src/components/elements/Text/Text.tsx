import tw, { styled } from 'twin.macro'

interface Props {
  text: string | JSX.Element
}

const Wrapper = styled.p`
  ${tw`
text-baseSize leading-[2.3]
`}
`
// eslint-disable-next-line react/prop-types
export const Text: React.FC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}
export default Text
