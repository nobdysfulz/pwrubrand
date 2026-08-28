(function(){
const { SectionHeading, Accordion, Button, Badge, StatBlock, TestimonialCard, CTABanner, Card, Icon } = window.PowerUnitCoachingDesignSystem_dff922;
const wrap = window.pwruWrap, section = window.pwruSection;
const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';

function Breadcrumb({ trail }) {
  return (
    <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 22 }}>
      {trail.map((t, i) => <React.Fragment key={t}>{i > 0 && <span style={{ color: 'var(--ink-300)' }}>/</span>}<span style={{ color: i === trail.length - 1 ? 'var(--pwru-magenta-600)' : 'var(--text-muted)' }}>{t}</span></React.Fragment>)}
    </div>
  );
}

const LEARN = [
  ['calendar-check', 'On Your Schedule', 'Fully on-demand. No scheduled calls, no mandatory sessions. Train when it fits your day.'],
  ['trophy', 'Gamified to Keep You Moving', 'Leaderboards, badges, and points make the learning process competitive and measurable.'],
  ['message-square-quote', 'Scripts and Objection Handling', 'Every pillar includes the actual language for consultations, listing appointments, and follow-up calls.'],
  ['life-buoy', 'Ask A Coach', 'Community Q&A built into the platform. Get answers to real questions from your actual pipeline.'],
];

function UniversityScreen() {
  return (
    <div>
      <section style={{ background: 'var(--gradient-paper)', paddingBlock: '56px 72px' }}>
        <div style={wrap}>
          <Breadcrumb trail={['Home', 'Training Solutions', 'PWRU University']} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 56, alignItems: 'center' }}>
            <div>
              <Badge tone="violet">PWRU University · $49/mo</Badge>
              <h1 style={{ marginTop: 18, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 46, lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--text-strong)', textWrap: 'balance' }}>
                The Real Estate Training Platform for Agents Who Want a System, Not Just Content
              </h1>
              <p style={{ marginTop: 18, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
                PWRU University is built on the PULSE Method™ — a 6-pillar framework that takes agents from inconsistent production to 3 or more closings a month.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
                <Button size="lg" variant="gradient">Try Free for 7-Days</Button>
                <Button size="lg" variant="outline">Watch the VSL</Button>
              </div>
            </div>
            <img src="../../assets/6-pillar-framework-book-cover.png" alt="The 6-Pillar Success Framework workbook"
              style={{ width: '100%', borderRadius: 6, boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      <section style={section()}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <SectionHeading eyebrow="The problem" title="Why Most Real Estate Training Doesn't Work" />
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 'var(--leading-relaxed)' }}>
              Agents who close 3 or more deals a month consistently don't hustle harder than everyone else. They run a system. They know what to do, when to do it, and why it works.
            </p>
            <p style={{ fontSize: 16, lineHeight: 'var(--leading-relaxed)' }}>
              Most real estate training never teaches that. It gives you motivation, or scattered content with nothing connecting it. Neither produces a repeatable system.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--pwru-magenta-600)' }}>PWRU University does.</p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {LEARN.map(([ic, t, b]) => (
              <Card key={t} padding={20} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ width: 40, height: 40, flex: '0 0 auto', borderRadius: 'var(--radius-sm)', background: 'var(--surface-brand-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={ic} size={20} color="var(--pwru-magenta-500)" />
                </span>
                <span>
                  <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--text-strong)' }}>{t}</strong>
                  <span style={{ fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.55 }}>{b}</span>
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-subtle)', ...section({ paddingBlock: 'var(--section-y-tight)' }) }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <SectionHeading eyebrow="Common questions" title="What agents ask before they start" />
          </div>
          <Accordion items={[
            { title: 'Is this the same as BPS?', body: 'No. PWRU University is for individual agents who want to invest in their own training. BPS is a bulk-licensed platform brokers provide to their entire team, with admin controls and white-label branding.' },
            { title: 'How is the learning structured?', body: 'Scenario-based and interactive. You are practicing decisions, not just watching someone explain them. Every lesson maps back to one of the six pillars.' },
            { title: 'What does it cost?', body: 'Just $49/month. Cancel anytime. Create a free account to unlock 7 days of full access.' },
          ]} />
        </div>
      </section>

      <section style={section({ paddingBlock: 'var(--section-y-tight)' })}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, alignItems: 'center' }}>
          <StatBlock value="6+" label="years of curriculum development behind every lesson." />
          <StatBlock value="100+" label="bite-sized courses, scripts, and printable workbooks." />
          <TestimonialCard avatar={IMG + 'claudia_image.png'} name="Claudia Esmeralda Garzon" role="Miami, FL"
            quote="I've been active for a month and a half and have converted 11 leads so far." />
        </div>
      </section>

      <section style={{ paddingBottom: 'var(--section-y)' }}>
        <div style={wrap}><CTABanner tone="ink" title="Try PWRU University Today" body="Create a free account to unlock 7 days of full access." note="Just $49/month. Cancel Anytime." primaryLabel="Try Free for 7-Days" /></div>
      </section>
    </div>
  );
}
window.UniversityScreen = UniversityScreen;

})();
