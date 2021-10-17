import {
  Heading2,
  Heading3,
  NumberingHeading,
  Heading2WithIcon,
} from '@/elements/index'

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
  </>
)

export default Components
