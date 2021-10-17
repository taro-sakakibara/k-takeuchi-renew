import tw, { styled } from 'twin.macro'

interface Props {
  isVertical?: boolean
}
const Text = styled.p`
  ${tw`
	// font-enが当たらない。。
text-small opacity-50 font-en
`}
`

export const CopyRight: React.FC<Props> = (isVertical) => {
  const vertical = isVertical
    ? // rotate-180がなんか微妙。。
      'writing-mode-vertical-lr transform rotate-180'
    : 'writing-mode-horizontal-tb'

  return (
    <Text className={vertical}>Copyright &copy; 2020 Katsuya Takeuchi</Text>
  )
}

export default CopyRight
