import tw, { styled } from 'twin.macro'

export interface Props {
  textVertical: boolean
}
const Text = styled.div`
  ${tw`
text-small opacity-50 font-en
`}
`

export const CopyRight: React.FC<Props> = (textVertical) => {
  const vertical = textVertical
    ? 'writing-mode-vertical-lr transform rotate-180'
    : 'writing-mode-horizontal-tb'

  return (
    <Text className={vertical}>Copyright &copy; 2020 Katsuya Takeuchi</Text>
  )
}

export default CopyRight
