import Image from 'next/image'
import tw, { styled } from 'twin.macro'

const Test = styled.h1`
  ${tw`
	text-[12px] font-bold text-gray-50
`}
`

export const Index = () => (
  <>
    <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
    <Test>かっちゃんのサイトをリニューアルするよ！</Test>
  </>
)

export default Index
