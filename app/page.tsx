import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
         <a className="header flex width:50"  href="/fish">
         <h1 className="text-[#FFFFFE]">
          !  CLICK HERE TO SEE FISH !
            </h1>
         </a>
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Image
          src="/natalie.png"
          width={500}
          height={500}
          alt="It's Me!"
        />
        <h1 className="text-[#FFFFFE]">
                Natalie Friede’s Personal Website
        </h1>
       
        </div>
        <div className="items-center justify-between  font-family:menlo">
        <h3 className="text-[#FFFFFF]">
           Hello! I am Natalie Friede, an up and coming software engineer in the Northwest Arkansas area. 
           I enjoy having fish, riding my bike, making resin dice, playing magic the gathering, and of course, coding and algorithms! 
           </h3>
           </div>
    </main>
  )
}
