import { Heading2, Heading3, Decoration, Text } from '@/elements/index'
import { Layout } from './Layout'

export const Section1: React.FC = () => {
  return (
    <>
      <Layout.Wrapper paddingBottomSp={230} paddingBottomPc={270}>
        <>
          <Heading2 number={'01'} title={'CONCEPT'} />
          <Layout.Inner>
            <>
              <Heading3
                marginBottom
                title={
                  <>
                    自由度の高い
                    <br />
                    プライベートレッスンスクール
                  </>
                }
              />
              <Text
                text={
                  <>
                    自分自身の目標やレベルに合わせた自由度の高いプライベートレッスンで大手音楽教室と変わらないレッスンクオリティを気軽に体感できるスクールを目指します。
                    <br />
                    <br />
                    「ギターやベースをかっこよく演奏してみたい！」一度は思ったことがあると思います。しかし実際に楽器を購入してみたものの「練習方法がわからない」「一人で練習するだけでは習慣化が難しい」など、様々な理由で諦めてしまう方が多いのではないでしょうか？そんな時こそプロに習ってみることをおすすめします。
                  </>
                }
              />
            </>
          </Layout.Inner>
          <Decoration number={1} />
        </>
      </Layout.Wrapper>
    </>
  )
}
export default Section1
