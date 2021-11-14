import tw, { styled } from 'twin.macro'

interface Props {
  isVertical?: boolean
  isWhite?: boolean
}
const Text = styled.p<{ isWhite?: boolean }>`
  ${tw`
text-small opacity-50 font-en
`}
  color: ${({ isWhite }) => isWhite && '#fff'}
`

// eslint-disable-next-line react/prop-types
export const CopyRight: React.FC<Props> = ({ isVertical, isWhite }) => {
  const vertical = isVertical
    ? 'writing-mode-vertical-lr transform rotate-180'
    : 'writing-mode-horizontal-tb'

  return (
    <Text isWhite={isWhite} className={vertical}>
      Copyright &copy; 2020 Katsuya Takeuchi
    </Text>
  )
}

export default CopyRight
