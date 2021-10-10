import tw, { styled } from 'twin.macro'

const Item = styled.div`
  ${tw`
relative inline-block w-[2px] bg-black

sp:h-[calc(120/750*100vw)]
md:h-[60px]

before:(
	absolute left-[1px] rounded-[50%]
	bg-black transform -translate-x-1/2 -translate-y-1/2
	// animationはtailwind.config内に記述
	animate-downPointer
	sp:(h-[calc(14/750*100vw)] w-[calc(14/750*100vw)] bottom-[calc(14/750*100vw)])
	md:(h-[7px] w-[7px] bottom-[60px])
)
`}
`

export const ScrollDown: React.FC = () => {
  return <Item />
}

export default ScrollDown
