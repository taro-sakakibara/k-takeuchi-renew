import tw, { styled } from 'twin.macro'

const StyledWrapper = styled.section<{
  paddingBottomSp?: number
  paddingBottomPc?: number
}>`
  ${tw`
sp:(mx-[30/750*100vw] mt-[240/750*100vw])
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
`}
`

export const Layout = () => {
  return <main></main>
}

export function Wrapper(
  children: JSX.Element,
  paddingBottomSp?: number,
  paddingBottomPc?: number
) {
  return (
    <StyledWrapper
      paddingBottomSp={paddingBottomSp}
      paddingBottomPc={paddingBottomPc}
    >
      {children}
    </StyledWrapper>
  )
}

export function Inner(children: JSX.Element) {
  return <StyledInner>{children}</StyledInner>
}

Layout.Wrapper = Wrapper
Layout.Inner = Inner
