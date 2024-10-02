import ArrowUpRight from '../assets/icons/arrow-up-right.svg'
import grainImage from "../assets/images/grain.jpg"
export const ContactSection = () => {
  return <section   id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20 '>
    <div className='container '>
      <div className='  bg-gradient-to-tr from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative  overflow-hidden '>
        <div className='absolute inset-0 z-0 opacity-5'  style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>

        <div className='relative z-20 flex flex-col md:flex-row gap-8 md:gap-16  items-center '>


          <div>
            <h1 className=' font-serif  text-2xl md:text-3xl  '>Let &apos;s create something amazing together.</h1>
            <p className='text-sm mt-2 md:text-base '>Ready to bring your next project life? Let&apos;s connect and discuss how I can help you achieve your goal.</p>
          </div>
          <div >
            <button onClick={()=> window.location.href = "mailto:khanmohdsaleh2002@gmail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with you."} className=' inline-flex items-center gap-2 px-6 h-12 bg-gray-900 rounded-xl text-white w-max border border-gray-900  '>
              <span className='font-semibold'>Contact Me</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
}
