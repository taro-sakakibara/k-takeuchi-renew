import tw, { styled } from 'twin.macro'
import { ScrollDown, CopyRight } from '@/elements/index'
import { useMedia } from 'use-media'

// tag
const TagList = styled.ul`
  ${tw`
absolute z-header3

sp:(bottom-[30px] left-[30px])
md:(flex top-[570px] right-0)
`}
`

const TagItem = styled.li`
  ${tw`
inline-flex items-center bg-black text-white
py-[10px] px-[8px]

sp:(mt-[calc((27 / 750) * 100vw)] text-[calc((28 / 750) * 100vw)])
md:(text-h2 ml-[12px] first:ml-0)

before:(
	block bg-hashtag bg-cover mr-[8px]

	sp:(h-[4vw] w-[4vw])
	md:h-[1.6vw] w-[1.6vw]
	)
`}
`

// main
const HeaderWrapper = styled.header`
  ${tw`
relative h-[100vh]
md:max-h-[705px] max-w-[1400px] mx-auto
`}
`

const Inner = styled.div`
  ${tw`
relative h-full
z-header1

sp:w-full
md:w-[90%]
`}
`

const HeadingWrapper = styled.div`
  ${tw`
absolute w-[fit-content]
z-header3

sp:(top-[38%] left-[50%] transform -translate-x-1/2 -translate-y-1/2)
md:(top-[417px] right-0)
`}
`

const Heading = styled.h1`
  ${tw`
flex flex-col

sp:items-start
md:items-end
`}
`

const HeadingSvg = styled.span`
  ${tw`
	block

	sp:w-[calc(440/750*100vw)]
	md:(w-[260px] mr-[1.4rem])
	`}
`

const HeadingText = styled.span`
  ${tw`
block text-h1 font-bold
md:mt-[20px]
`}
  font-feature-settings:"palt";
`

const HeaderBg = styled.div`
  ${tw`
absolute left-0 top-0 w-full h-full
z-header2

sp:(bg-center bg-cover bg-mv)
md:(bg-no-repeat bg-contain bg-mvPc)
`}
`

const ScrollDownWrapper = styled.div`
  ${tw`
absolute right-[10px] bottom-[50px]
md:(flex flex-col justify-between items-center h-[465px] right-[35px])
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
              <br className="md:hidden" />
              ギターレッスン。
            </HeadingText>
          </Heading>
        </HeadingWrapper>
        <HeaderBg />
        <TagList>
          <TagItem>現役ミュージシャンが担当。</TagItem>
          <TagItem>全国展開の大手音楽教室経験。</TagItem>
          <TagItem>100名以上の指導経験。</TagItem>
        </TagList>
      </Inner>
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
    </HeaderWrapper>
  )
}

export default Header
