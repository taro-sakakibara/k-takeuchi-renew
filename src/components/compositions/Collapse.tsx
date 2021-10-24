import tw, { styled } from 'twin.macro'
import {
  NumberingHeading,
  Heading3,
  Circle,
  Plus,
  Text,
  DottedText,
  Note,
} from '@/elements/index'
import { useState } from 'react'

const List = styled.div`
  ${tw`
border-t-[1px] border-dotted border-transparentGray
`}
`

const Head = styled.li`
  ${tw`
border-b-[1px] border-dotted border-transparentGray
`}
`

const Wrapper = styled.button`
  ${tw`
flex items-center justify-between w-full

sp:(py-[calc(50/750*100vw)] my-[calc(10/750*100vw)])
md:(py-[50px] px-[20px] my-[10px])

hover:bg-hoverLightGray
`}
`

const Container = styled.div`
  ${tw``}
`

const HeadingWrapper = styled.div`
  ${tw`
text-left

sp:mt-[calc(50/750*100vw)]
md:mt-[20px]
`}
`

const Body = styled.div<{ setActive: boolean }>`
  ${tw`
	overflow-y-hidden
`}
  ${({ setActive }) =>
    setActive
      ? `
		height: fit-content;
  	animation: open 2.5s forwards;

    @keyframes open {
      from {
        max-height: 0px;
      }
      to {
        max-height: 999vh;
      }
    }
		`
      : `
		animation: close 0.3s forwards;
		@keyframes close {
			from {
				max-height: 150vh;
			}
			to {
				display: none;
				max-height: 0px;
			}
		}
	`}
`

const BodyInner = styled.div`
  ${tw`
md:pb-[60px]
sp:pb-[calc(80/750*100vw)]
`}
`

export const Collapse: React.FC = () => {
  const [setActive1, setActive1State] = useState(false)
  const [setActive2, setActive2State] = useState(false)
  const [setActive3, setActive3State] = useState(false)
  const [setActive4, setActive4State] = useState(false)
  const toggleAccordion1 = () => {
    setActive1State(!setActive1 ? true : false)
  }
  const toggleAccordion2 = () => {
    setActive2State(!setActive2 ? true : false)
  }
  const toggleAccordion3 = () => {
    setActive3State(!setActive3 ? true : false)
  }
  const toggleAccordion4 = () => {
    setActive4State(!setActive4 ? true : false)
  }

  const data: {
    setActive: boolean
    toggleAccordion: () => void
    numberTitle: string | JSX.Element
    headingTitle: string | JSX.Element
    children: JSX.Element
  }[] = [
    {
      toggleAccordion: toggleAccordion1,
      setActive: setActive1,
      numberTitle: 'Question 001',
      headingTitle: (
        <>
          初心者でも
          <br />
          受講できますか？
        </>
      ),
      children: (
        <>
          <Text text="初心者の方も大歓迎です。担当講師はていねいな指導をモットーとしています。変な癖をつけないため、最初からプロに学ぶことをオススメしています。他にも、下記のような方が受講可能です。" />
          <ul className="leading-[calc(80/32)]">
            <DottedText as="li" text="ミュージシャンではない初心者・経験者" />
            <DottedText as="li" text="ミュージシャンではない初心者・経験者" />
            <DottedText as="li" text="ミュージシャンではない初心者・経験者" />
          </ul>
        </>
      ),
    },
    {
      toggleAccordion: toggleAccordion2,
      setActive: setActive2,
      numberTitle: 'Question 002',
      headingTitle: '“現役ミュージシャン”とは？',
      children: (
        <Text
          text={
            <>
              音楽講師の中には現在演奏活動や創作活動を行っていない元ミュージシャンも多くいます。素晴らしい経験をされた後に様々な理由で引退された方もいらっしゃると思いますし、もちろんそれが指導力と直接関係はしませんが、やはり現役のミュージシャンからしか得られない新鮮な情報や熱量は存在すると思っています。
              <br />
              自分の先生がまったくライブ等をしていない元ミュージシャンだったら寂しいですよね。
            </>
          }
        />
      ),
    },
    {
      toggleAccordion: toggleAccordion3,
      setActive: setActive3,
      numberTitle: 'Question 003',
      headingTitle: (
        <>
          “プライベートレッスン”
          <br />
          とは？
        </>
      ),
      children: (
        <Text
          text={
            <>
              大きな会社が運営する音楽教室は採用試験等がしっかりしているので、講師の質が平均的に高いのと同時に「運営費」や「設備費」といったレッスン料以外のお金が毎月必要となる事があります。そのため、実際に支払う料金がレッスン料と表示されている金額よりも高額になってしまうこともあります。
              <br />
              教室名」のプライベートレッスンではそういった大手音楽教室で指導していた経験のある講師が直接運営しているため、内容や講師のクオリティはそのまま料金を抑えることができます。
              <br />
              また、講師が運営スタッフなどを通さず一人一人と直接やりとりをするため、人数制限がある代わりに力強いサポートをする事が可能です。
            </>
          }
        />
      ),
    },
    {
      toggleAccordion: toggleAccordion4,
      setActive: setActive4,
      numberTitle: 'Question 004',
      headingTitle: (
        <>
          レッスン外での
          <br />
          サポートはありますか？
        </>
      ),
      children: (
        <>
          <Text
            text={
              '希望される方に対して担当講師がメールやLINE等を利用したレッスン外での簡易サポートを行います。気になる部分の演奏動画と質問を添付していただければ、メッセージにて可能な限りのアドバイスを送信します。'
            }
          />
          <Note
            text={
              '対面でしか伝えられない内容もありますので、あくまでレッスンまでの補助としてご活用ください。簡易サポートは1レッスン毎に1度可能で、返信は3日以内に行っております。レッスンで聞き逃したポイントなどを次のレッスンまでに再度確認することが可能です。'
            }
          />
        </>
      ),
    },
  ]

  return (
    <List>
      {data.map((v) => (
        <>
          <Head>
            <Wrapper onClick={v.toggleAccordion}>
              <Container>
                <NumberingHeading title={v.numberTitle} />
                <HeadingWrapper>
                  <Heading3 title={v.headingTitle} />
                </HeadingWrapper>
              </Container>
              <Circle isBlack>
                <Plus setActive={v.setActive} />
              </Circle>
            </Wrapper>
            <Body setActive={v.setActive}>
              <BodyInner>{v.children}</BodyInner>
            </Body>
          </Head>
        </>
      ))}
    </List>
  )
}

export default Collapse
