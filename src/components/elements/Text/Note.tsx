import tw, { styled } from 'twin.macro'

interface Props {
  text: string
  as?: React.ElementType
}

const Text = styled.div`
  ${tw`
indent-1 pl-indent1 text-baseSize leading-[calc(80/32)]
`}
  ::before {
    content: '※';
  }
`
// eslint-disable-next-line react/prop-types
export const Note: React.FC<Props> = ({ text, as }) => {
  return <Text as={as}>{text}</Text>
}
export default Note
