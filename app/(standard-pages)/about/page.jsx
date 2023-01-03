import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] p-4 py-12 lg:py-16">
      <section className="grid gap-8 lg:gap-24">
        <h1 className="text-center">Get to know Ben</h1>
        <div className="grid gap-4 lg:flex lg:items-center max-w-7xl mx-auto lg:gap-24">
          <Image 
            src="/img/ben-about.jpg"
            alt=""
            width="1359"
            height="1713"
            className="rounded-sm shadow-inner w-full max-w-[635px] h-auto"
          />
          <div className="grid gap-4">
            <p>Benjamin John is the owner of Precision Patio Covers LLC, Benjamin John Massive Impact Coaching, Host of Dynamic Duo Podcast, and Guitarist in Primordial Atrocity. He puts massive energy into these different businesses and projects to provide tremendous value and ultimately drive his mission to help others be successful in business and their lives. He gives his full attention and energy to a cause that is greater than himself and is determined to make a difference in people's lives as well as his own. He is constantly learning how to be a better businessman, parent, host, musician, and a genuine person.</p>
            <p>He is a single father of 5 years and his personal goal as a parent is to set such a high standard for his daughter, Mahlia, on how to aggressively take action on her goals. He is committed to sacrificing his time right now so that he can gain time in the future for his daughter.</p>
            <p>He has successfully built a seven figure company during a struggling economy by doing what he was taught from Grant. He has been able to 10X his revenue by learning and applying these skills. Now, he is fortunate that he is able to combine Grant's curriculums with his Massive Impact Coaching to provide tremendous value.</p>
            <p>The things that he is into aside from business are spending time with his daughter on hikes and activities as well as being involved with his local church. He also, is involved with his band as a musician for the past 7 years. Podcast hosting has been a recent hobby of his since early 2020 and he gets enjoyment out of networking, providing value, and learning from other people.</p>
            <p>He is very good at communicating with others. He is meticulous when it comes to understanding how he can help others and commits to executing on that promise to deliver a result. He is great at providing effective guidance for businesses and individuals by one on one coaching or business consulting through teaching what Grant Cardone has taught him and providing direct content to help grow and improve their outcomes.</p>
            <p>“Commit to greatness, Manifest your purpose, Elevate your potential!”</p>
          </div>
        </div>
      </section>
      <hr className="my-8 lg:my-24 max-w-[1400px] mx-auto"/>
      <section className="grid gap-8 lg:gap-24">
        <h2 className="text-center">About Grant Cardone</h2>
        <div className="grid gap-4 lg:flex lg:items-center max-w-7xl mx-auto lg:gap-24">
          <Image 
            src="/img/grant-cardone.png"
            alt=""
            width="1286"
            height="856"
            className="rounded-sm shadow-inner w-full max-w-[635px] h-auto lg:order-2"
          />
          <div className="grid gap-4">
            <p>Best selling Author, Star of Discovery Channel's Undercover Billionaire, TV & Radio personality, self-made entrepreneur, and American Patriot Warrior for the Middle Class. Cardone works with Fortune 100 companies customizing sales processes and improving customer experiences. His clients include Google, Ford, Chrysler, Aflac, Sprint, Wells Fargo, Allstate, State Farm, and more.</p>
            <p>Cardone, 60, believes the middle class is a myth resulting in a failing formula for 250m people. His mission is to provide the middle class with new information and strategies for financial survival.</p>
            <p>Grant Cardone has spent the last 30 years of his career building a content library and a brand that will continue to live on, long after he is gone. His teaching on sales, closing, negotiations, follow-up, cold-calling, motivation, business growth, and personal finances, have reached every corner of the world.</p>
          </div>
        </div>
      </section>
      <hr className="my-8 lg:my-24 max-w-[1400px] mx-auto"/>
      <section className="grid gap-8 lg:gap-24">
        <Image 
            src="/img/ben-and-grant.jpg"
            alt=""
            width="800"
            height="628"
            className="rounded-sm shadow-inner w-full max-w-[635px] mx-auto h-auto lg:order-2"
          />
      </section>
    </main>
  )
}