const fs = require('fs');
const stylus = require('stylus');

const css = fs.readFileSync('acrylic-codeforces.user.css', 'utf8');

const metadataVars = `
theme-preset = 'dark-blue'
use-custom-wallpaper = 0
wallpaper-url = 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920'
builtin-wallpaper = 'gradient'
enable-blur = 1
blur-amount = 12
glass-opacity = 0.15
border-opacity = 0.18
saturation = 1.8
brightness = 1.1
border-radius-val = 12
shadow-intensity = 0.3
frosted-mode = 0
full-acrylic = 1
pure-transparent = 0
rounded-corners = 1
enable-animations = 1
compact-mode = 0

`;

stylus(metadataVars + css).render((err, cssOut) => {
  if (err) {
    console.error("STYLUS ERROR:");
    console.error(err.message);
  } else {
    fs.writeFileSync('out.css', cssOut);
    console.log("SUCCESS!");
    console.log("Lines compiled:", cssOut.split('\\n').length);
    console.log("File size:", cssOut.length);
  }
});
