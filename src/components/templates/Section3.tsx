import { Heading2, Heading3, Text } from '@/elements/index'
import { ContactButton } from '@/modules/index'
import { Layout } from './Layout'

export const Section3: React.FC = () => {
  return (
    <>
      <Layout.Wrapper bgGray paddingBottomSp={230} paddingBottomPc={270}>
        <>
          <Layout.Inner>
            <>
              <Heading2 number={'03'} title={'contact'} />
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
export default Section3
