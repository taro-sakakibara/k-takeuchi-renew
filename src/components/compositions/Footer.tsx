import { Arrow, Circle, CopyRight } from '@/elements/index'
import { Layout } from '@/templates/index'
import { animateScroll as Scroll } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Wrapper = styled.footer`
  ${tw`
bg-deepGray
sp:(pb-[calc(120/750*100vw)] pt-[calc(40/750*100vw)])
md:(pb-[70px] pt-[30px])
`}
`

const ButtonWrapper = styled.a`
  ${tw`
absolute

sp:(right-[30px] bottom-[60px])
md:(right-[70px] bottom-[70px])
`}
`

const scrollUp = () => {
  Scroll.scrollToTop()
}

export const Footer: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Layout.Inner>
          <>
            <CopyRight isWhite />
            <ButtonWrapper onClick={scrollUp}>
              <Circle isLarge>
                <Arrow isVertical isLarge />
              </Circle>
            </ButtonWrapper>
          </>
        </Layout.Inner>
      </Wrapper>
    </>
  )
}

export default Footer
