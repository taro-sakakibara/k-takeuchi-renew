import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element
  paddingBottomSp?: number
  paddingBottomPc?: number
}

const StyledWrapper = styled.section<{
  paddingBottomSp?: number
  paddingBottomPc?: number
}>`
  ${tw`
sp:(mx-[calc(30/750*100vw)] mt-[calc(240/750*100vw)])
md:(flex max-w-[1000px] mx-[200px] mt-[200px])
`}
  padding-bottom:${({ paddingBottomSp }) =>
    paddingBottomSp ? `${paddingBottomSp}px` : ''};
  @screen md {
    padding-bottom: ${({ paddingBottomPc }) =>
      paddingBottomPc ? `${paddingBottomPc}px` : ''};
  }
`

const StyledInner = styled.div`
  ${tw`
md:(ml-[120px])
sp:(mt-[55px])
`}
`

export const Layout = ({ children }: Props) => {
  return <main>{children}</main>
}

export function Wrapper({ children, paddingBottomSp, paddingBottomPc }: Props) {
  return (
    <StyledWrapper
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

Layout.Wrapper = Wrapper
Layout.Inner = Inner
