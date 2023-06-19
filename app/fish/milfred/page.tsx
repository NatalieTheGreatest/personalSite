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
             Milfred’s Personal Website
        </h1>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
      <Image
          src="/Milfred2.png"
          width={200}
          height={200}
          alt="Milfred"
        />
                <Image
          src="/Milfred3.png"
          width={200}
          height={200}
          alt="Milfred"
        />
          <Image
          src="/Milfred4.png"
          width={200}
          height={200}
          alt="Milfred"
        />
</div>
<div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >

<Image
          src="/Milfred5.png"
          width={200}
          height={200}
          alt="Milfred"
        />
          <Image
          src="/Milfred6.png"
          width={200}
          height={200}
          alt="Milfred"
        />
          <Image
          src="/Milfred7.png"
          width={200}
          height={200}
          alt="Milfred"
        />
</div>
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
   This here is Milfred. Milfred was also obtained at the same time as Clyde (A whopping 5 years ago if it is still 2023). Milfred enjoys a good mojito (he is 21 in fish years) and nice long walks on the beach. After the housing bubble crashed in 2008, Milfred bought several condos and has decided to spend retirement at the tank. 
           </h3>
           </div>
    </main>
  )
}
