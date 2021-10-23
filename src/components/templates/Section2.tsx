import {
  Heading2,
  NumberingHeading,
  Heading2WithIcon,
  // Decoration,
  Text,
} from '@/elements/index'
import { Layout } from './Layout'

export const Section2: React.FC = () => {
  const data = [
    {
      number: '001',
      title: (
        <>
          初心者から
          <br />
          上級者まで
        </>
      ),
      text: 'ギターをはじめた初心者の方から、アドリブなど一歩踏みこんだギターの演奏に必要なテクニックや音楽理論を求める上級者の方までレッスン致します。',
    },
    {
      number: '002',
      title: (
        <>
          分かりやすい
          <br />
          料金システム。
        </>
      ),
      text: '入会金や教材費、運営管理費等は必要ありません。必要なのはレッスン料のみです。',
    },
    {
      number: '003',
      title: (
        <>
          講師は
          <br />
          現役のミュージシャン。
        </>
      ),
      text: (
        <>
          講師は演奏活動や創作活動を行っている現役のミュージシャンです。
          <br />
          全国展開の大手音楽教室にて指導経験のある講師も在籍していますので初心者の方もご安心ください。
        </>
      ),
    },
    {
      number: '004',
      title: (
        <>
          自由度の高い
          <br />
          マンツーマンレッスン。
        </>
      ),
      text: (
        <>
          30分レッスンを1コマとしています。最大2コマまで組み合わせることができますので、1回60分レッスンを希望する方もご安心ください。
          <br />
          講師とのマンツーマンレッスンを基本としていますので、周りを気にせず自分のペースで上達していただけます。また、講師と直接話し合いながら柔軟にレッスンを組み立てていく事が可能です。
        </>
      ),
    },
  ]
  return (
    <Layout.Wrapper paddingBottomSp={150}>
      <>
        <Heading2 number={'02'} title={'lesson'} />
        <Layout.Inner>
          <div className="md:space-y-[60px]">
            {data.map((v) => (
              <>
                <NumberingHeading title={v.number} />
                <div className="md:flex md:justify-between md:items-start md:mt-[40px]">
                  <Heading2WithIcon title={v.title} number={v.number} margin />
                  <div className="w-[calc(455/1000*100%)]">
                    <Text text={v.text} />
                  </div>
                </div>
              </>
            ))}
          </div>
        </Layout.Inner>
      </>
    </Layout.Wrapper>
  )
}
export default Section2
