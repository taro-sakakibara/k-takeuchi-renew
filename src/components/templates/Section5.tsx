import tw, { styled } from 'twin.macro'
import {
  Heading2,
  NumberingHeading,
  Heading3,
  DottedText,
  Note,
} from '@/elements/index'
import { OrderButton } from '@/modules/index'
import { Layout } from './Layout'
import Scroll from 'react-scroll'

const Wrapper = styled.div`
  ${tw`
sp:space-y-[160/750*100vw]
md:space-y-[60px]
`}
`

const ContentWrapper = styled.div`
  ${tw`
border-b-[1px] border-dotted border-transparentGray

sp:(mt-[calc(60/750*100vw)] pb-[calc(100/750*100vw)])
md:(flex justify-between items-start mt-[40px] pb-[60px])
	`}
`

const Unit = styled.div`
  ${tw`
md:w-[calc(455/1000*100%)]
`}
`

const NoteWrapper = styled.ul`
  ${tw`
border-[1px] border-solid border-transparentBlack rounded-[10px]

sp:(py-[calc(40/750*100vw)] px-[calc(30/740*100vw)])
md:(p-[40px])
`}
`

export const Section5: React.FC = () => {
  const data = {
    corse: [
      {
        number: 'Corse 001',
        title: 'ライトコース',
        dottedText: [
          '30分マンツーマンレッスン（対面)',
          'エレキギター・アコースティックギターコース',
        ],
        noteText: [
          'スタジオ代込みの料金設定です。',
          '入会金や手数料は一切かかりません。レッスンの内容に沿っておすすめの教則本など市販のものをご紹介させていただくことはあります。',
        ],
        button: [
          {
            href: '/',
            number: 'A',
            numberOfPrice: '8,000',
            text: '30分×月2回',
          },
          {
            href: '/',
            number: 'B',
            numberOfPrice: '11,000',
            text: '30分×月3回',
          },
        ],
      },
      {
        number: 'Corse 002',
        title: 'レギュラーコース',
        dottedText: [
          '60分マンツーマンレッスン（対面）',
          'エレキギター・アコースティックギターコース',
        ],
        noteText: [
          'スタジオ代込みの料金設定です。',
          '入会金や手数料は一切かかりません。レッスンの内容に沿っておすすめの教則本など市販のものをご紹介させていただくことはあります。',
        ],
        button: [
          {
            href: '/',
            number: 'A',
            numberOfPrice: '7,000',
            text: '60分×月1回',
          },
          {
            href: '/',
            number: 'B',
            numberOfPrice: '12,000',
            text: '60分×月2回',
          },
          {
            href: '/',
            number: 'C',
            numberOfPrice: '17,000',
            text: '60分×月3回',
          },
        ],
      },
    ],
    note: [
      '楽器の貸出などは行っておりません。',
      'レッスン場所に関しては、基本的に名古屋市、小牧市内の音楽スタジオにて行っております。事前にお住まいの市町村を明記の上、お問い合わせください。担当講師より指定のスタジオをご案内させていただきます。市外への出張レッスンも可能な場合はございますが、別途交通費が必要になります。',
      'レッスンコースは入会時に一度決定した後、変更がある場合は申し出て頂くことで翌月から変更することも可能ですが、その時の在籍状況により時間割の都合上変更が難しい場合もあります。',
      '受付対象年齢は小学校2年生〜です。お子さまの個性によってはレッスンが難しい場合もありますので、中学生未満のお子様は事前に必ず無料体験レッスンをご利用ください。',
    ],
  }
  return (
    <Scroll.Element name="corse">
      <Layout.Wrapper paddingBottomSp={400} paddingBottomPc={480}>
        <Layout.Inner>
          <>
            <Heading2 number={'05'} title={'Corse'} />
            <Layout.Container>
              <Wrapper>
                {data.corse.map((v1, i1) => (
                  <div key={i1}>
                    <NumberingHeading title={v1.number} />
                    <ContentWrapper>
                      <Unit>
                        <Heading3 marginBottom title={v1.title} />
                        <ul>
                          {v1.dottedText.map((v2, i2) => (
                            <DottedText key={i2} as="li" text={v2} />
                          ))}
                        </ul>
                        <div className="md:mt-[40px] sp:mt-[calc(40/750*100vw)]">
                          {v1.noteText.map((v3, i3) => (
                            <Note key={i3} text={v3} />
                          ))}
                        </div>
                      </Unit>
                      <div className="md:space-y-[10px] sp:space-y-[20/750*100vw] sp:mt-[calc(65/750*100vw)]">
                        {v1.button.map((v4, i4) => (
                          <OrderButton
                            key={i4}
                            href={v4.href}
                            number={v4.number}
                            numberOfPrice={v4.numberOfPrice}
                            text={v4.text}
                          />
                        ))}
                      </div>
                    </ContentWrapper>
                  </div>
                ))}
                <NoteWrapper>
                  {data.note.map((v, i) => (
                    <Note key={i} text={v} />
                  ))}
                </NoteWrapper>
              </Wrapper>
            </Layout.Container>
          </>
        </Layout.Inner>
      </Layout.Wrapper>
    </Scroll.Element>
  )
}
export default Section5
