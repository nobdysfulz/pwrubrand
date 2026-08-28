Icon wrapper around Lucide, loaded from CDN and masked so it takes any colour (including the brand gradient).

```jsx
<Icon name="zap" size={22} color="var(--pwru-magenta-500)" />
```

Intentional addition: the brand supplied no icon set, so Lucide (2px stroke, rounded caps) is the documented substitute. Requires network access; for offline decks, use type or the supplied artwork instead.
