import { Heading2, Heading3, Text } from '@/elements/index'
import { ContactButton, ParallaxTop } from '@/modules/index'
import { Layout } from './Layout'

export const Section6: React.FC = () => {
  return (
    <>
      <Layout.Wrapper
        bgGray
        paddingTopPc={320}
        paddingTopSp={390}
        paddingBottomSp={140}
        paddingBottomPc={90}
        id="reverse-bg-color-section02"
      >
        <>
          <ParallaxTop />
          <Layout.Inner>
            <>
              <Heading2
                bgGray
                number={'07'}
                title={'Contact'}
                id="heading-06"
              />
              <Layout.Container>
                <>
                  <Heading3
                    marginBottom
                    title={
                      <>
                        はじめての方には、
                        <br />
                        まずは無料体験レッスンを
                        <br />
                        おすすめしています。
                      </>
                    }
                  />
                  <Text
                    text={
                      <>
                        初級者は担当講師の人柄・指導スタイル、中級者以上はギタースタイル等の点で自分に合っているかを見極めることが大切です。遠慮なくさまざまな教室の無料体験レッスンを受けてみてください。
                      </>
                    }
                  />
                  <ContactButton
                    marginTop
                    text={'お問合わせはこちら'}
                    href={'/'}
                  />
                </>
              </Layout.Container>
            </>
          </Layout.Inner>
        </>
      </Layout.Wrapper>
    </>
  )
}
export default Section6
