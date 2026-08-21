"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Linkedin } from "lucide-react";

/**
 * Dr. Ashwani Dhar — /story page (mockup)
 * Same "clinical dossier" system as the profile: greige paper, espresso ink, one light teal accent,
 * Clash Display + Satoshi, mono for record labels. Content is his own first-person story.
 */

const CSS = `
:root{
  --paper:#F7F8F6; --plate:#FFFFFF; --white:#FFFFFF;
  --ink:#0C1511; --ink-soft:#41504A; --ink-faint:#77847D;
  --line:#E6EAE6; --line-strong:#CFD7D1;
  --teal:#0FA478; --teal-deep:#0B7A58; --teal-bright:#2BD9A8;
  --display:var(--font-display),'SF Pro Display',system-ui,-apple-system,sans-serif;
  --sans:var(--font-sans),'SF Pro Text',system-ui,-apple-system,sans-serif;
  --mono:var(--font-mono),ui-monospace,'SF Mono',Menlo,monospace;
  --serif:var(--font-serif),'Instrument Serif',Georgia,serif;
}
*{box-sizing:border-box;margin:0;padding:0}
.adx{background:var(--paper);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;line-height:1.6;font-size:16px;min-height:100vh;overflow-x:hidden}
.adx a{color:inherit;text-decoration:none}
.wrap{max-width:760px;margin:0 auto;padding:0 32px}
.mono{font-family:var(--sans);font-weight:600;letter-spacing:.15em;text-transform:uppercase;font-size:11px}
.data{font-family:var(--mono);font-weight:500;letter-spacing:.08em;text-transform:uppercase;font-size:11px}
.rev{opacity:0;transform:translateY(14px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
.rev.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.rev{opacity:1;transform:none;transition:none}}

/* nav */
.nav{position:sticky;top:0;z-index:40;background:rgba(236,235,229,.85);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav .wrap{max-width:1120px;display:flex;align-items:center;justify-content:space-between;height:66px}
.brand{display:flex;align-items:baseline;gap:11px}
.brand b{font-family:var(--display);font-weight:600;font-size:20px;letter-spacing:-.02em}
.brand span{color:var(--ink-faint)}
.back{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:var(--ink-soft);border:1px solid var(--line-strong);border-radius:999px;padding:8px 16px;transition:.25s}
.back:hover{border-color:var(--teal);color:var(--teal)}
.back svg{transition:.25s}.back:hover svg{transform:translateX(-3px)}

/* header */
.head{padding:72px 0 0}
.crumb{color:var(--ink-faint);margin-bottom:26px}
.crumb b{color:var(--teal)}
.h1{font-family:var(--display);font-weight:600;font-size:52px;line-height:1.03;letter-spacing:-.035em}
.byline{font-family:var(--mono);font-size:12px;letter-spacing:.06em;color:var(--ink-faint);margin-top:22px;text-transform:uppercase}

/* epigraph */
.epi{margin:44px 0 8px;padding:30px 34px;background:var(--plate);border:1px solid var(--line);border-left:3px solid var(--teal);border-radius:12px}
.epi p{font-family:var(--display);font-weight:500;font-size:24px;line-height:1.28;letter-spacing:-.02em;color:var(--ink)}
.epi cite{display:block;font-style:normal;font-family:var(--mono);font-size:11px;letter-spacing:.08em;color:var(--ink-faint);margin-top:16px;text-transform:uppercase}

/* body */
.body{padding:30px 0 0}
.block{padding:44px 0;border-bottom:1px solid var(--line)}
.block .eyebrow{color:var(--teal);margin-bottom:16px;display:block}
.block h2{font-family:var(--display);font-weight:600;font-size:30px;letter-spacing:-.03em;line-height:1.12;margin-bottom:20px}
.block p{font-size:17.5px;color:var(--ink-soft);margin-top:16px;line-height:1.68}
.block p:first-of-type{margin-top:0}
.block p strong{color:var(--ink);font-weight:600}
.block a.inl{color:var(--teal);font-weight:600;border-bottom:1px solid rgba(14,133,119,.35)}
.block a.inl:hover{border-color:var(--teal)}

/* quote */
.pull{margin:8px 0;padding:34px 0}
.pull p{font-family:var(--serif);font-style:italic;font-weight:400;font-size:30px;line-height:1.3;letter-spacing:-.01em;color:var(--ink)}
.pull p .q{color:var(--teal)}

/* timeline */
.tl-sec{padding:64px 0 20px}
.tl-head{margin-bottom:38px}
.tl-head .eyebrow{color:var(--teal);display:block;margin-bottom:12px}
.tl-head h2{font-family:var(--display);font-weight:600;font-size:32px;letter-spacing:-.03em}
.tl{position:relative;padding-left:34px}
.tl::before{content:"";position:absolute;left:5px;top:6px;bottom:10px;width:1px;background:var(--line-strong)}
.tl-row{position:relative;padding:0 0 34px}
.tl-row::before{content:"";position:absolute;left:-34px;top:5px;width:11px;height:11px;border-radius:50%;background:var(--paper);border:2px solid var(--teal)}
.tl-row .ph{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)}
.tl-row h3{font-family:var(--display);font-weight:600;font-size:21px;letter-spacing:-.02em;margin:7px 0 8px}
.tl-row p{color:var(--ink-soft);font-size:15.5px;line-height:1.6;max-width:52ch}

/* connect */
.connect{padding:64px 0 40px;border-top:1px solid var(--line)}
.connect h2{font-family:var(--display);font-weight:600;font-size:32px;letter-spacing:-.03em;line-height:1.08}
.connect p{color:var(--ink-soft);margin-top:14px;font-size:16px}
.cbtns{display:flex;gap:14px;margin-top:26px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:9px;font-size:14px;font-weight:600;padding:13px 22px;border-radius:9px;transition:.25s}
.btn-p{background:var(--teal);color:#F6F5F1}.btn-p:hover{background:var(--teal-deep)}
.btn-g{border:1px solid var(--line-strong);color:var(--ink)}.btn-g:hover{border-color:var(--teal);color:var(--teal)}

/* footer */
.foot{border-top:1px solid var(--line);padding:30px 0 46px}
.foot .wrap{max-width:1120px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
.foot .c{color:var(--ink-faint);font-size:13px}
.foot .loc{font-family:var(--mono);font-size:11px;color:var(--ink-faint);letter-spacing:.06em}

@media(max-width:640px){
  .wrap{padding:0 22px}
  .h1{font-size:38px}
  .epi{padding:24px 22px}.epi p{font-size:21px}
  .block h2{font-size:25px}.block p{font-size:16.5px}
  .pull p{font-size:22px}
  .tl-head h2,.connect h2{font-size:26px}
  .nav .wrap{height:60px}
  .brand span{display:none}
}
`;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = Array.from(ref.current?.querySelectorAll<HTMLElement>(".rev") ?? []);
    const io = new IntersectionObserver(
      (ents) => ents.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el, i) => { if (el instanceof HTMLElement) el.style.transitionDelay = `${Math.min(i % 3, 2) * 70}ms`; io.observe(el); });
    return () => io.disconnect();
  }, []);
  return ref;
}

const TIMELINE = [
  { ph: "01 · Training", t: "Becoming a physician", d: "MD and DMI — a deep grounding in patient care and how healthcare systems actually behave under load." },
  { ph: "02 · Corporate", t: "Cerner / Oracle Health", d: "Senior physician executive and Chief Medical Informatics Officer, bridging clinical practice and health IT." },
  { ph: "03 · Platform", t: "ThinkRoman Ventures", d: "Founded a healthcare-innovation ecosystem — a place for many solutions to grow, not just one company." },
  { ph: "04 · Research", t: "Kairos R&D Solutions", d: "A specialized CRO making clinical research faster, cheaper, and open to sponsors of every size." },
  { ph: "05 · Access", t: "TrPharma & KashMOX", d: "Quality WHO-GMP medicines brought directly to patients — developed by the doctor who prescribes them." },
];

export default function Story() {
  const ref = useReveal();
  return (
    <div className="adx" ref={ref}>
      <style>{CSS}</style>

      <nav className="nav">
        <div className="wrap">
          <Link href="/" className="brand"><b>Ashwani Dhar</b><span className="data">MD · DMI</span></Link>
          <Link href="/" className="back"><ArrowLeft size={15} /> Profile</Link>
        </div>
      </nav>

      <header className="head">
        <div className="wrap">
          <div className="mono crumb rev">Profile / <b>My Story</b></div>
          <h1 className="h1 rev">From physician<br/>to entrepreneur.</h1>
          <div className="byline rev">Dr. Ashwani Dhar · MD, DMI · In his own words</div>

          <blockquote className="epi rev">
            <p>&ldquo;I became a physician to help patients. I became an entrepreneur to help millions more.&rdquo;</p>
            <cite>Dr. Ashwani Dhar</cite>
          </blockquote>
        </div>
      </header>

      <main className="body">
        <div className="wrap">
          <section className="block rev">
            <span className="eyebrow mono">Why I started</span>
            <h2>The gaps were impossible to unsee</h2>
            <p>As a practicing physician, I saw firsthand the gaps in our healthcare system. Patients struggled to access quality medications at affordable prices. Clinical trials were slow and inefficient. The disconnect between clinical care and healthcare innovation was striking.</p>
            <p>My time at <strong>Cerner / Oracle Health</strong> as Chief Medical Informatics Officer taught me how technology could transform healthcare delivery. But I wanted to do more than advise from the sidelines — I wanted to build solutions that would directly impact patient lives.</p>
            <p>That&apos;s why I founded <strong>ThinkRoman Ventures</strong>: a platform where my clinical experience could fuel healthcare innovation. It was never about starting one company. It was about building an ecosystem where many healthcare solutions could flourish.</p>
          </section>

          <section className="block rev">
            <span className="eyebrow mono">The birth of Kairos</span>
            <h2>The opportune moment</h2>
            <p>Clinical research is the backbone of medical progress, yet the process was plagued by inefficiencies. Patient recruitment took forever. Documentation was a nightmare. Smaller sponsors struggled to compete.</p>
            <p><a className="inl" href="/kairos">Kairos R&amp;D Solutions</a> was my answer — a CRO that leverages AI for patient matching, streamlines documents through <strong>Kairodox</strong>, and makes research accessible to sponsors of every size.</p>
            <p>The name &ldquo;Kairos&rdquo; is Greek for the opportune moment — the perfect time to act. In clinical research, timing is everything. We help our partners seize it.</p>
          </section>

          <section className="block rev">
            <span className="eyebrow mono">TrPharma &amp; KashMOX 625</span>
            <h2>Medicine by someone who prescribes it</h2>
            <p>In my years of practice, I prescribed antibiotics countless times. I knew which ones worked best and which ones patients struggled to afford. The gap between quality and accessibility troubled me.</p>
            <p><a className="inl" href="/trpharma">TrPharma</a> was born from that frustration — a pharmaceutical division that combines clinical knowledge with manufacturing excellence. <a className="inl" href="/products/kashmox">KashMOX 625</a> became our flagship: a WHO-GMP certified Amoxicillin-Clavulanate antibiotic with the efficacy of premium brands at an accessible price.</p>
            <p>We followed with <strong>One87 Plus</strong> for pain management and <strong>KashCAL Plus</strong> for bone health — each developed with the same physician-first approach.</p>
          </section>

          <section className="block rev" style={{ borderBottom: "none", paddingBottom: 8 }}>
            <span className="eyebrow mono">My philosophy</span>
            <h2>Doctor-led innovation</h2>
            <p>Healthcare innovation should be led by people who understand patient care at its core — not from business cases or market research, but from years of sitting with patients, understanding their fears, and witnessing their recoveries.</p>
          </section>

          <div className="pull rev">
            <p>Every decision runs through one question: <span className="q">&ldquo;Would I prescribe this to my own family?&rdquo;</span></p>
          </div>
        </div>
      </main>

      <section className="tl-sec">
        <div className="wrap">
          <div className="tl-head rev">
            <span className="eyebrow mono">The journey so far</span>
            <h2>Five moves, one thesis</h2>
          </div>
          <div className="tl">
            {TIMELINE.map((r) => (
              <div className="tl-row rev" key={r.ph}>
                <div className="ph">{r.ph}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="connect">
        <div className="wrap">
          <div className="rev">
            <h2>Let&apos;s connect</h2>
            <p>Clinical research, pharmaceutical distribution, or healthcare innovation — I&apos;d like to hear about it.</p>
            <div className="cbtns">
              <a className="btn btn-p" href="https://www.linkedin.com/in/ashwanidhar" target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn</a>
              <Link className="btn btn-g" href="/">View full profile <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="c">© 2026 Dr. Ashwani Dhar</div>
          <div className="loc">CALIFORNIA, USA · OVERSEAS — INDIA</div>
        </div>
      </footer>
    </div>
  );
}
