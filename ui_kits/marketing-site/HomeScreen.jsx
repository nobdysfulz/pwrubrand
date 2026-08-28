(function(){
const { SiteHeader, SiteFooter, SectionHeading, FeatureCard, PillarCard, PricingCard,
  TestimonialCard, StatBlock, CTABanner, Button, Badge, Icon, Card } = window.PowerUnitCoachingDesignSystem_dff922;

const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';
const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 40px' };
const section = (extra) => ({ padding: 'var(--section-y) 0', ...extra });

function Hero({ go }) {
  return (
    <section style={{ position: 'relative', minHeight: 560, display: 'flex', alignItems: 'center', background: `var(--ink-900) url(${IMG}pwru-hero-background.jpg) center/cover no-repeat` }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(13,13,13,.92) 0%,rgba(13,13,13,.72) 48%,rgba(79,30,134,.45) 100%)' }} />
      <div style={{ ...wrap, position: 'relative', paddingBlock: 72 }}>
        <Badge tone="solid">Since 2018 · 90,000+ agents</Badge>
        <h1 style={{ maxWidth: 780, marginTop: 20, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-display-2)', lineHeight: 1.04, letterSpacing: '-0.03em', color: 'var(--white)', textWrap: 'balance' }}>
          Real Estate Coaching Built on a System. Not Just Motivation.
        </h1>
        <p style={{ maxWidth: 620, marginTop: 20, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: 'rgba(255,255,255,.76)' }}>
          Power Unit Coaching gives agents a structured production framework, daily AI-powered execution tools, and brokers a white-label training platform they can deploy on day one.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <Button size="lg" variant="gradient" onClick={() => go('Solutions')}>I'm an Agent</Button>
          <Button size="lg" variant="outline-inverse" onClick={() => go('Teams')}>I'm a Broker or Team Leader</Button>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  ['Foundation', 'Mindset, business structure, and the systems that have to be in place before everything else.'],
  ['Lead Capture', "Build a pipeline across multiple channels so your business doesn't stall when one source dries up."],
  ['Nurture', 'The follow-up systems that keep leads moving so you stop losing deals to agents who stayed in touch.'],
  ['Closing', 'Scripts, objection handling, appointment setting, and how to convert conversations into contracts.'],
  ['Back Office', 'The operational side of real estate that most training completely ignores.'],
  ['Referral Systems', 'A database and referral engine so your business generates leads from work already done.'],
];

function HomeScreen({ go }) {
  const [pillar, setPillar] = React.useState(1);
  return (
    <div>
      <Hero go={go} />
      <section style={section()}>
        <div style={wrap}>
          <SectionHeading align="center" maxWidth={860} eyebrow="Why we exist"
            title="A Real Estate Training Platform Built for How the Business Actually Works"
            lede="Most real estate coaching gives you content and calls it training. We give you a production system, a daily plan to run it, and for brokers, a fully built platform to put in front of your entire roster." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }}>
            <FeatureCard image={IMG + 'training1.jpg'} title="Real Estate Training Built on a System" body="PWRU University's 6-pillar curriculum takes agents from inconsistent production to 3+ closings a month." linkLabel="Explore PWRU University" />
            <FeatureCard image={IMG + '8.jpg'} title="AI-Powered Daily Action Plans" body="Replaces up to 12 standalone tools. PULSEIntel PRO builds your personalized daily plan every morning." linkLabel="See PULSEIntel PRO" />
            <FeatureCard image={IMG + '9.jpg'} title="White-Label Training for Brokerages" body="A complete, branded training platform brokers deploy to their full roster without building a single lesson." linkLabel="See BPS" />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-subtle)', ...section() }}>
        <div style={wrap}>
          <SectionHeading eyebrow="The PULSE Method™" title="Six pillars. One production system." lede="Every course, script, and lesson inside the platform connects back to the same framework." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }}>
            {PILLARS.map(([t, b], i) => (
              <PillarCard key={t} number={i + 1} title={t} body={b} active={pillar === i} onClick={() => setPillar(i)} />
            ))}
          </div>
        </div>
      </section>

      <section style={section()}>
        <div style={wrap}>
          <SectionHeading align="center" eyebrow="Member proof" title="What Our Members Have to Say" maxWidth={620} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 44 }}>
            <TestimonialCard result="22 deals closed" avatar={IMG + 'paula-aponte.jpg'} name="Paula A." role="LPT Realty"
              quote="That was a direct result of this program. I didn't have the confidence. I was scared. You don't know what you don't know." />
            <TestimonialCard avatar={IMG + 'mario.jpg'} name="Mario E." role="Keller Williams Realty"
              quote="A special thanks to Power Unit for helping me make the most money in my office last month, and in my first year in the business." />
            <TestimonialCard avatar={IMG + 'bayo.jpg'} name="Bayo A." role="Integrity Edge Realty"
              quote="I built a real estate business that replaced my income and gave me freedom. It's not just training; it's transformation." />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ink-900)', ...section({ paddingBlock: 'var(--section-y-tight)' }) }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          <StatBlock tone="inverse" value="1000's" label="agents helped since 2018 — six years refining the system." />
          <StatBlock tone="inverse" value="90,000+" label="subscribers reached by Power Unit Coaching training content." />
          <StatBlock tone="inverse" value="3+" label="closings a month is the outcome the curriculum trains toward." />
        </div>
      </section>

      <section style={section()}>
        <div style={wrap}>
          <SectionHeading align="center" eyebrow="Pricing" title="Simple Pricing. No Guesswork." maxWidth={620}
            lede="Most real estate coaching costs $1,000 to $2,000 a month. Both plans cancel anytime." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 44, alignItems: 'start' }}>
            <PricingCard name="PWRU University" blurb="For agents who want a structured production system on their own schedule." price="$49"
              features={['100+ bite-sized courses and lessons', 'Printable workbooks', 'Branding and marketing templates', 'Built-in accountability and tracking']} ctaLabel="Try 7-Days Free" />
            <PricingCard featured name="PULSEIntel PRO" blurb="For agents who want AI to build their daily plan and replace up to 12 standalone tools." price="$99"
              features={['Daily AI Action Plan, CRM & Content Studio', 'Role-Play Simulator & Script Library', 'AI Business Advisor', 'CMA Generator', 'Lead Generation System']} ctaLabel="Get Started" />
            <PricingCard name="Teams / Brokers" blurb="For brokers who need a white-label training platform deployed to their full roster." price="Let's Chat" period=""
              priceNote="Starts at $19/mo per agent." features={['A "Plug & Play" Recruiting Kit', 'Custom branded onboarding paths', 'Real-time performance dashboards', 'A fully white-labeled brand campus']} ctaLabel="More Info" />
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 'var(--section-y)' }}>
        <div style={wrap}>
          <CTABanner title="Stop guessing. Start performing."
            body="Not sure which product fits where you are? Talk to a Power Unit Coaching expert and we will point you in the right direction."
            note="Contact a Power Unit Coaching expert today at 1-888-437-7978" primaryLabel="Contact Us Now" secondaryLabel="See Pricing" />
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
window.pwruWrap = wrap;
window.pwruSection = section;

})();
