# Truth or Dare - Neon Card Game Website Prompt

## Project Overview
Create a stunning single-page web application for a "Truth or Dare" card game with a premium neon aesthetic inspired by 80s cyberpunk and modern neon signage. The design should feel like a high-end nightclub game with glowing cards and vibrant visual effects.

---

## Visual Design Reference

### Color Palette
- **Background**: Pure black (#000000) or very dark (#050505)
- **Primary Neon**: Hot pink/magenta (#FF1493, #FF006E)
- **Secondary Neon**: Electric blue/cyan (#00D4FF, #00F0FF)
- **Accent Neon**: Purple (#B026FF, #8B00FF)
- **Text**: White (#FFFFFF) with neon glow effects
- **Card Backgrounds**: Dark with subtle gradients (rgba(20, 20, 40, 0.8))

### Typography
**DO NOT use generic fonts. Required distinctive choices:**
- **Title/Logo**: "Monoton", "Bungee Shade", "Fontdiner Swanky", or "Creepster"
- **Headings on cards**: "Teko", "Audiowide", "Black Ops One", or "Turret Road"
- **Body text**: "Exo 2", "Rajdhani", or "Saira Condensed"
- All text should have neon glow effects using text-shadow

### Visual Effects to Implement

#### 1. Neon Glow (Critical)
```css
/* Multiple layered shadows for authentic neon glow */
text-shadow: 
  0 0 10px currentColor,
  0 0 20px currentColor,
  0 0 40px currentColor,
  0 0 80px currentColor;

box-shadow:
  0 0 10px currentColor,
  0 0 20px currentColor,
  0 0 40px currentColor,
  inset 0 0 10px currentColor;
```

#### 2. Card Border Effects
- Gradient borders (pink to blue)
- Animated glowing borders that pulse
- Rounded corners with 16-24px radius
- Perspective tilt effect (3D)

#### 3. Background Atmosphere
- **Radial gradient spotlight** from top center
- **Horizontal neon lines** in the background (subtle)
- **Floating decorative neon icons**: lips, martini glass, sparkles
- **Grid pattern** or **scanlines** overlay (low opacity)

#### 4. Animations Required

**Card Entrance (Staggered):**
```
- Fade in with scale up (0.8 to 1)
- Slight rotation and 3D perspective
- Glow intensity increase
- Duration: 0.8s with delays
```

**Card Flip Animation:**
```
- 3D rotateY transformation (180deg)
- Backface visibility hidden
- Transform-style: preserve-3d
- Duration: 0.6s ease-in-out
```

**Button Hover:**
```
- Scale up slightly (1.05)
- Increase glow intensity
- Color shift animation
- Transform: translateY(-2px)
```

**Continuous Animations:**
```
- Pulsing glow on buttons (2-3s cycle)
- Subtle floating animation on cards
- Rotating sparkle decorations
- Flickering neon effect (subtle)
```

---

## Layout Structure

### Main Title
- Large stylized "TRUTH OR DARE" logo at top
- Pink neon text with blue outline glow
- Neon tube/pill shape background
- Decorative neon icons floating around (lips, drink glass)

### Card Display Area
- 3 cards visible in perspective view
- Center card prominent, side cards tilted back
- Cards appear to be "held" in hand-like fan arrangement
- Each card has glowing pink-blue gradient border

### Card Design
```
┌─────────────────────┐
│   TRUTH or DARE     │ ← Small header
│                     │
│    🎲 TRUTH        │ ← Icon + type indicator
│  [Question text]   │ ← Main content area
│                     │
│    DARE 🎵         │ ← Alternative option
│  [Dare text]       │ ← Alternative content
│                     │
└─────────────────────┘
```

### Interactive Elements
- Large "TRUTH" and "DARE" selection buttons
- "Next Challenge" button
- Optional: Player name input
- Optional: Difficulty selector (Mild, Spicy, Wild)
- Optional: Challenge counter

---

## Technical Requirements

### Tech Stack
**Option A: Single HTML File**
- HTML5 with semantic markup
- Embedded CSS in `<style>` tags
- Vanilla JavaScript
- Import Google Fonts via CDN

**Option B: React (Preferred)**
- Single JSX artifact
- React hooks for state management
- Tailwind CSS core utilities only
- CSS custom properties for theming
- Lucide React icons

### Functionality

#### Core Features
1. **Random Challenge Selection**
   - Separate arrays for truths (25+ items) and dares (25+ items)
   - Random selection without immediate repeats
   - Smooth card flip animation on selection

2. **Card Flip Mechanism**
   - Front: "TRUTH or DARE" title with decorative elements
   - Back: Revealed challenge text
   - 3D flip animation on click

3. **Navigation**
   - "Truth" button → reveals random truth
   - "Dare" button → reveals random dare
   - "Next" button → new challenge (same type)
   - "Back" button → return to selection screen

4. **Visual Feedback**
   - Button press animation
   - Card glow pulse when flipped
   - Sound effect trigger points (optional)

#### Enhanced Features (Optional)
- Challenge completion counter
- Player name persistence (localStorage)
- Difficulty levels that filter challenges
- Share challenge feature
- Timer for dares
- Group mode (multiple players)

### Animation Timing
```javascript
// Suggested timing values
const TIMINGS = {
  cardFlip: 600,      // Card flip duration
  buttonPress: 200,   // Button feedback
  glowPulse: 2000,    // Continuous glow cycle
  entranceDelay: 150, // Stagger between cards
  hoverScale: 300     // Button hover transition
};
```

### Responsive Design
- Desktop: Full 3-card spread visible
- Tablet: 2-card view, center prominent
- Mobile: Single card, stack others behind
- Minimum width: 320px
- Touch-friendly button sizes (min 44px)

---

## Content Examples

### Truth Questions (Party-appropriate)
```
- What's the most embarrassing thing in your search history?
- Who in this room would you trust with your deepest secret?
- What's a talent you pretend you don't have?
- If you could read one person's mind here, who would it be?
- What's the weirdest thing you've done when alone?
- Have you ever pretended to like a gift you hated?
- What's your most irrational fear that you hide from others?
- Who was your first celebrity crush?
- What's the last lie you told?
- If you could erase one memory, what would it be?
```

### Dare Challenges (Fun, not extreme)
```
- Do your best impression of someone in the room
- Speak in an accent for the next 3 rounds
- Let someone draw on your face with washable marker
- Do 20 pushups while singing your favorite song
- Text your crush something flirty (show proof)
- Eat a spoonful of hot sauce without water
- Dance with no music for 1 minute
- Let the group choose your profile picture for 24 hours
- Call a random contact and sing "Happy Birthday"
- Hold an ice cube until it melts completely
```

### Difficulty Levels
**Mild**: Light-hearted, suitable for all audiences
**Spicy**: More revealing truths, slightly embarrassing dares
**Wild**: Bold truths, challenging dares (but still safe/appropriate)

---

## CSS Architecture

### Custom Properties
```css
:root {
  --neon-pink: #FF1493;
  --neon-blue: #00D4FF;
  --neon-purple: #B026FF;
  --neon-green: #39FF14;
  
  --glow-pink: 0 0 10px var(--neon-pink),
               0 0 20px var(--neon-pink),
               0 0 40px var(--neon-pink);
               
  --glow-blue: 0 0 10px var(--neon-blue),
               0 0 20px var(--neon-blue),
               0 0 40px var(--neon-blue);
               
  --card-bg: rgba(20, 20, 40, 0.8);
  --timing-fast: 0.3s;
  --timing-medium: 0.6s;
  --timing-slow: 1s;
}
```

### Key Animation Keyframes
```css
@keyframes neonPulse {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes flickerNeon {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.95; }
  75% { opacity: 0.98; }
}

@keyframes sparkleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## Special Effects Details

### 1. Neon Tube Background (for title)
Create pill-shaped backgrounds with layered glows:
- Outer glow (largest, most diffuse)
- Middle glow (medium intensity)
- Inner glow (brightest, tight to border)
- Border with gradient

### 2. Card Gradient Borders
```css
.card {
  position: relative;
  background: var(--card-bg);
  border-radius: 20px;
}

.card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-blue));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

### 3. Decorative Floating Elements
- Neon lips icon (rotating slowly)
- Martini glass (floating up/down)
- Sparkles (twinkling)
- All with matching neon glow effects

### 4. Background Grid/Scanlines
```css
.scanlines {
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.03) 0px,
    transparent 1px,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 3px
  );
}
```

---

## Performance Considerations
- Use `will-change` sparingly on animated elements
- Prefer `transform` and `opacity` for animations
- Lazy load fonts with `font-display: swap`
- Optimize glow effects (don't go overboard with shadows)
- Use CSS animations over JavaScript where possible

---

## Accessibility Notes
- Ensure text contrast meets WCAG AA standards (despite neon theme)
- Provide reduced motion alternative
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators visible against dark background

---

## Final Polish
- Add subtle parallax effect on mouse move
- Include "Easter egg" rare challenges
- Sound effects: neon buzz, card flip, button click (optional)
- Confetti or particle burst on challenge completion
- Social share card with preview

---

## Success Criteria
✅ Distinctive neon aesthetic (not generic)
✅ Smooth 60fps animations
✅ Authentic glowing effects
✅ 3D card flip that feels premium
✅ Engaging challenge content
✅ Mobile responsive
✅ Fast load time (<2s)
✅ No layout shift during animations
✅ Memorable typography choices

---

## Example Implementation Priority

**Phase 1: Core Structure**
1. HTML structure with semantic markup
2. Basic card layout and positioning
3. Truth/Dare data arrays
4. Random selection logic

**Phase 2: Neon Styling**
1. Import distinctive fonts
2. Apply color palette
3. Create glow effects
4. Design card borders and backgrounds

**Phase 3: Animations**
1. Card flip mechanism
2. Button interactions
3. Entrance animations
4. Continuous pulse effects

**Phase 4: Polish**
1. Decorative elements
2. Background effects
3. Micro-interactions
4. Responsive adjustments

---

Build this with the goal of creating the most visually striking Truth or Dare game on the web. Every element should glow, pulse, and feel alive. Think "premium nightclub meets retro arcade" aesthetic.
