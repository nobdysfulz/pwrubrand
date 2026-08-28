(function(){
const { SectionHeading, Card, Tag, Badge, Button, Icon, CTABanner } = window.PowerUnitCoachingDesignSystem_dff922;
const wrap = window.pwruWrap, section = window.pwruSection;
const IMG = 'https://powerunitcoaching.com/wp-content/uploads/2026/07/';

const POSTS = [
  { cat: 'Sales', date: '29 Jul', img: IMG + 'close-3-homes-a-month-featured.png', title: 'Close 3 Homes a Month: The Script for a Market Where Buyers Do the Math First' },
  { cat: 'Marketing', date: '27 Jul', img: IMG + 'dominate-real-estate-market-featured.png', title: 'How to Dominate a Real Estate Market: What Separates the Top 20% from Everyone Else' },
  { cat: 'Sales', date: '24 Jul', img: IMG + 'objection-handling-scripts-featured.png', title: 'Real Estate Objection Handling Scripts That Actually Close Deals in 2026' },
  { cat: 'Productivity', date: '22 Jul', img: IMG + 'consistent-real-estate-production-featured.png', title: 'Consistent Real Estate Production: The System That Ends the Feast-or-Famine Cycle' },
];
const CATS = ['All', 'AI', 'Branding', 'Broker/Owners', 'Income', 'Lead Generation', 'Marketing', 'Mindset', 'Productivity', 'Sales', 'Time Management'];

function BlogScreen() {
  const [cat, setCat] = React.useState('All');
  const posts = cat === 'All' ? POSTS : POSTS.filter((p) => p.cat === cat);
  return (
    <div>
      <section style={{ background: 'var(--gradient-paper)', paddingBlock: '56px 40px' }}>
        <div style={wrap}>
          <SectionHeading eyebrow="Blog" title="Scripts, systems, and market strategy" lede="Written from real production experience — not theory, not recycled sales advice." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {CATS.map((c) => <Tag key={c} active={c === cat} onClick={() => setCat(c)}>{c}</Tag>)}
          </div>
        </div>
      </section>
      <section style={section({ paddingBlock: 'var(--section-y-tight)' })}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 26 }}>
            {posts.map((p) => (
              <Card key={p.title} padding={0} interactive>
                <div style={{ height: 200, background: `var(--ink-100) url(${p.img}) center/cover no-repeat` }} />
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <Badge tone="brand">{p.cat}</Badge>
                    <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{p.date}, 2026</span>
                  </div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, lineHeight: 1.28, color: 'var(--text-strong)', textWrap: 'pretty' }}>{p.title}</h3>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{ marginTop: 16, display: 'inline-flex', gap: 8, alignItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--pwru-magenta-600)' }}>Read post <Icon name="arrow-right" size={16} /></a>
                </div>
              </Card>
            ))}
          </div>
          {!posts.length && <p style={{ padding: '40px 0', color: 'var(--text-muted)' }}>No posts in this category yet.</p>}
          <div style={{ textAlign: 'center', marginTop: 40 }}><Button variant="outline">Load more posts</Button></div>
        </div>
      </section>
      <section style={{ paddingBottom: 'var(--section-y)' }}>
        <div style={wrap}><CTABanner title="Your Business Deserves a Powerful Blueprint" body="Download the free framework that turns scattered effort into consistent production." primaryLabel="Get the Free Blueprint" /></div>
      </section>
    </div>
  );
}
window.BlogScreen = BlogScreen;

})();
