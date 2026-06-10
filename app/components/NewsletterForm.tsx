"use client";


export default function NewsletterForm() {
  return (
    <>

      <div className="mx-auto max-w-2xl rounded-3xl border border-[#d6b26e]/30 bg-[#fff8f3] p-8 shadow-2xl">
        <h2
          className="text-4xl font-bold text-[#3b071d]"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Join the Newsletter
        </h2>

        <p className="mt-4 text-lg leading-8 text-[#5b2034]">
          Enter Aurorium for exclusive lore, character reveals, artwork, and
          updates from Ella Novell.
        </p>

        <form
          
          id="sib-form"
          method="POST"
          action="https://410fbf74.sibforms.com/serve/MUIFAGjXz5gA7JZND9a-4Lv9cQQhGVjTSUf_zfJJyjPFcYV3HB8qG9er2-tSMjjfMoAW_CU7GT-ZB9NswodZWhISFPzeV2f37fYMBeXwDVOug-zhddhhvNOYx4RXihr4SvDxAV6mU6DFlSkbgrY7MQ6cfcynhZr2nTJ-NdWk5_3JdQkLgusfjvTmBpVI6wUxyRH0dk49b6maJtsRpQ=="
          data-type="subscription"
          className="mt-8"
        >
          <label
            htmlFor="EMAIL"
            className="block text-left font-semibold text-[#3b071d]"
          >
            Email Address
          </label>

          <input
            id="EMAIL"
            name="EMAIL"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-3 w-full rounded-full border border-[#d6b26e]/50 bg-white px-6 py-4 text-[#3b071d] outline-none focus:border-[#6e0f33]"
          />

          <input
            type="text"
            name="email_address_check"
            value=""
            className="hidden"
            readOnly
          />

          <input type="hidden" name="locale" value="en" />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#5a0c2a]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}