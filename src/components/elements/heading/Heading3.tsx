import tw, { styled } from 'twin.macro'

interface Props {
  title: string | JSX.Element
}

const Text = styled.h3`
  ${tw`
text-h3
`}
`

// eslint-disable-next-line react/prop-types
export const Heading3: React.FC<Props> = ({ title }) => {
  return <Text>{title}</Text>
}
export default Heading3
