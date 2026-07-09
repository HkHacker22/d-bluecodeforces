const fs = require('fs');

let css = fs.readFileSync('acrylic-codeforces.user.css', 'utf8');

css = css.replace(/rgba\(srgb/g, 'rgba(v-surface');
css = css.replace(/rgba\(brgb/g, 'rgba(v-border');
css = css.replace(/rgba\(argb/g, 'rgba(v-accent');

// Also remove the srgb, brgb, argb variable definitions
css = css.replace(/srgb = s\('.*?\\n/g, '');
css = css.replace(/brgb = s\('.*?\\n/g, '');
css = css.replace(/argb = s\('.*?\\n/g, '');

fs.writeFileSync('acrylic-codeforces.user.css', css, 'utf8');
console.log('Colors fixed');
