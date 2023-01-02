import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className='bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] px-4 py-12 lg:px-16 lg:pb-48 lg:pt-24 flex flex-col lg:flex-row items-center gap-0 relative'
      >
        <div className="flex items-end gap-2.5 lg:gap-8 lg:order-2 lg:absolute lg:bottom-[-8px] lg:right-[64px] ">
          <Image 
            src="/img/pondering-ben.png"
            alt=""
            width="234"
            height="293"
            className="lg:w-[22vw] h-auto"
          />
          <Image 
            src="/img/glc-light.png"
            alt="Grant Cardone Licensee"
            width="98"
            height="26"
            className="pb-3 lg:pb-6 lg:w-[9.5vw] h-auto"
          />
        </div>
        <div className="bg-[#02071D] lg:bg-inherit shadow lg:shadow-none rounded-sm text-white text-center lg:text-left px-4 py-8 mt-[-4px] flex flex-col gap-4  lg:ml-[6vw]">
          <p className="font-bold text-[29px] leading-[35px] lg:text-[42px] lg:leading-[51px] lg:max-w-[28ch]">Tired of your customers saying no to your offers?</p>
          <p className="font-semibold text-[24px] leading-[29px] lg:text-[29px] lg:leading-[35px]">Ready to get to the next level?</p>
          <Link href="/contact" className="bg-gradient-to-b from-[#FF5E00] to-[#F05800] px-8 py-4 mt-6 lg:mt-12 rounded-sm shadow font-semibold text-[18px] lg:text-[24px] lg:w-fit">
            Learn our cutting-edge sales strategies!
          </Link>
        </div>
      </section>
      {/* Intro Section */}
      <section className='p-4 py-12 lg:py-16 grid gap-4 lg:gap-8 justify-center'>
        <h1 className='text-center'>10x Your Life & Business</h1>
        <p>Congratulations on taking action to make more money, scale your business, and build a team of high performance sales reps! This is no small feat, and it takes dedication, hard work, and a willingness to be vulnerable and grow. Even if you have already implemented successful strategies. My intention is to add value to the systems that you already have in place by providing my 24/7 interactive virtual training program, combined with Grant Cardone's #1 training program.</p>
        <p>You will experience one-on-one training, in person workshops, live events, and everyday training. By choosing to invest in this opportunity, you are setting yourself up for long-term success. Building a team that works together effectively and produces results is crucial for any business, and the effort you have put in to make this happen will pay off in the long run.</p>
        <p>As you continue on your journey to grow and scale your business with us, you will save money, time, and the heartache of potential mistakes. I appreciate the opportunity to earn your business and look forward to producing massive results with you.</p>
      </section>
      {/* Coaching Section */}
      <section className="bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] p-4 py-12 lg:py-16 grid gap-4 lg:gap-8 justify-center">
        <h2 className='text-center'>Coaching Services</h2>
        <p>Are you ready to take your sales skills and mindset to the next level? My interactive virtual training program offers 24/7 access to effective sales and mindset training that will add massive value to what you are currently doing.</p>
        <p>By subscribing to my program, you'll get access to a wealth of knowledge and resources that will help you succeed in your sales career. My training is designed to be interactive and engaging, so you can learn at your own pace and in a way that works best for you.</p>
        <p>My program includes a variety of training materials, including video lessons, interactive quizzes, and practical exercises. You'll also have access to a community of like-minded professionals who are also working to improve their sales skills and mindset.</p>
        <p>With our coaching services, you'll learn how to:</p>
        <ul className="grid gap-2 lg:gap-4">
          <li>✅  Close more deals and increase your sales</li>
          <li>✅  Build a strong and effective team</li>
          <li>✅  Develop a winning mindset that sets you up for success</li>
          <li>✅  Grow your business and reach new heights</li>
        </ul>
        <p>You will also have direct access to my mentor and business partners curriculums as a bonus. You'll be able to use Cardone University as a added level of value from Grant Cardone himself.</p>
        <p>Don't miss out on this opportunity to transform your sales career. Subscribe to my interactive virtual training program today and start achieving your goals.</p>
      </section>
      {/* Book Section */}
      <section className="p-4 py-12 lg:py-16 grid gap-4 lg:gap-8 justify-center">
        <h2 className="text-center">The Misguided Mentor</h2>
        <div className='grid gap-4 lg:gap-24 lg:flex lg:items-center'>  
          <Image 
            src="/img/misguided-mentor.jpg"
            alt=""
            width="320"
            height="386"
            className="w-full lg:w-[16vw] h-auto rounded-sm shadow-inner"
          />
          <div className='grid gap-8'>
            <p className='lg:max-w-[50ch]'>This book describes, in various ways, the importance of mentorship in one's life and goes into great detail about how our mindsets have been created by positive and negative influences our entire lives. Ben uses his story as an example to highlight several aspects of mentoring in each and everyone of our lives and how you can turn everything around with the right guidance.</p>
            <Link href="https://www.amazon.com/MISGUIDED-MENTOR-UNDERSTAND-ASPECT-MENTORSHIP-ebook/dp/B0BPX6YD2J/ref=sr_1_1?crid=1W23FFTHCIA7Z&keywords=benjamin+john+the+misguided+mentor&qid=1672629620&sprefix=benjamin+john+misgui%2Caps%2C151&sr=8-1" className="bg-gradient-to-b from-[#FF5E00] to-[#F05800] px-8 py-4 rounded-sm shadow font-semibold lg:w-fit text-center">
              Order today!
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className='bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] p-4 py-12 lg:py-16'>
        <ContactForm />
      </section>
    </main>
  )
}
