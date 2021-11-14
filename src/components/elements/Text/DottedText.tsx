import tw, { styled } from 'twin.macro'

interface Props {
  text: string
  as?: React.ElementType
}

const Text = styled.span`
  ${tw`
flex items-center text-baseSize

before:(
	rounded-[50%] border-[1px]

	sp:(w-[calc(10/750*100vw)] h-[calc(10/750*100vw)] mr-[calc(14/750*100vw)])
	md:(w-[4px] h-[4px] mr-[8px])
)
`}
`

// eslint-disable-next-line react/prop-types
export const DottedText: React.FC<Props> = ({ text, as }) => {
  return <Text as={as}>{text}</Text>
}
export default DottedText
