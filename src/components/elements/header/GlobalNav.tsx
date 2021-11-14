import tw, { styled } from 'twin.macro'
import Scroll from 'react-scroll'
// import { Scroll } from 'react-scroll'

const NavWrapper = styled.nav`
  ${tw`
right-0 text-right
md:(
	 bg-white pr-[35px]
	)
sp:(
	w-[calc(690/750*100vw)]
	fixed h-[100vh] bg-deepGray opacity-[96%]
	z-top
)
`}
`

const ListWrapper = styled.ul`
  ${tw`
inline-flex h-full
md:(
	py-[40px]
	)
sp:(
	flex-col justify-center pr-[4.6vw]
)
`}
`

const ListItem = styled.li`
  ${tw`
font-en
md:(text-baseSize text-base ml-[65px] first:ml-0)
sp:(text-large text-white text-right mt-[calc(120/750*100vw)] first:mt-0)
`}
`
export const GlobalNav: React.FC = () => {
  const text = [
    { title: 'Concept', scrollTo: 'concept' },
    { title: 'Lesson', scrollTo: 'lesson' },
    { title: 'FAQ', scrollTo: 'faq', offset: 280 },
    { title: 'Corse', scrollTo: 'corse' },
    { title: 'Instructor', scrollTo: 'instructor' },
    { title: 'Contact', scrollTo: 'contact' },
  ]

  const items = text.map((v, i) => (
    <ListItem key={i}>
      {v.offset ? (
        <Scroll.Link to={v.scrollTo} smooth={true} offset={v.offset}>
          {v.title}
        </Scroll.Link>
      ) : (
        <Scroll.Link to={v.scrollTo} smooth={true}>
          {v.title}
        </Scroll.Link>
      )}
    </ListItem>
  ))

  return (
    <NavWrapper>
      <ListWrapper>{items}</ListWrapper>
    </NavWrapper>
  )
}
export default GlobalNav
