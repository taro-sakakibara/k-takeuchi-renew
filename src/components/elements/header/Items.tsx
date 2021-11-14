import tw, { styled } from 'twin.macro'

export const TagList = styled.ul`
  ${tw`
absolute z-header3

sp:(bottom-[30px] left-[30px])
md:(flex top-[570px] right-0)
`}
`

export const TagItem = styled.li`
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

export const Wrapper = styled.header`
  ${tw`
relative h-[100vh]

md:max-w-[1400px] mx-auto
`}
`

export const Inner = styled.div`
  ${tw`
relative h-full
z-header1

sp:w-full
md:w-[90%]
`}
`

export const BgContainer = styled.div`
  ${tw`
absolute left-0 top-0 w-full
z-header2

sp:(bg-center bg-cover bg-mv h-full)
md:(bg-no-repeat bg-contain bg-mvPc h-[87%])
`}
`

export const HeadingWrapper = styled.div`
  ${tw`
absolute w-[fit-content]
z-header3

sp:(top-[38%] left-[50%] transform -translate-x-1/2 -translate-y-1/2)
md:(top-[417px] right-0)
`}
`

export const HeadingContainer = styled.h1`
  ${tw`
flex flex-col

sp:items-start
md:items-end
`}
`

export const HeadingSvg = styled.span`
  ${tw`
	block

	sp:w-[calc(440/750*100vw)]
	md:(w-[260px] mr-[1.4rem])
	`}
`

export const HeadingText = styled.span`
  ${tw`
block text-h1 font-bold

md:mt-[20px]
`}
  font-feature-settings:"palt";
`
