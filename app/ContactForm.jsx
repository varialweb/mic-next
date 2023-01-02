'use client'

export default function ContactForm() {

  function handleSubmit(event) {
    event.preventDefault()

    console.log('submit')
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white text-black w-full max-w-2xl mx-auto rounded-sm shadow p-4 py-8 lg:px-24 lg:py-12 grid gap-10"
    >
      <p className="text-center font-bold text-[29px] leading-[35px] lg:text-[35px] lg:leading-[42px]">Get More Information</p>
      <div className="grid gap-4">
        <label htmlFor="name">
          Name
          <input
            id="name" 
            name="name"
            placeholder="John Doe"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input 
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@gmail.com"
            required
          />
          
        </label>
        <label htmlFor="phone">
            Phone
            <input 
              id="phone"
              name="phone"
              placeholder="(555) 555-5555"
            />
          </label>
          <label htmlFor="comments">
            Questions or comments
            <textarea 
              id="comments"
              name="comments"
              placeholder="Your message here"
              rows="4"
            />
          </label>
      </div>
      <button
        className="bg-gradient-to-b from-[#FF5E00] to-[#F05800] px-8 py-4 shadow font-semibold text-center text-white rounded"
      >
        Submit
      </button>
    </form>
  )
}