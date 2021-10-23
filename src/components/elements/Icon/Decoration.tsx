import tw, { styled } from 'twin.macro'

interface Props {
  number: number
}

const Icon = styled.span<Props>`
  ${tw`absolute bg-cover transform -translate-x-1/2 left-1/2 bottom-0
	sp:(w-[calc(700/750*100vw)] h-[calc(195/750*100vw)])
	md:(w-[1000px] h-[200px])
`}
  background-image: url(/decoration_01.png);
  @media (min-width: 769px) {
    background-image: url(/decoration_01_pc.png);
  }
`
// eslint-disable-next-line react/prop-types
export const Decoration: React.FC<Props> = ({ number }) => {
  switch (number) {
    case 1:
      return <Icon number={number} />
    default:
      return <Icon number={number} />
  }
}
export default Decoration
