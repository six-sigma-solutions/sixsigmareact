function TermsConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white mt-24 mb-12 rounded-2xl shadow-sm">
      
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-slate-500">
          Effective Date: January 2026
        </p>
      </header>

      <div className="space-y-10 text-sm leading-relaxed text-slate-700">

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website, you agree to be bound by these Terms and Conditions.
            If you do not agree, you must discontinue use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            2. Website Usage
          </h2>
          <p>
            Content is provided for general informational purposes only and may change
            without notice. Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            3. Intellectual Property Rights
          </h2>
          <p>
            All content, designs, logos, graphics, and materials are owned by
            Six Sigma Solutions and protected under applicable intellectual
            property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            4. Services & Training
          </h2>
          <p>
            All consulting and training services are subject to availability,
            scope definitions, pricing agreements, and written contracts
            where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            5. User Responsibilities
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide accurate information</li>
            <li>Not misuse or interfere with the website</li>
            <li>Not upload harmful or illegal content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            Six Sigma Solutions shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from website use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            7. Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites.
            We are not responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            8. Termination
          </h2>
          <p>
            We reserve the right to restrict or terminate access without notice
            if these terms are violated.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            9. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance
            with the laws of India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy mb-2">
            10. Contact Information
          </h2>
          <address className="not-italic">
            <p>
              Email:&nbsp;
              <a
                href="mailto:sixsigmaspvs@gmail.com"
                className="text-teal font-semibold hover:underline"
              >
                sixsigmaspvs@gmail.com
              </a>
            </p>
            <p>
              Phone:&nbsp;
              <a
                href="tel:+919884590009"
                className="text-teal font-semibold hover:underline"
              >
                +91 98845 90009
              </a>
            </p>
          </address>
        </section>

      </div>
    </main>
  );
}

export default TermsConditions;
