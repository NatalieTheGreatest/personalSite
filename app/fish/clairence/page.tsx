import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
         <div className="header href=/fish" >

         </div>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <a className="header flex width:50"  href="/fish">
         <h1 className="text-[#FFFFFE] font-bold text-lg">
    Back
            </h1>
         </a>
      <h1 className="text-[#FFFFFE]">
             Clairence’s Personal Website
        </h1>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
      <Image
          src="/clairence2.png"
          width={200}
          height={200}
          alt="clairence"
        />
                <Image
          src="/clairence3.png"
          width={200}
          height={200}
          alt="clairence"
        />
          <Image
          src="/clairence4.png"
          width={200}
          height={200}
          alt="clairence"
        />
</div>
<div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >

<Image
          src="/clairence5.png"
          width={200}
          height={200}
          alt="clairence"
        />
          <Image
          src="/clairence6.png"
          width={200}
          height={200}
          alt="clairence"
        />
          <Image
          src="/clairence7.png"
          width={200}
          height={200}
          alt="clairence"
        />
</div>
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
     Here shown is Clairence. He is a mysterious being who has shifted colors. When he initially arrived at the tank he was a lovely shade of gray, but has progressed into a dazzling shade of light orange. He aims to go to purdue University this fall, but has yet to apply since he cannot work a computer on his own.
           </h3>
           </div>
    </main>
  )
}
