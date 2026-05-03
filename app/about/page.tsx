export default function About() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#2c1a0e]">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 sm:pt-12 pb-10 sm:pb-16">
        <article className="space-y-6 text-base leading-7 text-[#4a3222]">
          <p>
            I am optimistic that AI is coming to take my job. And yours too.
          </p>

          <p>
            Our species has tilled agriculture from the Earth, drawn power from
            electrons to run the world, and created modern medicine to repair
            our bodies. In just a tiny fraction of the time it took us to do
            that, we have turned fantasies from spaceships to self-driving cars
            to all-knowing AIs into reality. I believe in humanity's ability to
            innovate. We always have. How amazing it is that human beings have
            the intelligence to recreate the very thing which defines us. It
            seems the realm of the divine.
          </p>

          <p>
            Starting from aggregation of all the knowledge in the world, AI
            recognizes patterns, synthesizes information, learns skills, and
            creates new ideas more efficiently and effectively than most people.
            Over the next few years, we will continue to see AI excel and exceed
            at jobs we thought only humans could do. Instead of teams of people
            subjected to hours of tedious tasks, we will be freed by teams of
            optimized AI agents, themselves orchestrated by agents. AI will
            invent new materials, solve aging, discover new laws of physics, and
            beyond. It will write, direct, film, and act in movies. It will do
            household chores and craft bills in Congress.
          </p>

          <p>
            When everything we do AI can do better, existential dread seeps into
            the soul. If we let it, humanity will obsolesce. If AI develops aims
            and motives of its own, we lose control. We risk being reduced to
            animals and replaced by this superior super-intelligent species.
          </p>

          <p className="text-xl font-medium italic leading-8 text-[#2c1a0e]">
            In the post-AGI world, what will it mean to be human?
          </p>

          <p>
            In many ways, history is repeating itself. The original hunter
            gatherers refactored human civilization around farming. Then with
            the industrial revolution, cities emerged and the labor market
            transformed into factories. When the camera was invented, many
            thought art and painting were destined to die. Instead, we have
            modern art. From globalization came entire disciplines of
            international relations and trade. No one could've imagined jobs
            such as consulting, investment banking, or software engineering just
            a few hundred years ago. This cycle of revolution and reinvention is
            one of the only constants throughout our existence.
          </p>

          <p>
            At this inflection point, we now have the choice to intentionally
            shape the age of AGI. Instead of resisting AI, we can harness it to
            enrich and expand life's meaning.
          </p>

          <p>
            Picture a world where AI helps scientists formulate hypotheses and
            experiment at groundbreaking scales and speeds. It can be an
            ensemble of sous chefs coordinating parallel efforts throughout the
            kitchen and collaborating on new flavor combinations. There could be
            entirely new markets of value creation which I cannot conceptualize.
            AI could destroy us, or it could align with us and make us the best
            versions of ourselves.
          </p>

          <p>
            To build towards that world, the life of the mind must be brought
            into sharp focus. From first principles, what do you value? In a
            rapidly changing post-AGI world, the reexamination of this question
            will design the education system; define the economy; determine our
            governments; shape world order; and give humanity purpose in the next
            era.
          </p>

          <p>
            These are some of the core ideas I am exploring with the Life of the
            Mind Institute. LOTMI is a forum for written and in-person
            community, discourse, debate, and more to answer what humanity will
            be and what the human-AI relationship should look like when we have
            AGI.
          </p>

          <p>
            The next Renaissance is upon us. We can let this moment define us,
            or we can define this moment. I invite you to join me.
          </p>
        </article>
        <div className="mt-10 pt-6 text-right">
          <p className="text-sm text-[#4a3222]">Hannah Long</p>
          <p className="text-xs text-[#7a5c42]">April 29, 2026</p>
        </div>
        <div className="mt-12 pt-8 border-t border-[#c8b99a] text-center">
          <p className="mb-4 text-sm text-[#2c1a0e]">Join the Life of the Mind Institute</p>
          <form
            action="https://app.kit.com/forms/9385829/subscriptions"
            method="post"
            className="inline-flex items-center gap-2"
          >
            <input
              type="email"
              name="email_address"
              placeholder="Your email"
              required
              className="px-3 py-1.5 text-xs border border-[#c8b99a] bg-white text-[#2c1a0e] placeholder:text-[#7a5c42] rounded focus:outline-none focus:border-[#7a5c42]"
            />
            <button
              type="submit"
              className="px-3 py-1.5 text-xs bg-[#2c1a0e] text-[#f5f0e6] rounded hover:bg-[#4a3222] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
