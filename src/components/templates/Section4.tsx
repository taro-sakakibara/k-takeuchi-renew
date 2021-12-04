import { Heading2, Decoration } from '@/elements/index'
import { Layout } from './Layout'
import { Collapse } from '@/compositions/index'
import Scroll from 'react-scroll'

export const Section4: React.FC = () => {
  return (
    <Scroll.Element name="faq">
      <Layout.Wrapper
        paddingTopPc={420}
        paddingBottomSp={430}
        paddingBottomPc={460}
      >
        <>
          <Layout.Inner>
            <>
              <Heading2 number={'04'} title={'FAQ'} id="heading-04" />
              <Layout.Container>
                <Collapse />
              </Layout.Container>
            </>
          </Layout.Inner>
          <Decoration number={5} />
        </>
      </Layout.Wrapper>
    </Scroll.Element>
  )
}
export default Section4
