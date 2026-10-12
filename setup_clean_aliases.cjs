const fs = require('fs');
const path = require('path');

const pubDir = 'c:\\Users\\Vishu\\Documents\\antigravity\\lucid-galileo\\public\\images\\school';

const aliases = [
  ['WhatsApp_Image_2026-10-11_at_11.20.19_PM.jpeg', 'hero-science-earth-day-globes.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.18.56_PM.jpeg', 'hero-janamashtami-krishna-sunflower.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.40_PM.jpeg', 'hero-students-sports-uniform-red.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.47_PM.jpeg', 'about-students-teej-kites-uniform.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.12_PM.jpeg', 'about-saraswati-diya-ceremony.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.52_PM.jpeg', 'learning-values-diwali-celebration.jpeg'],
  ['WhatsApp Image 2026-10-11 at 10.30.56 PM.jpeg', 'facility-tactile-learning-counters.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.41_PM.jpeg', 'facility-annual-result-day-corridor.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.13_PM__1_.jpeg', 'gallery-graduation-achievement-stage.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.14_PM__1_.jpeg', 'gallery-graduation-certificate-award.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.18.53_PM.jpeg', 'gallery-navratri-durga-board.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.07_PM.jpeg', 'gallery-basant-panchami-saraswati-kites.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.25_PM.jpeg', 'gallery-shivratri-mahadev-art.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.29_PM.jpeg', 'gallery-independence-day-soldier-salute.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.34_PM.jpeg', 'gallery-cultural-haryanvi-folk-chulha.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.08_PM.jpeg', 'gallery-art-origami-display.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.20_PM.jpeg', 'gallery-student-drawings-exhibition.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.50_PM.jpeg', 'gallery-classroom-wall-murals.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.01_PM.jpeg', 'gallery-classroom-interactive-board.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.03_PM.jpeg', 'gallery-reading-circle-library.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.42_PM.jpeg', 'gallery-classroom-collaborative-work.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.48_PM.jpeg', 'gallery-morning-assembly-prayer.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.21_PM.jpeg', 'gallery-teacher-interactive-lecture.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.24_PM.jpeg', 'gallery-attentive-study-notebooks.jpeg'],
  ['WhatsApp Image 2026-10-11 at 10.30.55 PM (1).jpeg', 'gallery-foundation-activity-blocks.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.55_PM.jpeg', 'gallery-foundation-story-rhyme.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.58_PM.jpeg', 'gallery-early-childhood-motor-skills.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.01_PM.jpeg', 'gallery-foundation-sensory-puzzle.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.27_PM.jpeg', 'gallery-junior-singing-movement.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.20.33_PM.jpeg', 'gallery-toddler-play-sharing.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.10_PM.jpeg', 'gallery-physical-training-drill.jpeg'],
  ['WhatsApp_Image_2026-10-11_at_11.19.43_PM.jpeg', 'gallery-outdoor-athletics-coordination.jpeg']
];

aliases.forEach(([src, dst]) => {
  const srcPath = path.join(pubDir, src);
  const dstPath = path.join(pubDir, dst);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`Copied: ${src} -> ${dst}`);
  } else {
    console.error(`Not found: ${srcPath}`);
  }
});

console.log('Aliases successfully created!');
