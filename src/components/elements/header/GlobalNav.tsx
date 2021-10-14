import tw, { styled } from 'twin.macro'
import Scroll from 'react-scroll'
// import { Scroll } from 'react-scroll'

const ListWrapper = styled.ul`
  ${tw`
flex justify-between right-0
md:(
	absolute bg-white py-[40px]
	)
sp:(
	w-[calc(690/750*100vw)]
	fixed flex-col h-[100vh] bg-deepGray opacity-[96%]
	pt-[23vh] pr-[4.6vw] pb-[20vh]
	z-top
)
`}
`

const ListItem = styled.div`
  ${tw`
font-en
md:(text-baseSize text-base)
sp:(text-large text-white text-right ml-auto)
`}
`
export const GlobalNav: React.FC = () => {
  const text = [
    { title: 'Concept', scrollTo: 'concept' },
    { title: 'FAQ', scrollTo: 'faq' },
    { title: 'Corse', scrollTo: 'corse' },
    { title: 'Instructor', scrollTo: 'instructor' },
    { title: 'Contact', scrollTo: 'contact' },
  ]

  const items = text.map((v, i) => (
    <ListItem key={i}>
      <Scroll.Link to={v.scrollTo} smooth={true}>
        {v.title}
      </Scroll.Link>
    </ListItem>
  ))

  return <ListWrapper>{items}</ListWrapper>
}
export default GlobalNav
