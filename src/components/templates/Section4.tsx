import { Heading2, Decoration } from '@/elements/index'
import { Layout } from './Layout'
import { Collapse } from '@/compositions/index'

export const Section4: React.FC = () => {
  return (
    <>
      <Layout.Wrapper paddingBottomSp={430} paddingBottomPc={460}>
        <>
          <Layout.Inner>
            <>
              <Heading2 number={'04'} title={'FAQ'} />
              <Layout.Container>
                <Collapse />
              </Layout.Container>
            </>
          </Layout.Inner>
          <Decoration number={5} />
        </>
      </Layout.Wrapper>
    </>
  )
}
export default Section4
