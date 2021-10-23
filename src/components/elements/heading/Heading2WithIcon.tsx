import tw, { styled } from 'twin.macro'
import { Heading3 } from '@/elements/index'

interface Props {
  title: string | JSX.Element
  number: string
  margin?: boolean
}

const Wrapper = styled.div<{ number: string; margin?: boolean }>`
  ${tw`flex items-center flex-shrink-0`}

  margin:${({ margin }) =>
    margin ? 'calc(60/750*100vw) 0 calc(60/750*100vw) 0' : ''};
  @media (min-width: 769px) {
    margin: ${({ margin }) => (margin ? '0' : '')};
  }
  ::before {
    content: '';
    display: block;
    flex-shrink: 0;
    margin-right: 20px;
    background-size: cover;
    background-image: ${({ number }) =>
      number === '001'
        ? "url('/icon_lesson001.png');"
        : number == '002'
        ? "url('/icon_lesson002.png');"
        : number == '003'
        ? "url('/icon_lesson003.png');"
        : number == '004'
        ? "url('/icon_lesson004.png');"
        : ''};
    @media (max-width: 768px) {
      width: calc(100 / 750 * 100vw);
      height: calc(100 / 750 * 100vw);
    }
    @media (min-width: 769px) {
      width: 60px;
      height: 60px;
    }
  }
`

// eslint-disable-next-line react/prop-types
export const Heading2WithIcon: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  number,
  // eslint-disable-next-line react/prop-types
  margin,
}) => {
  return (
    <>
      <Wrapper margin={margin} number={number}>
        <Heading3 title={title} />
      </Wrapper>
    </>
  )
}
export default Heading2WithIcon
