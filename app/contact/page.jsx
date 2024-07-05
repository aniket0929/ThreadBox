export default function Contact(){
    return <main className="flex">
      <div className="w-3/6 flex flex-col justify-center items-center gap-20 ">
       <div className="pl-3">
       <h1 className="text-6xl font-bold py-3 ">
            Reach out and say <span className="text-[#004aad]">Hello.</span>
        </h1>
        <h2 className="text-2xl text-gray-400 w-4/5 font-semibold">
            Get in touch with us through email.We are eager to hear from you.
        </h2>
       </div>
       <div className="">
       <a className="text-3xl font-bold text-[#004aad]" href="mailto:“aniketgavwork@gmail.com”">aniketgavwork@gmail.com</a>
       </div>
      </div>
      <div className="w-3/6">
        <img src="/hello.png"/>
      </div>
    </main>
}