const ComparisonSection = () => {
  const comparisons = [
    {
      name: "Anthropic's File Harness",
      approach: "Writes progress logs to files",
      missing: ["No semantic search", "No structured metadata", "Developer workaround only"],
      owns: "them"
    },
    {
      name: "Mem0 / MemGPT",
      approach: "API-first memory layer",
      missing: ["Requires coding", "No folder/label system", "Limited UX"],
      owns: "them"
    },
    {
      name: "ChatGPT / Claude UI",
      approach: "Cloud storage (30-day limit)",
      missing: ["Ephemeral by design", "Can't export/search own data", "Renting, not owning"],
      owns: "them"
    },
    {
      name: "Browser Extensions",
      approach: "Capture web chats only",
      missing: ["Web-only limitation", "No local LLM support", "No IDE integration"],
      owns: "them"
    },
    {
      name: "Sekha",
      approach: "Universal Memory Controller",
      strengths: ["Library cards + semantic tagging", "Any LLM via MCP/REST", "SQLite you own & query", "Native folder/label system"],
      owns: "you",
      highlight: true
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why This Is Different</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everyone builds memory <em>inside</em> agents. We're building memory as a separate, sovereign system.
          </p>
        </div>

        <div className="space-y-4 reveal">
          {comparisons.map((item, idx) => (
            <div 
              key={item.name}
              className={`p-6 rounded-xl border ${
                item.highlight 
                  ? 'glass border-sekha-500/30 bg-sekha-500/5' 
                  : 'glass border-white/5 bg-white/[0.02]'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-6 items-start">
                {/* Name & Approach */}
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${item.highlight ? 'text-white' : 'text-gray-300'}`}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.approach}</p>
                </div>

                {/* What's Missing / Strengths */}
                <div>
                  {item.missing ? (
                    <ul className="space-y-1">
                      {item.missing.map((m, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-red-400/60 mt-1">×</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-1">
                      {item.strengths?.map((s, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Ownership */}
                <div className="md:text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.owns === "you"
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {item.owns === "you" ? 'You own it' : 'They own it'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm reveal">
          The architectural gap: Everyone builds memory <span className="text-gray-400">inside</span> agents or <span className="text-gray-400">attached</span> to platforms. 
          Sekha is a <span className="text-sekha-100">separate, sovereign system</span> that agents consult but don't own.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;