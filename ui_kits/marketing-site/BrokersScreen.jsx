(function(){
const { SectionHeading, Card, Icon, Button, Badge, Input, Checkbox, TestimonialCard, CTABanner, Tag } = window.PowerUnitCoachingDesignSystem_dff922;
const wrap = window.pwruWrap, section = window.pwruSection;
const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/06/';

const GET = [
  ['palette', 'Your Brand. Our Content.', 'Agents see your name, your logo, and your colors. Not a third-party tool. Not a franchise portal.'],
  ['rocket', 'Deploy on Day One.', 'Assign structured training tracks the moment an agent joins. No setup delays, no content to create.'],
  ['bar-chart-3', "See Who's Doing the Work.", 'Broker dashboards show completion, activity, and progress across your full roster.'],
  ['trophy', 'Built to Drive Engagement.', 'Leaderboards, points, and gamification keep agents competing instead of waiting on you.'],
  ['mic', 'AI Role-Play Simulations.', 'Agents practice objection handling and scripts before they are in front of a real client.'],
  ['refresh-cw', 'Ongoing Content Updates.', 'Built on the PULSE Method and updated as the market changes. You never touch it.'],
];

function BrokersScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <section style={{ background: 'var(--gradient-ink)', paddingBlock: 76, color: 'rgba(255,255,255,.75)' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Badge tone="solid">Brokerage Performance Suite</Badge>
            <h1 style={{ marginTop: 18, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 46, lineHeight: 1.06, letterSpacing: '-0.03em', color: 'var(--white)', textWrap: 'balance' }}>
              The White-Label Training Platform That Turns Your Agents Into Producers
            </h1>
            <p style={{ marginTop: 18, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)' }}>
              BPS is a white-label training platform brokers license, brand, and deploy to their full agent roster. The curriculum is already built. Your agents see your brand on it from day one.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 26 }}>
              <Tag>Recruiting kit</Tag><Tag>Branded onboarding</Tag><Tag>Roster dashboards</Tag><Tag>AI role-play</Tag>
            </div>
          </div>
          <Card padding={28} style={{ background: 'var(--white)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, color: 'var(--text-strong)', margin: '0 0 6px' }}>Book a live 1:1 demo</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>Starts at just $19/mo per agent.</p>
            {sent ? (
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '18px 0', color: 'var(--green-500)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                <Icon name="check-circle-2" size={22} /> Request received — we'll reach out within one business day.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 14 }}>
                <Input label="Full name" placeholder="Deb Ambrosi" />
                <Input label="Brokerage" placeholder="Ambrosi Realty" />
                <Input label="Work email" type="email" placeholder="deb@ambrosirealty.com" />
                <Checkbox label="I have 10+ agents on my roster" checked onChange={() => {}} />
                <Button variant="gradient" fullWidth onClick={() => setSent(true)}>Schedule Your Demo</Button>
              </div>
            )}
          </Card>
        </div>
      </section>

      <section style={section()}>
        <div style={wrap}>
          <SectionHeading eyebrow="What you get" title="Most Brokerages Have No Real Training System"
            lede="New agents take months longer to close. Good people leave — not because your brokerage isn't good, but because it doesn't look like it has a system." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 44 }}>
            {GET.map(([ic, t, b]) => (
              <Card key={t} padding={24} topAccent interactive>
                <Icon name={ic} size={24} color="var(--pwru-magenta-500)" />
                <h4 style={{ margin: '14px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--text-strong)' }}>{t}</h4>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>{b}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-subtle)', ...section({ paddingBlock: 'var(--section-y-tight)' }) }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <TestimonialCard avatar={IMG + 'deb-ambrosi.png'} name="Deb Ambrosi" role="Broker/Owner — Ambrosi Realty"
            result="2 agents recruited" quote="We invited two agents to see it and they joined our brokerage thanks to you!" />
          <div>
            <SectionHeading eyebrow="Fit check" title="BPS is not for everyone" />
            <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
              {['Your onboarding is inconsistent from agent to agent', "You're losing recruiting conversations", 'You want visibility into agent engagement'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 15 }}><Icon name="check" size={18} color="var(--green-500)" />{t}</li>
              ))}
              {['You are a solo agent without a team', 'You need a CRM or transaction management tool'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'var(--text-muted)' }}><Icon name="x" size={18} color="var(--ink-300)" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingBlock: 'var(--section-y)' }}>
        <div style={wrap}><CTABanner title="See How BPS Could Look For Your Brokerage" body="Book a live 1:1 demo with a member of our team." note="Starts at just $19/mo per agent." primaryLabel="Schedule Your Demo Today" /></div>
      </section>
    </div>
  );
}
window.BrokersScreen = BrokersScreen;

})();
