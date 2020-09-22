import chroma from 'chroma-js';

const primary = chroma('#68b723');
const scaleFactor = 1.5;
const scale = (level, base) => `${base * Math.pow(scaleFactor, level)}rem`

export default {
  font: {
    heading: 'Roboto Condensed',
    body: 'Roboto',
  },
  fontSize: level => scale(level, 1),
  space: level => scale(level, 0.5),
  color: {
    background: primary.luminance(0.8).hex(),
    heading: '#555761',
    accent: (primary.luminance() < 0.175 ? primary : primary.luminance(0.175)).hex(),
    accentLightBg: primary.luminance(0.98),
    accentLightBorder: primary.luminance(0.8),
  },
  breakpoint: {
    medium: '(min-width: 540px)',
    large: '(min-width: 755px)',
    jumbo: '(min-width: 900px)',
  },
  maxWidth: '923px',
}