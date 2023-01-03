'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from "react"

import Spinner from "./Spinner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_CLIENT_KEY
  const [verified, setVerified] = useState(false)
  const [verifyError, setVerifyError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const { name, email, phone, comments } = event.target

    if (!verified) return setVerifyError('Please verify that you are human.')

    setVerifyError('')
    setLoading(true)

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        comments: comments.value,
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        setSent(true)
      } else {
        if (response.error_message === 'client mail gun error') setSent(true)
        if (response.error_message === 'mail gun error') setError('Server error. Please try again later.')
      }

      setLoading(false)
    })
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
      <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={value => setVerified(value ? true : false)}
            />
            {verifyError && <p className="text-red-700 font-medium inline">{verifyError}</p>}
      <button
        className="bg-gradient-to-b flex justify-center from-[#FF5E00] to-[#F05800] px-8 py-4 shadow font-semibold text-center text-white rounded"
        disabled={sent || loading}
      >
        {sent ? (
          'Message sent!'
        ) : (
          loading ? (
            <Spinner width="16" height="16" />
          ) : (
            'Submit'
          )
        )}
      </button>
    </form>
  )
}