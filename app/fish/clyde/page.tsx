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
             Clyde’s Personal Website
        </h1>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
      <Image
          src="/CLYDE2.png"
          width={200}
          height={200}
          alt="Clyde"
        />
                <Image
          src="/CLYDE3.png"
          width={200}
          height={200}
          alt="Clyde"
        />
          <Image
          src="/CLYDE4.png"
          width={200}
          height={200}
          alt="Clyde"
        />
</div>
<div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >

<Image
          src="/CLYDE5.png"
          width={200}
          height={200}
          alt="Clyde"
        />
          <Image
          src="/CLYDE6.png"
          width={200}
          height={200}
          alt="Clyde"
        />
          <Image
          src="/CLYDE7.png"
          width={200}
          height={200}
          alt="Clyde"
        />
</div>
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
       Here is a showcase of my favorite fish, Clyde! Clyde has been here from the very beginning where he was almost fed to a lobster. He was obtained from the local pet smart or co (they are the same to me) in late december of 2017. He celebrates his birthday on Deceber the 27th, since that was when he was suspected to be born. He is an avid rock climber and in desperate need of a new bike. 
           </h3>
           </div>
    </main>
  )
}
