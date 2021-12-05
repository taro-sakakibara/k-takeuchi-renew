import tw, { styled } from 'twin.macro'
import { reverseBgColorAnimation01, reverseBgColorAnimation02 } from './Animate'

interface Props {
  children: JSX.Element
  paddingBottomSp?: number
  paddingBottomPc?: number
  paddingTopSp?: number
  paddingTopPc?: number
  bgGray?: boolean
  className?: string
  id?: string
}

const StyledWrapper = styled.section<Props>`
  ${tw`
relative
md:px-[50px]
`}
  color:${({ bgGray }) => bgGray && `#fff`};
  // background-color: ${({ bgGray }) => bgGray && `#666666`};
  padding-bottom: ${({ paddingBottomSp }) =>
    paddingBottomSp && `calc(${paddingBottomSp}/750*100vw)`};
  @media (min-width: 769px) {
    padding-bottom: ${({ paddingBottomPc }) =>
      paddingBottomPc && `${paddingBottomPc}px`};
  }
  padding-top: ${({ paddingTopSp }) =>
    paddingTopSp ? `calc(${paddingTopSp}/750*100vw)` : 'calc(240/750*100vw)'};
  @media (min-width: 769px) {
    padding-top: ${({ paddingTopPc }) =>
      paddingTopPc ? `${paddingTopPc}px` : '140px'};
  }
`

const StyledContainer = styled.div`
  ${tw`
md:(ml-[120px])
sp:(mt-[calc(55/750*100vw)])
`}
`
const StyledInner = styled.div`
  ${tw`
sp:(mx-[calc(30/750*100vw)])
md:(flex max-w-[1000px] mx-auto)
`}
`

export const Layout = ({ children }: Props) => {
  return <main>{children}</main>
}

export function Wrapper({
  children,
  bgGray,
  paddingBottomSp,
  paddingBottomPc,
  paddingTopSp,
  paddingTopPc,
  className,
  id,
}: Props) {
  id == 'reverse-bg-color-section01'
    ? reverseBgColorAnimation01()
    : id == 'reverse-bg-color-section02'
    ? reverseBgColorAnimation02()
    : null
  return (
    <StyledWrapper
      className={className}
      bgGray={bgGray}
      paddingBottomSp={paddingBottomSp}
      paddingBottomPc={paddingBottomPc}
      paddingTopSp={paddingTopSp}
      paddingTopPc={paddingTopPc}
      id={id}
    >
      {children}
    </StyledWrapper>
  )
}

export function Inner({ children }: Props) {
  return <StyledInner>{children}</StyledInner>
}

export function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>
}

Layout.Wrapper = Wrapper
Layout.Inner = Inner
Layout.Container = Container
