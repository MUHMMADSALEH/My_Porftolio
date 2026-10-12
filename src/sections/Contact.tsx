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
            <h2 className='font-serif text-2xl md:text-3xl'>Need a Node.js engineer for your next product?</h2>
            <p className='text-sm mt-2 md:text-base'>I’m open to senior backend roles and freelance projects involving APIs, integrations, and full-stack product work.</p>
          </div>
          <div >
            <a href="mailto:khanmohdsaleh2002@gmail.com?subject=Project%20Inquiry" className='inline-flex items-center gap-2 px-6 h-12 bg-gray-900 rounded-xl text-white w-max border border-gray-900'>
              <span className='font-semibold'>Contact Me</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
}
