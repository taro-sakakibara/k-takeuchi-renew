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

const Wrapper = styled.div`
  ${tw`
sp:space-y-[160/750*100vw]
md:space-y-[60px]
`}
`

const ContentWrapper = styled.div`
  ${tw`
sp:mt-[calc(60/750*100vw)]
md:(flex justify-between items-start mt-[40px])
	`}
`

const Unit = styled.div`
  ${tw`
md:w-[calc(455/1000*100%)]
`}
`

export const Section5: React.FC = () => {
  const data = [
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
  ]
  return (
    <Layout.Wrapper paddingBottomSp={650} paddingBottomPc={200}>
      <Layout.Inner>
        <>
          <Heading2 number={'05'} title={'Corse'} />
          <Layout.Container>
            <Wrapper>
              {data.map((v1) => (
                <>
                  <div>
                    <NumberingHeading title={v1.number} />
                    <ContentWrapper>
                      <Unit>
                        <Heading3 marginBottom title={v1.title} />
                        <ul>
                          {v1.dottedText.map((v2) => (
                            <>
                              <DottedText as="li" text={v2} />
                            </>
                          ))}
                        </ul>
                        <div className="md:mt-[40px] sp:mt-[calc(40/750*100vw)]">
                          {v1.noteText.map((v3) => (
                            <>
                              <Note text={v3} />
                            </>
                          ))}
                        </div>
                      </Unit>
                      <div className="md:space-y-[10px] sp:space-y-[20/750*100vw] sp:mt-[calc(65/750*100vw)]">
                        {v1.button.map((v4) => (
                          <>
                            <OrderButton
                              href={v4.href}
                              number={v4.number}
                              numberOfPrice={v4.numberOfPrice}
                              text={v4.text}
                            />
                          </>
                        ))}
                      </div>
                    </ContentWrapper>
                  </div>
                </>
              ))}
            </Wrapper>
          </Layout.Container>
        </>
      </Layout.Inner>
    </Layout.Wrapper>
  )
}
export default Section5
