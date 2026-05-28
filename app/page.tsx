export default function Page() {
  const faqs = [
    {
      q: 'How does the rank tracking work?',
      a: 'We run daily automated searches on Etsy for your target keywords and record exactly where your listings appear in the results, giving you a full position history over time.'
    },
    {
      q: 'Can I track competitor listings too?',
      a: 'Yes. Add any Etsy listing URL as a competitor and we will track its rank movements alongside yours so you can spot trends and react quickly.'
    },
    {
      q: 'What optimization tips do I get?',
      a: 'Based on your ranking data we surface actionable suggestions — title tweaks, tag improvements, and pricing signals — drawn from top-performing listings in your niche.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Etsy Seller Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly where your{' '}
          <span className="text-[#58a6ff]">Etsy listings rank</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Daily keyword rank tracking, competitor monitoring, and smart optimization tips — built for serious Etsy sellers who want to grow.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Tracking — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '📈', label: 'Daily rank snapshots' },
            { icon: '🔍', label: 'Competitor tracking' },
            { icon: '💡', label: 'Optimization tips' }
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
              <span className="text-xl">{f.icon}</span>
              <span className="text-sm font-medium text-[#c9d1d9]">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">All-inclusive</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Track up to 50 keywords',
              'Monitor 20 competitor listings',
              'Daily automated rank checks',
              'Historical ranking charts',
              'Email alerts on rank changes',
              'Optimization recommendations'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Etsy Keyword Rank Tracker. All rights reserved.
      </footer>
    </main>
  )
}
