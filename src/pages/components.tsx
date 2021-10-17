import {
  Heading2,
  Heading3,
  NumberingHeading,
  Heading2WithIcon,
  Circle,
  Arrow,
  Note,
} from '@/elements/index'
import { ContactButton, OrderButton } from '@/modules/index'

export const Components = () => (
  <>
    <Heading2 number={'01'} title={'concept'} />
    <Heading3
      title={
        <>
          自由度の高い
          <br className="md:hidden" />
          プライベートレッスンスクール
        </>
      }
    />
    <NumberingHeading title={'001'} />
    <Heading2WithIcon
      number={'001'}
      title={
        <>
          初心者から
          <br />
          上級者まで。
        </>
      }
    />
    <Circle>
      <Arrow />
    </Circle>
    <ContactButton href={''} text={'お問い合わせはこちら'} />
    <OrderButton
      href={''}
      number={'A'}
      numberOfPrice={'8,000'}
      text={'60分×月3回'}
    />
    <Note
      text={
        '入会金や手数料は一切かかりません。レッスンの内容に沿っておすすめの教則本など市販のものをご紹介させていただくことはあります。'
      }
    />
  </>
)

export default Components
