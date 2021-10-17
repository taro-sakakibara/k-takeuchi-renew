import {
  Heading2,
  Heading3,
  NumberingHeading,
  Heading2WithIcon,
  Circle,
  RightArrow,
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
      <RightArrow />
    </Circle>
    <ContactButton href={''} text={'お問い合わせはこちら'} />
    <OrderButton
      href={''}
      Number={'A'}
      NumberOfPrice={'8,000'}
      DetailText={'60分×月3回'}
    />
  </>
)

export default Components
