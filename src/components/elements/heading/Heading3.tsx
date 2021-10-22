import tw, { styled } from 'twin.macro'

interface Props {
  title: string | JSX.Element
  marginBottom?: boolean
}

const Text = styled.h3<{ marginBottom?: boolean }>`
  ${tw`
text-h3
`}
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '40px' : '')};
`

// eslint-disable-next-line react/prop-types
export const Heading3: React.FC<Props> = ({ title, marginBottom }) => {
  return <Text marginBottom={marginBottom}>{title}</Text>
}
export default Heading3
