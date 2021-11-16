import tw, { styled } from 'twin.macro'
import Scroll from 'react-scroll'
import { useState } from 'react'
import { useMedia } from 'use-media'

// global nav
const NavWrapper = styled.nav<{ isOpen: boolean }>`
  ${tw`
right-0 text-right

md:( bg-white pr-[35px])
sp:(
	w-[calc(690/750*100vw)]
	fixed h-[100vh] bg-deepGray
	z-gNav1 transition-[all 0.1s ease-in-out]
)
`}
  @media (max-width: 768px) {
    right: ${({ isOpen }) => (isOpen ? '0' : 'calc(-690/750*100vw)')};
    opacity: ${({ isOpen }) => (isOpen ? '96%' : '0')};
  }
`

const ListWrapper = styled.ul`
  ${tw`
inline-flex h-full

md:(py-[40px])
sp:(flex-col justify-center pr-[4.6vw] space-y-[60px])
`}
`

const ListItem = styled.li`
  ${tw`
font-en
md:(text-baseSize text-base ml-[65px] first:ml-0)
sp:(text-[2.4rem] text-white text-right)
`}
`

// hamburger
const HamburgerWrapper = styled.button`
  ${tw`
fixed top-[25px] right-[25px] inline-block w-[55px] h-[12px]
cursor-pointer z-gNav2
`}
`

const HamburgerLine = styled.span<{ isOpen: boolean }>`
  ${tw`
	flex flex-col justify-between w-[55px] h-[12px]

	before:(block h-[1px] bg-white transition-[all 0.1s ease-in-out])
	after:(block h-[1px] bg-white transition-[all 0.1s ease-in-out])
	`}
  @media (max-width: 768px) {
    :before {
      transform: ${({ isOpen }) => isOpen && 'translateY(5px) rotate(30deg)'};
    }
    :after {
      transform: ${({ isOpen }) => isOpen && 'translateY(-5px) rotate(-30deg)'};
    }
  }
`

const text = [
  { title: 'Concept', scrollTo: 'concept' },
  { title: 'Lesson', scrollTo: 'lesson' },
  { title: 'FAQ', scrollTo: 'faq', offset: 280 },
  { title: 'Corse', scrollTo: 'corse' },
  { title: 'Instructor', scrollTo: 'instructor' },
  { title: 'Contact', scrollTo: 'contact' },
]

export const GlobalNav: React.FC = () => {
  const isWide = useMedia({ minWidth: '769px' })
  const [isOpen, setIsOpen] = useState(isWide ? true : false)

  return (
    <>
      <NavWrapper isOpen={isOpen}>
        <ListWrapper>
          {text.map((v, i) => (
            <ListItem key={i}>
              {v.offset ? (
                <Scroll.Link
                  to={v.scrollTo}
                  smooth={true}
                  offset={v.offset}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {v.title}
                </Scroll.Link>
              ) : (
                <Scroll.Link
                  to={v.scrollTo}
                  smooth={true}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {v.title}
                </Scroll.Link>
              )}
            </ListItem>
          ))}
        </ListWrapper>
      </NavWrapper>
      {isWide == false && (
        <HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
          <HamburgerLine isOpen={isOpen} />
        </HamburgerWrapper>
      )}
    </>
  )
}
export default GlobalNav
