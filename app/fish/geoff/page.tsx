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
             Geoff’s Personal Website
        </h1>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
      <Image
          src="/Geoff2.png"
          width={200}
          height={200}
          alt="Geoff"
        />
                <Image
          src="/Geoff3.png"
          width={200}
          height={200}
          alt="Geoff"
        />
          <Image
          src="/Geoff4.png"
          width={200}
          height={200}
          alt="Geoff"
        />
</div>
<div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >

<Image
          src="/Geoff5.png"
          width={200}
          height={200}
          alt="Geoff"
        />
          <Image
          src="/Geoff6.png"
          width={200}
          height={200}
          alt="Geoff"
        />
          <Image
          src="/Geoff7.png"
          width={200}
          height={200}
          alt="Geoff"
        />
</div>
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
Despite his innocent appearance, Geoff is actually an illegal squatter. He just kinda showed up one day (friend gave him to me without asking), but since he seemed nice I decided to let him stay even though we were at max capacity. Since then, he has remained the smallest of the 4 fish, but still enjoys heavyweight boxing since he is able to be in a lower weight bracket than the rest.
           </h3>
           </div>
    </main>
  )
}
