import LumaButton from '../components/LumaButton'

export default function Events() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#2c1a0e]">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-20 pb-10 sm:pb-16">
        <div className="border-t border-[#c8b99a] pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7a5c42] mb-3">
            Sunday, June 28, 2026
          </p>
          <h2 className="text-xl font-semibold text-[#2c1a0e] mb-1">
            Anthropic the Angel?
          </h2>
          <p className="text-sm text-[#7a5c42] mb-3">Sheep's Meadow, NYC · 3:00 PM</p>
          <p className="text-sm text-[#4a3222] mb-3">
            A discussion on Anthropic's partnership with the Pope — the Vatican's take on humanity in the age of AI.
          </p>
          <p className="text-xs text-[#7a5c42]">
            Reading:{' '}
            <a
              href="https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#2c1a0e] transition-colors"
            >
              Magnifica Humanitas
            </a>
          </p>
        </div>

        <div className="border-t border-[#c8b99a] pt-8 mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7a5c42] mb-3">
            Thursday, May 21, 2026
          </p>
          <h2 className="text-xl font-semibold text-[#2c1a0e] mb-1">
            How will we know when we have AGI?
          </h2>
          <p className="text-sm text-[#7a5c42] mb-4">Little Island, NYC · 5:30 PM</p>
          <LumaButton />
        </div>
      </section>
    </main>
  );
}
