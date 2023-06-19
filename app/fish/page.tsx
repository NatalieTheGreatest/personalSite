import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
         <div className="header href=/fish" >

         </div>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-lg lg:flex">
      <h1 className="text-[#FFFFFE]">
                Natalie Friede’s Personal Website
        </h1>
        <div>CLICK THE FISH FOR MORE INFO</div>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
        <a className="header flex width:50"  href="/fish/clairence"> 
      <Image
          src="/clairence.png"
          width={200}
          height={200}
          alt="Clairence"
        /> 
        </a>
        <a className="header flex width:50"  href="/fish/clyde"> 
 <Image
          src="/clyde.png"
          width={200}
          height={200}
          alt="Clyde (my favorite)"
        />
        </a>
        <a className="header flex width:50"  href="/fish/geoff"> 
         <Image
          src="/gef.png"
          width={200}
          height={200}
          alt="Geoff"
        />
        </a>
        <a className="header flex width:50"  href="/fish/milfred"> 
            <Image
          src="/milfred.png"
          width={200}
          height={200}
          alt="Milfred"
        />
        </a>
</div>

<Image
          src="/line.png"
          width={800}
          height={500}
          alt="ALL OF THEM AT ONCE"
        />
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
         These are my boys! In order from left to right on line pic, we have Milfred, Clyde, Clairence, and Geoff(rey)
           </h3>
           </div>
    </main>
  )
}
