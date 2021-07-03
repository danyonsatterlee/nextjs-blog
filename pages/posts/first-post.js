import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
    return(<><h1>First Post</h1><p><Image src='/images/profile.jpg' height={800} width={800} /><Link href='/'>Back Home</Link></p></>)
  }