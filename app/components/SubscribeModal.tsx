'use client'

import { useState } from 'react'

export default function SubscribeModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleClose() {
    setOpen(false)
    setSubmitted(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-1.5 text-sm bg-[#2c1a0e] text-[#f5f0e6] rounded hover:bg-[#4a3222] transition-colors whitespace-nowrap"
      >
        Join
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
          <div className="relative bg-[#f5f0e6] border border-[#c8b99a] rounded-lg p-8 max-w-sm w-full mx-4 shadow-xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#7a5c42] hover:text-[#2c1a0e] transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <h2 className="text-base font-semibold uppercase tracking-wider text-[#2c1a0e] mb-2">
              Join the Life of the Mind Institute
            </h2>

            {submitted ? (
              <p className="text-sm text-[#4a3222] mt-4">
                Success! Check your email to confirm your subscription.
              </p>
            ) : (
              <>
                <p className="text-sm text-[#7a5c42] mb-5">
                  Receive updates on new essays, events, and discussions.
                </p>
                <iframe name="kit-modal-frame" style={{ display: 'none' }} />
                <form
                  action="https://app.kit.com/forms/9385829/subscriptions"
                  method="post"
                  target="kit-modal-frame"
                  onSubmit={() => setSubmitted(true)}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email address"
                    required
                    className="px-3 py-2 text-sm border border-[#c8b99a] bg-white text-[#2c1a0e] placeholder:text-[#7a5c42] rounded focus:outline-none focus:border-[#7a5c42]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-[#2c1a0e] text-[#f5f0e6] rounded hover:bg-[#4a3222] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
