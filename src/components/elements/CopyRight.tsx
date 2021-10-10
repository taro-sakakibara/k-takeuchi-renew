import tw, { styled } from 'twin.macro'

interface Props {
  textVertical: boolean
}
const Text = styled.p`
  ${tw`
	// font-enが当たらない。。
text-small opacity-50 font-en
`}
`

export const CopyRight: React.FC<Props> = (textVertical) => {
  const vertical = textVertical
    ? // rotate-180がなんか微妙。。
      'writing-mode-vertical-lr transform rotate-180'
    : 'writing-mode-horizontal-tb'

  return (
    <Text className={vertical}>Copyright &copy; 2020 Katsuya Takeuchi</Text>
  )
}

export default CopyRight
