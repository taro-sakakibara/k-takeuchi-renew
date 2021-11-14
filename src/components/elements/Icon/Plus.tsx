import tw, { styled } from 'twin.macro'

interface Props {
  setActive?: boolean
}

const Element = styled.span<{ setActive?: boolean }>`
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
  ::after {
    transform: ${({ setActive }) =>
      setActive && 'translate(-50%,-50%) rotate(90deg)'};
    opacity: ${({ setActive }) => setActive && '0'};
  }
`
// eslint-disable-next-line react/prop-types
export const Plus: React.FC<Props> = ({ setActive }) => {
  return <Element setActive={setActive} />
}
export default Plus
