import { Heading2, Heading3, NumberingHeading } from '@/elements/index'

export const Components = () => (
  <>
    <Heading2 number={'01'} title={'concept'} />
    <Heading3
      title={
        <>
          自由度の高い
          <br />
          プライベートレッスンスクール
        </>
      }
    />
    <NumberingHeading title={'001'} />
  </>
)

export default Components
