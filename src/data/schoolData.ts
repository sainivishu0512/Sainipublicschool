export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Holidays' | 'Events' | 'Circulars';
  isImportant?: boolean;
  summary: string;
  fullText: string;
  fileAttachment?: string;
}

export interface Facility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  objectPosition?: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Graduation & Honors' | 'Classrooms' | 'Foundation & Play' | 'Creative Arts' | 'Celebrations' | 'Sports & Activities';
  imageUrl: string;
  caption: string;
  objectPosition?: string;
}

export const SCHOOL_NAME = "SAINI PUBLIC SCHOOL";
export const OFFICIAL_TAGLINE = "“Every student has its own qualities like flowers.”";
export const HERO_SUPPORTING_TEXT = "Building strong foundations through meaningful learning, individual attention, and the development of every child's unique potential.";

export const CLASS_OPTIONS = [
  "Play School / Foundation (Age 2.5+)",
  "Foundation / Nursery (Age 3+)",
  "Foundation / LKG (Age 4+)",
  "Foundation / UKG (Age 5+)",
  "Class 1 (Age 6+)",
  "Class 2 (Age 7+)",
  "Class 3 (Age 8+)",
  "Class 4 (Age 9+)",
  "Class 5 (Age 10+)",
  "Class 6 (Age 11+)",
  "Class 7 (Age 12+)",
  "Class 8 (Age 13+)",
];

export const EDUCATIONAL_STAGES = [
  {
    id: "foundation",
    title: "Foundation Stage",
    subtitle: "Play School, Nursery, LKG & UKG",
    focus: "Nurturing early learning, curiosity, communication, and confidence.",
    description: "In the early formative years, every child blossoms at their own natural pace. Our Foundation Stage provides a safe, affectionate, and sensory-rich environment where young learners discover Hindi & English alphabets, numbers, tactile puzzle solving, indoor slides, and creative expression.",
    image: "/images/school/foundation-tactile-puzzle.jpeg",
    objectPosition: "object-[center_20%]",
    keyAreas: [
      "Tactile phonics, Hindi varnamala foam puzzles & early vocabulary",
      "Play-based numbers, shapes & indoor sensory coordination",
      "Indoor play slides, soft toy corners & motor agility",
      "Values of sharing, courteous habits & emotional warmth",
    ],
    ageGroup: "Ages 2.5 to 6 Years",
  },
  {
    id: "primary",
    title: "Primary Education",
    subtitle: "Classes 1 to 5",
    focus: "Developing literacy, numeracy, creativity, and essential learning skills.",
    description: "The primary years build the core intellectual pillars. Our educators foster active curiosity, disciplined study habits, and neat cursive handwriting. Children regularly present blackboard exercises, complete interactive worksheets, and celebrate seasonal cultural projects together.",
    image: "/images/school/students-peer-presentation.jpeg",
    objectPosition: "object-[center_25%]",
    keyAreas: [
      "Disciplined handwriting, Environmental Studies & language fluency",
      "Active chalkboard demonstrations & peer presentations",
      "Festival art, 3D paper crafts & creative self-expression",
      "Structured sports periods, physical fitness & teamwork",
    ],
    ageGroup: "Ages 6 to 11 Years",
  },
  {
    id: "middle",
    title: "Middle School",
    subtitle: "Classes 6 to 8",
    focus: "Strengthening subject knowledge, independent thinking, problem-solving, and responsibility.",
    description: "As students advance towards secondary education, academic rigor meets independent character building. We prepare students for advanced coursework through analytical problem solving, science inquiry, digital literacy, and recognized graduation milestones.",
    image: "/images/school/cultural-haryanvi-group-dance.jpg",
    objectPosition: "object-[center_20%]",
    keyAreas: [
      "Rigorous foundations in Mathematics, Science & Social Sciences",
      "Formal examinations, periodic assessments & performance recognition",
      "Leadership opportunities, assembly coordination & civic ethics",
      "Preparation for secondary academic transitions",
    ],
    ageGroup: "Ages 11 to 14 Years",
  },
];

export const CORE_VALUES = [
  {
    title: "Academic Foundations",
    description: "Rigorous focus on core competencies in literacy, numeracy, and scientific inquiry to create self-reliant lifelong learners.",
    icon: "GraduationCap",
  },
  {
    title: "Discipline & Integrity",
    description: "Cultivating respect, punctuality, polite manners, and ethical responsibility in daily school life.",
    icon: "ShieldCheck",
  },
  {
    title: "Kindness & Empathy",
    description: "Encouraging a caring, supportive atmosphere where children learn to respect teachers, peers, and their community.",
    icon: "HeartHandshake",
  },
  {
    title: "Confidence & Expression",
    description: "Providing public speaking, classroom presentations, and performance avenues so every child finds their voice.",
    icon: "Mic",
  },
  {
    title: "Creativity & Curiosity",
    description: "Honoring inquisitiveness through art, crafts, music, storytelling, and hands-on science activities.",
    icon: "Sparkles",
  },
  {
    title: "Respect for Individuality",
    description: "Embodying our motto that every student has unique qualities like flowers, offering patient individual attention.",
    icon: "Flower2",
  },
];

export const LEARNING_PILLARS = [
  {
    title: "Foundational Literacy & Numeracy",
    tagline: "The Bedrock of All Understanding",
    description: "Every student receives hands-on phonics drills, tactile letter puzzle solving, bilingual comprehension, and environmental projects to secure undisputed fundamental mastery.",
    image: "/images/school/foundation-earth-day-leaves.jpeg",
    objectPosition: "object-[center_28%]",
  },
  {
    title: "Classroom Learning & Subject Development",
    tagline: "Structured & Inquisitive Academics",
    description: "Structured curriculum exercises, clear conceptual demonstrations, blackboard participation, and regular periodic evaluations ensure every child excels with clarity.",
    image: "/images/school/classroom-exam-study-desks.jpeg",
    objectPosition: "object-[center_35%]",
  },
  {
    title: "Creative Activities & Expression",
    tagline: "Giving Wings to Imagination",
    description: "Festive classroom displays, vibrant handprint crafts, watercolor artwork, and 3D paper decorations nurture artistic sensibility and fine motor coordination.",
    image: "/images/school/classroom-display-board.jpeg",
    objectPosition: "object-[center_30%]",
  },
  {
    title: "Sports & Physical Development",
    tagline: "Healthy Minds in Resilient Bodies",
    description: "Indoor activity slides, morning assembly drills, open ground athletic races, and traditional games build stamina, sportsmanship, and physical agility.",
    image: "/images/school/foundation-activity-slide.jpeg",
    objectPosition: "object-[center_20%]",
  },
  {
    title: "Communication & Confidence",
    tagline: "Articulate, Clear & Self-Assured",
    description: "Interactive chalkboard presentations, cultural dance performances, costume recitations, and collaborative peer learning help children express themselves with natural ease.",
    image: "/images/school/students-victory-stage.jpg",
    objectPosition: "object-[center_25%]",
  },
  {
    title: "Values, Discipline & Social Development",
    tagline: "Character Above All",
    description: "Patriotic salutes to the National Flag, respect for elders, traditional festival observances, and civic responsibility form the bedrock of daily campus life.",
    image: "/images/school/learning-values-diwali-celebration.jpeg",
    objectPosition: "object-[center_25%]",
  },
];

export const SCHOOL_FACILITIES: Facility[] = [
  {
    id: "classrooms",
    name: "Interactive Academic Classrooms",
    tagline: "Engaging chalkboard displays and focused seating",
    description: "Classrooms equipped with traditional green chalkboards, student artwork display banners, comfortable seating, and individual attention under our strict 1:20 ratio.",
    image: "/images/school/foundation-paper-flowers.jpeg",
    objectPosition: "object-[center_25%]",
    highlights: ["Student art & project display boards", "Full blackboard teaching setup", "Dedicated teacher-student ratio 1:20", "Comfortable, safe classroom environment"],
  },
  {
    id: "foundation-wing",
    name: "Foundation & Play School Wing",
    tagline: "Safe, joyous early childhood activity space",
    description: "Specially designed junior section with child-safe indoor play slides, colorful ergonomic chairs, soft toys, and sensory activity mats for toddlers and early learners.",
    image: "/images/school/foundation-junior-seating.jpeg",
    objectPosition: "object-[center_20%]",
    highlights: ["Indoor activity slides & play equipment", "Soft plush learning toys & sensory play", "Colorful junior chairs and play tables", "Attentive female attendants for toddlers"],
  },
  {
    id: "tactile-lab",
    name: "Early Literacy & Tactile Center",
    tagline: "Hands-on alphabet, number & puzzle mastery",
    description: "Dedicated learning room equipped with interlocking Hindi varnamala foam tiles, English phonics kits, and manipulative counters for multi-sensory understanding.",
    image: "/images/school/facility-tactile-learning-counters.jpeg",
    objectPosition: "object-[25%_15%]",
    highlights: ["Interlocking Hindi & English foam puzzle sets", "Shape sorting and tactile counting tools", "Visual flashcards and story boards", "Individualized pace of early mastery"],
  },
  {
    id: "assembly-hall",
    name: "Assembly & Cultural Celebration Grounds",
    tagline: "Where the school community gathers and shines",
    description: "Open ceremonial courtyard with red-carpet ceremonial staging for Annual Days, graduation events, festive celebrations, and morning assemblies.",
    image: "/images/school/facility-annual-result-day-corridor.jpeg",
    objectPosition: "object-[center_25%]",
    highlights: ["Annual Day & Graduation 2026 staging", "Daily morning assembly & prayer", "Red-carpet honor walk for achievers", "Parent-teacher gathering venue"],
  },
  {
    id: "creative-studio",
    name: "Creative Arts & Activity Studio",
    tagline: "Nurturing artistic expression and hands-on projects",
    description: "Dedicated creative space where students express their individuality through festive crafts, paper art, cultural exhibits, and collaborative teamwork.",
    image: "/images/school/students-papercraft-display.jpeg",
    objectPosition: "object-[center_20%]",
    highlights: ["Festive papercraft & decorative arts", "Thematic hands-on learning exhibits", "Collaborative student art showcases", "Encouraging creative confidence & fine motor skills"],
  },
  {
    id: "sensory-play",
    name: "Junior Sensory & Relax Corner",
    tagline: "Gentle transition space for young beginners",
    description: "Comfortable carpeted space with cheerful stuffed animals and storybooks where nursery and play school children feel secure and at home.",
    image: "/images/school/foundation-play-corner.jpeg",
    objectPosition: "object-[center_25%]",
    highlights: ["Plush animals and cozy seating", "Story listening and nursery rhyme sessions", "Gentle, non-intimidating atmosphere", "Hygiene-first sanitized mats"],
  },
];

export const SCHOOL_NOTICES: Notice[] = [
  {
    id: "not-01",
    title: "Admissions Open for Academic Session 2025–26 (Play School to Class 8)",
    date: "October 10, 2026",
    category: "Admissions",
    isImportant: true,
    summary: "Registration forms are now available online and at the school administrative counter for Play School, Foundation (Nursery, LKG, UKG) and Classes 1 to 8.",
    fullText: "Saini Public School, Sainipura, Sonepat announces the commencement of admissions for the upcoming Academic Session 2025–26. Parents seeking admission for their wards from Play School through Class 8 can submit the enquiry form online or visit the school office at Sainipura, Sonepat between 8:00 AM and 2:00 PM on all working days. Seats are strictly limited to maintain our 1:20 student-teacher ratio.",
    fileAttachment: "SPS_Sonepat_Admission_Notice_2025-26.pdf",
  },
  {
    id: "not-02",
    title: "Graduation Ceremony 2026 & Annual Report Card Distribution",
    date: "October 05, 2026",
    category: "Events",
    isImportant: true,
    summary: "Parents and students celebrated academic milestones, received annual marksheets, and honored student graduation.",
    fullText: "The Annual Graduation Ceremony and report card distribution for the academic session took place with great joy and parent participation. Students were awarded their certificates of achievement and honored in their graduation robes before transitioning to their next academic grade.",
    fileAttachment: "Graduation_Ceremony_Schedule_2026.pdf",
  },
  {
    id: "not-03",
    title: "Second Periodic Assessment Datesheet Released for Classes 1 to 8",
    date: "September 28, 2026",
    category: "Academic",
    isImportant: false,
    summary: "Comprehensive syllabus guidelines and timetable have been shared for the upcoming term evaluations.",
    fullText: "The Second Periodic Assessments for Classes 1 through 8 will commence as per the published academic calendar. Students are encouraged to revise their classroom lessons and core concepts thoroughly. Parents are requested to assist in maintaining a consistent home revision routine.",
    fileAttachment: "SAINI_PUBLIC_SCHOOL_Datesheet.pdf",
  },
  {
    id: "not-04",
    title: "Patriotic Assembly & Independence Celebrations: Saluting Our Heroes",
    date: "September 18, 2026",
    category: "Events",
    isImportant: false,
    summary: "Students presented patriotic costume presentations, Indian flag salutes, and traditional Haryanvi folk dances.",
    fullText: "Under our commitment to character and civic pride, Saini Public School organized a grand patriotic presentation. Students dressed in Indian Army uniforms, Mahatma Gandhi attire, and traditional folk dresses paid homage to the nation in presence of proud parents and faculty.",
    fileAttachment: "Patriotic_Celebration_Report.pdf",
  },
  {
    id: "not-05",
    title: "Uniform Guidelines & School Identity Protocol",
    date: "August 30, 2026",
    category: "Circulars",
    isImportant: false,
    summary: "Parents are requested to ensure neat green school tracksuits and standard uniforms with official school ID cards.",
    fullText: "Students must wear the approved seasonal uniform (green tracksuit for activity days, checkered uniform for regular classes) with polished shoes and their official Saini Public School Sonepat ID card every day.",
    fileAttachment: "Uniform_and_ID_Circular.pdf",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Graduation & Honors
  {
    id: "gal-1",
    title: "Academic Marksheets & 'You're The Best' Award",
    category: "Graduation & Honors",
    imageUrl: "/images/school/graduation-family-award.jpeg",
    caption: "Mother celebrating with her children as they proudly hold their official Saini Public School report cards.",
    objectPosition: "object-[center_22%]",
  },
  {
    id: "gal-2",
    title: "Graduate with Cap & Academic Honors",
    category: "Graduation & Honors",
    imageUrl: "/images/school/graduation-ceremony-student.jpeg",
    caption: "Proud student wearing his graduation cap with his family, displaying his completed year marksheets.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-3",
    title: "Young Learners with Graduation Gift Packs",
    category: "Graduation & Honors",
    imageUrl: "/images/school/graduation-parent-interaction.jpeg",
    caption: "Foundation students in their school uniform holding special graduation gift packs with their parents.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-4",
    title: "Parent-Child Milestone on Assembly Stage",
    category: "Graduation & Honors",
    imageUrl: "/images/school/graduation-parents-stage.jpeg",
    caption: "Father standing proudly with his children on stage at the 2026 Graduation ceremony.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-5",
    title: "Annual Graduation Achievers Recognition",
    category: "Graduation & Honors",
    imageUrl: "/images/school/gallery-graduation-achievement-stage.jpeg",
    caption: "Honoring academic milestones, student character, and growth during annual graduation ceremonies.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-6",
    title: "Graduation & Merit Certificate Presentation",
    category: "Graduation & Honors",
    imageUrl: "/images/school/gallery-graduation-ceremony-principal-award.jpeg",
    caption: "School Principal and teachers presenting the official Saini Public School merit graduation certificate on stage to completing students.",
    objectPosition: "object-[center_28%]",
  },

  // 2. Celebrations & National Pride
  {
    id: "gal-7",
    title: "Saluting the National Flag with Bharat Mata",
    category: "Celebrations",
    imageUrl: "/images/school/patriotic-flag-salute-army.jpg",
    caption: "Students dressed as brave Indian Army soldiers saluting the tricolor alongside Bharat Mata on the school stage.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-8",
    title: "Young Patriots: Mahatma Gandhi & Army Soldier",
    category: "Celebrations",
    imageUrl: "/images/school/gandhi-soldier-patriots.jpg",
    caption: "Students in Mahatma Gandhi and Army officer costumes under the school's official 'Like a Flower' wall mural.",
    objectPosition: "object-[center_32%]",
  },
  {
    id: "gal-9",
    title: "Shubh Navratri Handcrafted Maa Durga Board",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-navratri-durga-board.jpeg",
    caption: "Handcrafted 3D Maa Durga bulletin board with 'SAINI PUBLIC SCHOOL' banner and the 9 divine avatars.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-10",
    title: "Basant Panchami with Saraswati & Paper Kites",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-basant-panchami-saraswati-kites.jpeg",
    caption: "Vibrant yellow Basant Panchami celebration with handmade kites, flowers, and Maa Saraswati mural.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-11",
    title: "Har Har Mahadev Shivratri Bulletin Display",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-shivratri-mahadev-art.jpeg",
    caption: "Shivratri bulletin board with trishul motifs and student pencil & watercolor artwork pinned below.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-12",
    title: "Independence Day Soldier Salute with Tricolour",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-independence-day-soldier-salute.jpeg",
    caption: "Young student in Army uniform saluting with the Indian tricolor under the Happy Independence Day board.",
    objectPosition: "object-[center_20%]",
  },

  // 3. Creative Arts & Performances
  {
    id: "gal-13",
    title: "Traditional Folk Dance Solo Performance",
    category: "Creative Arts",
    imageUrl: "/images/school/cultural-dance-performance.jpg",
    caption: "A primary student performing traditional Indian folk dance in vibrant regional attire.",
    objectPosition: "object-[center_22%]",
  },
  {
    id: "gal-14",
    title: "Traditional Haryanvi Folk Heritage Presentation",
    category: "Creative Arts",
    imageUrl: "/images/school/gallery-cultural-haryanvi-folk-chulha.jpeg",
    caption: "Student in traditional Haryanvi dress presenting a charming rural cultural enactment with miniature chulha.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-15",
    title: "Classroom Craft & Balloon Celebration Display",
    category: "Creative Arts",
    imageUrl: "/images/school/classroom-craft-celebration.jpeg",
    caption: "Festive classroom atmosphere featuring handmade paper fans, ribbons, and decorative student creations.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-16",
    title: "Handmade Paper Origami & Floral Art",
    category: "Creative Arts",
    imageUrl: "/images/school/gallery-art-origami-display.jpeg",
    caption: "Primary students creating intricate origami flowers, paper butterflies, and creative decorations.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-17",
    title: "Student Paintings & Watercolor Exhibition",
    category: "Creative Arts",
    imageUrl: "/images/school/gallery-student-drawings-exhibition.jpeg",
    caption: "Original student landscape paintings, sketch studies, and vibrant coloring displays in the corridors.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-18",
    title: "Creative Classroom Wall Murals & Learning Art",
    category: "Creative Arts",
    imageUrl: "/images/school/gallery-classroom-wall-murals.jpeg",
    caption: "Hand-painted educational wall murals illustrating nature, science tools, and positive moral quotations.",
    objectPosition: "object-[center_30%]",
  },

  // 4. Classrooms & Daily Campus Life
  {
    id: "gal-19",
    title: "Student Standing Tall in Crisp School Uniform",
    category: "Classrooms",
    imageUrl: "/images/school/student-in-uniform.jpeg",
    caption: "Disciplined uniform standards with official Saini Public School emblem and student ID lanyard.",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "gal-20",
    title: "Blackboard Demonstrations & Interactive Learning",
    category: "Classrooms",
    imageUrl: "/images/school/gallery-classroom-interactive-board.jpeg",
    caption: "Active classroom discussion with blackboard diagrams and participatory student problem solving.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-21",
    title: "Cultural Wings & Aspiration Costume Presentation",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-reading-circle-library.jpeg",
    caption: "Student posing proudly in traditional turban with decorative staff before the inspirational school motto: 'Let your dream be your Wings'.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-22",
    title: "Peer Group Study & Classroom Collaboration",
    category: "Classrooms",
    imageUrl: "/images/school/gallery-classroom-collaborative-work.jpeg",
    caption: "Students collaborating on science charts, worksheets, and peer-assisted study sessions.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-23",
    title: "Raksha Bandhan & Cultural Festivity Craft",
    category: "Creative Arts",
    imageUrl: "/images/school/gallery-morning-assembly-prayer.jpeg",
    caption: "Handmade festive Raksha Bandhan display celebrating cultural heritage, family bonds, and student craftwork.",
    objectPosition: "object-[center_35%]",
  },
  {
    id: "gal-24",
    title: "Teacher-Guided Interactive Academic Session",
    category: "Classrooms",
    imageUrl: "/images/school/gallery-teacher-interactive-lecture.jpeg",
    caption: "Educator explaining mathematical and language concepts with patient individual clarification.",
    objectPosition: "object-[center_20%]",
  },

  // 5. Foundation & Early Childhood
  {
    id: "gal-25",
    title: "Tactile Block Building & Motor Development",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-foundation-activity-blocks.jpeg",
    caption: "Nursery toddlers constructing colorful block towers to develop spatial and manual coordination.",
    objectPosition: "object-[center_22%]",
  },
  {
    id: "gal-26",
    title: "Joyful Nursery Rhymes & Storytime Circle",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-foundation-story-rhyme.jpeg",
    caption: "Young beginners singing Hindi & English rhymes with lively actions and expressive storytelling.",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "gal-27",
    title: "Early Childhood Motor Coordination Drill",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-early-childhood-motor-skills.jpeg",
    caption: "Gentle physical movement drills that strengthen balance, gait, and playful interaction for young children.",
    objectPosition: "object-[center_22%]",
  },
  {
    id: "gal-28",
    title: "Sensory Shape Sorting & Color Matching",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-foundation-sensory-puzzle.jpeg",
    caption: "Hands-on play with tactile geometric shapes, counters, and sensory sorting boards.",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "gal-29",
    title: "Music, Movement & Playgroup Song Time",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-junior-singing-movement.jpeg",
    caption: "Early rhythm exercises where young toddlers clap, sing, and blossom with joyful self-expression.",
    objectPosition: "object-[center_20%]",
  },
  {
    id: "gal-30",
    title: "Toddlers Learning Empathy & Sharing Toys",
    category: "Foundation & Play",
    imageUrl: "/images/school/gallery-toddler-play-sharing.jpeg",
    caption: "Social play in the carpeted activity room fostering polite manners and affectionate friendships.",
    objectPosition: "object-[center_22%]",
  },

  // 6. Sports & Activities
  {
    id: "gal-31",
    title: "Outdoor Swings & Campus Sports Recreation",
    category: "Sports & Activities",
    imageUrl: "/images/school/gallery-outdoor-swings-sports.jpeg",
    caption: "Students in school sports tracksuits enjoying outdoor swings and campus recreation in the lush open school grounds.",
    objectPosition: "object-[center_35%]",
  },
  {
    id: "gal-32",
    title: "Outdoor Athletics & Agility Coordination Course",
    category: "Sports & Activities",
    imageUrl: "/images/school/gallery-outdoor-athletics-coordination.jpeg",
    caption: "Active outdoor running and agility courses building stamina, focus, and healthy physical resilience.",
    objectPosition: "object-[center_25%]",
  },
  {
    id: "gal-33",
    title: "Festive Dress Celebration with School Lanyards",
    category: "Celebrations",
    imageUrl: "/images/school/foundation-traditional-day.jpeg",
    caption: "Students dressed up in traditional attire for cultural celebration with Saini Public School ID lanyards.",
    objectPosition: "object-[center_28%]",
  },
  {
    id: "gal-34",
    title: "Foundation Class Shivratri Festival Drawings",
    category: "Celebrations",
    imageUrl: "/images/school/foundation-shivratri-drawings.jpeg",
    caption: "Foundation class proudly holding up their handmade festival greeting drawings together in uniform.",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "gal-35",
    title: "Cultural Costume Presentation with Trishul",
    category: "Celebrations",
    imageUrl: "/images/school/cultural-shivratri-costume.jpeg",
    caption: "Student dressed in traditional cultural attire holding a festive trishul for school assembly.",
    objectPosition: "object-[center_28%]",
  },
  {
    id: "gal-36",
    title: "Classroom Festive Drawings & Art Exhibition",
    category: "Celebrations",
    imageUrl: "/images/school/gallery-dussehra-nursery-drawings.jpeg",
    caption: "Nursery and junior students proudly displaying their colorful festive drawings in full uniform under the official Saini Public School emblem.",
    objectPosition: "object-[center_40%]",
  },
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Online Enquiry or Campus Visit",
    description: "Submit the online enquiry form on this website or visit the school administrative office in Sainipura, Sonepat to receive the prospectus.",
  },
  {
    step: "02",
    title: "Friendly Interaction & Tour",
    description: "Parents and the child are invited for an unhurried conversational interaction with our teachers and a guided walk through our classrooms and play areas.",
  },
  {
    step: "03",
    title: "Document Verification",
    description: "Submit the completed registration form with necessary verification documents (birth certificate, photos, and previous report card/TC for primary/middle school).",
  },
  {
    step: "04",
    title: "Admission Confirmation",
    description: "Upon verification, the student is warmly welcomed into the Saini Public School family with their uniform, books, and orientation kit.",
  },
];

export const ELIGIBILITY_GUIDE = [
  { grade: "Play School / Foundation (Nursery)", minAge: "2.5 to 3 Years as of 31st March", keyCriteria: "Oral interaction, readiness for social play" },
  { grade: "Foundation (LKG)", minAge: "4 Years as of 31st March", keyCriteria: "Basic language comprehension, motor skills" },
  { grade: "Foundation (UKG)", minAge: "5 Years as of 31st March", keyCriteria: "Readiness for early phonics and numbers" },
  { grade: "Class 1", minAge: "6 Years as of 31st March", keyCriteria: "Completion of UKG or equivalent foundation" },
  { grade: "Classes 2 to 5", minAge: "7 to 10 Years respectively", keyCriteria: "Previous grade report card and transfer certificate" },
  { grade: "Classes 6 to 8", minAge: "11 to 13 Years respectively", keyCriteria: "Academic record, transfer certificate, foundational interview" },
];

export const CONTACT_INFO = {
  schoolName: "SAINI PUBLIC SCHOOL",
  society: "Run by Saini Education Society (Regd.)",
  udiseCode: "U-DISE Code: 06080107344 • School Code: 26101",
  address: "Saini Public School, Sainipura, Sonepat, Haryana - 131001",
  phoneNumbers: ["+91 98765 43210 (Admissions)", "+91 98765 43211 (Front Desk)"],
  emailAddresses: ["admissions@sainipublicschool.edu.in", "info@sainipublicschool.edu.in"],
  officeHours: "Monday to Saturday: 8:00 AM – 3:00 PM (Closed on Sundays & Gazetted Holidays)",
  visitingHoursForParents: "Monday to Friday: 9:00 AM – 1:30 PM",
  studentTimings: {
    foundation: "8:30 AM to 12:30 PM",
    primaryAndMiddle: "8:00 AM to 2:15 PM",
  }
};
