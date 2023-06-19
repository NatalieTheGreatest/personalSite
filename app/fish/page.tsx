import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
         <div className="header href=/fish" >

         </div>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-[#FFFFFE]">
                Natalie Friede’s Personal Website
        </h1>
        </div>
        <div className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex' >
     <div>
      <Image
          src="/clairence.png"
          width={200}
          height={200}
          alt="Clairence"
        />
              <Image
          src="/clairence2.png"
          width={200}
          height={200}
          alt="Clairence again!"
        />
        </div>
                      <Image
          src="/clyde.png"
          width={200}
          height={200}
          alt="Clyde (my favorite)"
        />
         <Image
          src="/gef.png"
          width={200}
          height={200}
          alt="Geoff"
        />
            <Image
          src="/milfred.png"
          width={200}
          height={200}
          alt="Geoff"
        />
</div>
       
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
         These are my boys! 
           </h3>
           </div>
    </main>
  )
}
