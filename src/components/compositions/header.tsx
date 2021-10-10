import tw, { styled } from 'twin.macro'
import { ScrollDown, CopyRight } from '@/elements/index'
import { useMedia } from 'use-media'

// tag
const TagList = styled.ul`
  ${tw`
absolute bottom-[30px] left-[30px] z-[81]
`}
`

const TagItem = styled.div`
  ${tw`
flex items-center bg-black text-[calc((28 / 750) * 100vw)] text-white py-[10px] px-[8px] mt-[calc((27 / 750) * 100vw)]
before:(block h-[4vw] w-[4vw] bg-hashtag bg-cover mr-[8px])
`}
`

// main
const HeaderWrapper = styled.header`
  ${tw`
relative h-[100vh]
`}
`

const Inner = styled.div`
  ${tw`
relative z-0 w-full h-full
`}
`

const HeadingWrapper = styled.div`
  ${tw`
absolute top-[38%] left-[50%] w-[fit-content] transform -translate-x-1/2 -translate-y-1/2 z-[80]
`}
`

const Heading = styled.h1`
  ${tw`
flex flex-col items-start
`}
`

const HeadingSvg = styled.span`
  ${tw`block w-[calc(440/750*100vw)]`}
`

const HeadingText = styled.span`
  ${tw`
block text-h1 font-bold
`}
`

const HeaderBg = styled.div`
  ${tw`
absolute left-0 top-0 w-full h-full z-[79] bg-center bg-cover bg-mv
`}
`

const ScrollDownWrapper = styled.div`
  ${tw`
absolute right-[10px] bottom-[50px] text-center
`}
`

export const Header: React.FC = () => {
  const isWide = useMedia({ minWidth: '769px' })

  return (
    <HeaderWrapper>
      <Inner>
        <HeadingWrapper>
          <Heading>
            <HeadingSvg>
              <img src="/header01.svg" />
            </HeadingSvg>
            <HeadingText>
              プライベート
              <br />
              ギターレッスン。
            </HeadingText>
          </Heading>
        </HeadingWrapper>
        <HeaderBg />
      </Inner>
      <TagList>
        <TagItem>現役ミュージシャンが担当。</TagItem>
        <TagItem>全国展開の大手音楽教室経験。</TagItem>
        <TagItem>100名以上の指導経験。</TagItem>
      </TagList>
      <ScrollDownWrapper>
        {isWide ? (
          <>
            <CopyRight textVertical />
            <ScrollDown />
          </>
        ) : (
          <ScrollDown />
        )}
      </ScrollDownWrapper>
    </HeaderWrapper>
  )
}

export default Header
