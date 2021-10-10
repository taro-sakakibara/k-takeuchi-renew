import tw, { styled } from 'twin.macro'

const Item = styled.div`
  ${tw`
relative inline-block h-[calc(120/750*100vw)] w-[2px] bg-black
before:(
	absolute top-0 left-[1px] h-[calc(14/750*100vw)] w-[calc(14/750*100vw)] rounded-[50%]
	bg-black transform -translate-x-1/2 -translate-y-1/2
	// animationはtailwind.config内に記述
	animate-downPointer
)
`}
`

export const ScrollDown: React.FC = () => {
  return <Item />
}

export default ScrollDown
