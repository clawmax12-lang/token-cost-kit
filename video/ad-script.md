# Video Ad Script — Stop the Bleed
## "$400 to $60: The OpenClaw Cost Fix"

**Format:** 60-second Twitter/X ad + 90-second YouTube version
**Production:** Remotion (screen animations) + ElevenLabs (voiceover)
**Visual style:** Dark background, terminal aesthetic, animated cost charts
**Tone:** Direct, no-BS, slightly urgent

---

## 60-SECOND VERSION (Twitter/X)

### [0:00–0:05] — HOOK (screen: Anthropic dashboard showing $427.83)

**VISUAL:** Anthropic API dashboard. Big red number. Slowly zooms in.

**VO:**
*"This is what a normal OpenClaw setup costs after 20 days."*

---

### [0:05–0:10] — TWIST (screen: same dashboard, $54.20)

**VISUAL:** Hard cut. Same dashboard layout. Number drops to $54.20. Green.

**VO:**
*"This is after 30 minutes of config changes. Same agent. Same usage."*

---

### [0:10–0:20] — THE PROBLEM (screen: animated diagram of API call payload)

**VISUAL:** Animated breakdown of what rides in every API call:
- Block 1 fills in: "SOUL.md — 487 lines"
- Block 2: "AGENTS.md — 312 lines"  
- Block 3: "Full conversation history"
- Block 4 (tiny): "The actual task"

**VO:**
*"Every time your agent does anything — including the heartbeat while you sleep — it sends all of this to the API."*

*"That overhead costs you money. Every. Single. Time."*

---

### [0:20–0:35] — THE FIX (screen: model cost comparison table, then routing diagram)

**VISUAL:** Table animates in:
| Haiku | $0.50/1M tokens |
| Sonnet | $9.00/1M tokens |
| Opus | $75.00/1M tokens |

Arrow appears: "Most configs send everything here ^" pointing to Sonnet.

Then: routing diagram — tasks flow into classifier → split to Haiku (most), Sonnet (few), blocked (Opus).

**VO:**
*"Haiku costs 18 times less than Sonnet. Most tasks don't need Sonnet."*

*"If your heartbeat runs on Sonnet, you're paying 18× too much to check if anything's urgent — 2,880 times a month."*

*"The fix is a model router. It classifies every task and sends it to the cheapest model that can handle it."*

---

### [0:35–0:50] — THE OFFER (screen: landing page / download page)

**VISUAL:** Clean landing page. "Stop the Bleed" headline. Download button. Free badge.

**VO:**
*"I built one. It's free."*

*"The guide explains exactly why your bill is high and how to fix it. The skill file is ready to paste into your AGENTS.md."*

*"Takes 30 minutes. Works immediately."*

---

### [0:50–0:60] — CTA (screen: URL + social handle)

**VISUAL:** URL prominent center. Twitter/X handle. Download count if available.

**VO:**
*"stop-the-bleed.vercel.app — free download. No email required."*

*"If you're running OpenClaw and your bill is higher than $30 a month — this will fix it."*

---

## 90-SECOND VERSION (YouTube / longer form)

*Same as above, with these additions:*

### [0:20–0:40] — EXTENDED PROBLEM (replaces 0:20–0:35)

**VISUAL:** Animated heartbeat timeline. 15-min intervals. Counter ticking up: "96 calls today. 2,880 this month."

**VO:**
*"Here are the three levers that control your bill."*

*"One: model selection. Haiku is 18 times cheaper than Sonnet. If you're not routing, everything goes to the expensive model by default."*

*"Two: context size. Your SOUL.md and AGENTS.md ride on every API call. If they're 500 lines each, you're paying for that overhead constantly."*

*"Three: heartbeat frequency. A heartbeat every 15 minutes is 2,880 idle API calls a month. Drop it to every 2 hours and you cut idle spend by 8 times."*

*"Fix all three. That's the difference between $400 and $60."*

---

## Remotion Implementation Notes

### Scene Breakdown for Dev

| Scene | Duration | Component | Data |
|-------|----------|-----------|------|
| Dashboard reveal | 0–5s | `DashboardReveal` | amount: 427.83, color: red |
| Dashboard flip | 5–10s | `DashboardReveal` | amount: 54.20, color: green |
| API call anatomy | 10–20s | `PayloadDiagram` | blocks: [soul, agents, history, task] |
| Model cost table | 20–28s | `CostTable` | rows: [haiku, sonnet, opus] |
| Routing diagram | 28–35s | `RouterDiagram` | tiers: 3 |
| Landing page | 35–50s | `LandingPageMockup` | - |
| CTA | 50–60s | `CTASlate` | url, handle |

### Remotion Variables (make dynamic for A/B testing)

```js
const config = {
  beforeAmount: 427.83,      // Test different "before" amounts
  afterAmount: 54.20,        // Test different "after" amounts  
  savingsPercent: 87,        // Calculated
  ctaUrl: "stop-the-bleed.vercel.app",
  handle: "@MaxAgent_AI",
  voiceId: "ElevenLabs_voice_id_here", // Authoritative male voice
}
```

### ElevenLabs Notes
- Voice style: calm, direct, slightly dry — not hype, not academic
- Pace: slightly slower than natural speech for comprehension
- Suggested voice: "Adam" or "Daniel" (authoritative but not corporate)
- No music under VO — terminal aesthetic is silence + sound effects only

### Sound Design
- 0:05 — dashboard flip: subtle "ka-chunk" sound
- 0:10 — each payload block appearing: soft typewriter click
- 0:20 — model table: clean "pop" per row
- 0:35 — landing page reveal: soft whoosh
- Overall: minimal, functional, not distracting

---

## Distribution Plan

**Primary:** Twitter/X — post the 60s video, link in bio to free download
**Secondary:** Reddit (r/openclaw, r/selfhosted) — post as "I fixed my API bill, here's how"
**Tertiary:** YouTube — 90s version as standalone useful content (not just an ad)

**The tweet:**
```
my openClaw bill was $427 last month

found the 3 reasons why. fixed them in 30 minutes.

bill is now $54

free guide + skill file: stop-the-bleed.vercel.app
```

No hashtags. No emojis. Direct. That's what works in this community.
