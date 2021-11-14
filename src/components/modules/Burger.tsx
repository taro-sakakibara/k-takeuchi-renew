import tw, { styled } from 'twin.macro'
import { Dispatch, SetStateAction } from 'react'

export interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const HamburgerWrapper = styled.button<{ isOpen: boolean }>`
  ${tw`
absolute  top-[25px] right-[25px] inline-block w-[55px] h-[12px]
cursor-pointer z-[112] transition-[all 0.1s ease-in-out]
`}
  background-color: ${(isOpen) => (isOpen ? 'black' : 'white')}
`

const HamburgerLine = styled.span`
  ${tw`
	flex flex-col justify-between w-[55px] h-[12px] transition-none
	before:(block h-[1px] bg-white)
	after:(block h-[1px] bg-white)
	`}
`
// eslint-disable-next-line react/prop-types
export const Burger: React.FC<Props> = ({ setIsOpen, isOpen }) => {
  return (
    <HamburgerWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <HamburgerLine />
    </HamburgerWrapper>
  )
}

export default Burger
