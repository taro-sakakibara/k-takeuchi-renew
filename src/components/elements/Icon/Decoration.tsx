import tw, { styled } from 'twin.macro'

interface Props {
  number: number
}

const Icon1 = styled.span`
  ${tw`
	absolute bg-cover transform -translate-x-1/2 left-1/2 bottom-0

	sp:(w-[calc(700/750*100vw)] h-[calc(195/750*100vw)])
	md:(w-[1000px] h-[200px])
`}
  background-image: url(/decoration_01.png);
  @media (min-width: 769px) {
    background-image: url(/decoration_01_pc.png);
  }
`
const Icon2 = styled.span`
  ${tw`
	absolute bg-cover transform -translate-x-1/2
	sp:(w-[calc(90/750*100vw)] h-[calc(75/750*100vw)] right-0)
	md:(w-[65px] h-[70px] right-[-145px] top-[15px])
`}
  background-image: url(/decoration_02.png);
  @media (min-width: 769px) {
    background-image: url(/decoration_02_pc.png);
  }
`
const Icon3 = styled.span`
  ${tw`
	sp:(absolute bg-cover transform -translate-x-1/2 left-1/2)
	sp:(w-[calc(90/750*100vw)] h-[calc(100/750*100vw)])
`}
  background-image: url(/decoration_03.png);
`
const Icon4 = styled.span`
  ${tw`
	absolute bg-cover transform
	sp:(w-[calc(460/750*100vw)] h-[calc(170/750*100vw)] left-0 bottom-[calc(-250/750*100vw)])
	md:(w-[370px] h-[140px] top-[210px] left-[-240px])
`}
  background-image: url(/decoration_04.png);
  // @media (min-width: 769px) {
  //   background-image: url(/decoration_02_pc.png);
  // }
`
// eslint-disable-next-line react/prop-types
export const Decoration: React.FC<Props> = ({ number }) => {
  switch (number) {
    case 1:
      return <Icon1 />
    case 2:
      return <Icon2 />
    case 3:
      return <Icon3 />
    case 4:
      return <Icon4 />
    default:
      return <Icon1 />
  }
}
export default Decoration
