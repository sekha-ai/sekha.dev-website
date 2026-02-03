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
            Everyone builds memory <em>inside</em> agents. We're building memory as a separate, self-governed system.
          </p>
        </div>

      <div className="space-y-3 reveal">
        {comparisons.map((item) => (
          <div 
            key={item.name}
            className={`p-5 rounded-xl border transition-all duration-200 hover:border-opacity-50 ${
              item.highlight 
                ? 'glass border-sekha-500/40 bg-gradient-to-r from-sekha-500/10 to-transparent' 
                : 'glass border-white/5 hover:border-white/10'
            }`}
          >
            <div className="grid md:grid-cols-[1.2fr,1.5fr,auto] gap-6 items-center">
              {/* Left: Name with icon */}
              <div className="flex items-center gap-3">
                {item.highlight && (
                  <span className="text-2xl">𓋴𓆼𓄿𓀁𓆑</span>
                )}
                <div>
                  <h3 className={`font-bold ${item.highlight ? 'text-white text-lg' : 'text-gray-300'}`}>
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.approach}</p>
                </div>
              </div>

              {/* Middle: Features/Weaknesses as tags instead of list */}
              <div className="flex flex-wrap gap-2">
                {item.missing ? (
                  item.missing.map((m, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-400/80 border border-red-500/20">
                      × {m}
                    </span>
                  ))
                ) : (
                  item.strengths?.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      ✓ {s}
                    </span>
                  ))
                )}
              </div>

              {/* Right: Ownership badge */}
              <div className="md:text-right">
                <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${
                  item.owns === "you"
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
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
          Sekha is a <span className="text-sekha-100">separate, self-governed system</span> that agents consult but don't own.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;