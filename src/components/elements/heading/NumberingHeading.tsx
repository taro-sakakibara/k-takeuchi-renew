import tw, { styled } from 'twin.macro'

interface Props {
  title: string | JSX.Element
}

const Text = styled.span`
  ${tw`
	font-en text-h2 leading-[1] flex items-center

	after:(
		bg-black ml-[10px] block
		sp:(w-[calc(80/750*100vw)] h-[2px])
		md:(w-[60px] h-[1px])
	)
`}
`

// eslint-disable-next-line react/prop-types
export const NumberingHeading: React.FC<Props> = ({ title }) => {
  return <Text>{title}</Text>
}
export default NumberingHeading
