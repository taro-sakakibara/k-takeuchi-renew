import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element
  paddingBottomSp?: number
  paddingBottomPc?: number
  bgGray?: boolean
}

const StyledWrapper = styled.section<Props>`
  ${tw`
relative

sp:(pt-[calc(240/750*100vw)])
md:(pt-[140px])
`}
  color:${({ bgGray }) => bgGray && `#fff`};
  background-color: ${({ bgGray }) => bgGray && `#666666`};
  padding-bottom: ${({ paddingBottomSp }) =>
    paddingBottomSp && `calc(${paddingBottomSp}/750*100vw)`};
  @media (min-width: 769px) {
    padding-bottom: ${({ paddingBottomPc }) =>
      paddingBottomPc && `${paddingBottomPc}px`};
  }
`

const StyledContainer = styled.div`
  ${tw`
md:(ml-[120px])
sp:(mt-[55px])
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
}: Props) {
  return (
    <StyledWrapper
      bgGray={bgGray}
      paddingBottomSp={paddingBottomSp}
      paddingBottomPc={paddingBottomPc}
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
