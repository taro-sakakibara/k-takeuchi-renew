import Image from 'next/image'
import tw, { styled } from 'twin.macro'

const Test = styled.h1`
  ${tw`
	font-bold
`}
`

export const Index = () => (
  <>
    <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
    <Test>かっちゃんのサイトをリニューアルするよ！</Test>
  </>
)

export default Index
