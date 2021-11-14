import tw, { styled } from 'twin.macro'
import { ScrollDown, CopyRight, Item, GlobalNav } from '@/elements/index'
import { useMedia } from 'use-media'
import Scroll from 'react-scroll'

const ScrollDownWrapper = styled.div`
  ${tw`
absolute right-[10px] bottom-[50px]
md:(flex flex-col justify-between items-center h-[465px] right-[35px] bottom-[-60px])
`}
`

export const Header: React.FC = () => {
  const isWide = useMedia({ minWidth: '769px' })

  return (
    <>
      <Item.Wrapper>
        <GlobalNav />
        <Item.Inner>
          <Item.HeadingWrapper>
            <Item.HeadingContainer>
              <Item.HeadingSvg>
                <img src="/header01.svg" />
              </Item.HeadingSvg>
              <Item.HeadingText>
                プライベート
                <br className="md:hidden" />
                ギターレッスン。
              </Item.HeadingText>
            </Item.HeadingContainer>
          </Item.HeadingWrapper>
          <Item.BgContainer />
          <Item.TagList>
            <Item.TagItem>現役ミュージシャンが担当。</Item.TagItem>
            <Item.TagItem>全国展開の大手音楽教室経験。</Item.TagItem>
            <Item.TagItem>100名以上の指導経験。</Item.TagItem>
          </Item.TagList>
        </Item.Inner>
        <ScrollDownWrapper>
          {isWide ? (
            <>
              <CopyRight isVertical />
              <ScrollDown />
            </>
          ) : (
            <ScrollDown />
          )}
        </ScrollDownWrapper>
      </Item.Wrapper>
      <Scroll.Element
        className="w-[100px] h-[100px] bg-black mt-[300px]"
        name="concept"
      ></Scroll.Element>
    </>
  )
}

export default Header
