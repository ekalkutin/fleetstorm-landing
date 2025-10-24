# Modern CSS Color Theming with OKLCH

## 🎨 What We've Built

A focused, professional theming system using the latest CSS features:

### 1. **CSS Layers** for cascade management

```css
@layer base, themes;
```

### 2. **OKLCH Colors** for better color manipulation

```css
--color-primary: oklch(55% 0.15 230);
--color-primary-hover: oklch(calc(55% - 5%) 0.15 230);
```

### 3. **Color-mix()** for dynamic blending

```css
--color-border: color-mix(in oklch, var(--color-text) 15%, transparent);
```

## 🚀 Usage

### In CSS:

```css
.my-component {
  background: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.my-button {
  background: var(--color-primary);
  color: var(--color-background);
}

.my-button:hover {
  background: var(--color-primary-hover);
}
```

### In JavaScript:

```js
// Toggle theme
window.toggleTheme();

// Or use the theme switcher directly
import { themeSwitcher } from 'app/theme-switcher';
themeSwitcher.setTheme('dark');
```

## 🎯 Available Colors

### Primary Colors

- `--color-primary` - Main brand color
- `--color-primary-hover` - Hover state (5% darker)
- `--color-primary-active` - Active state (10% darker)

### Surface Colors

- `--color-background` - Main page background
- `--color-surface` - Card/component backgrounds

### Text Colors

- `--color-text` - Primary text
- `--color-text-muted` - Secondary/muted text

### Border Colors

- `--color-border` - Main borders (15% text opacity)
- `--color-border-light` - Light borders (8% text opacity)

## 🌟 OKLCH Benefits

1. **Perceptually uniform** - 5% lighter actually looks 5% lighter
2. **Future-proof** - Wide gamut color support
3. **Easy manipulation** - Simple math operations work intuitively
4. **Better gradients** - No muddy intermediate colors

## 🔄 Theme Switching

The system automatically:

- ✅ Saves preference to localStorage
- ✅ Respects system dark mode preference
- ✅ Provides smooth transitions
- ✅ Works with data-theme attribute

Try the theme toggle in the header!
