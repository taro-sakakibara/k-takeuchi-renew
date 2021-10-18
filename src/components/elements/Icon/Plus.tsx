import tw, { styled } from 'twin.macro'

const Element = styled.span`
  ${tw`
relative
block h-[1px] bg-transparentBlack
sp:(w-[calc(24/750*100vw)])
md:(w-[12px])

after:(
	absolute top-[50%] left-[50%] transform -translate-x-1/2  -translate-y-1/2
	block w-[1px] bg-transparentBlack

	sp:(h-[calc(24/750*100vw)])
	md:(h-[12px])
)
`}
`
// eslint-disable-next-line react/prop-types
export const Plus: React.FC = () => {
  return <Element />
}
export default Plus
