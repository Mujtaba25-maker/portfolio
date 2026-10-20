# Analytics portfolio extension

## Subsequent showcase refinement

The five newly supplied promotional PNGs are now the card previews for Educore, MonksHub, Hanzalah Supermarket, Retail Sales and HR Analytics. SHA-256 comparisons confirmed the copied assets are identical to the attachments. All five retain their 1448 × 1086 (4:3) aspect ratio without cropping, stretching, regeneration or changes to embedded content.

The earlier implementation notes below describe the first analytics extension. This refinement changes only project presentation, the shared image viewer, project detail integration and project styles. It does not change project data, ML study content, profile sections or contact behavior.

### Presentation and image viewing

- Software cards use the new images, concise existing descriptions, existing stacks and preserved Live Demo/GitHub links. Contribution details and features remain available in the case studies; the three development cards now link to their existing project-detail routes.
- Hanzalah uses a wider split presentation on desktop. Landing-page cards remain paired; analytics cards use a consistent split composition. All five use the existing navy theme and blue interface accents, with the distinct project colors contained in the supplied artwork.
- Power BI detail views show the original report canvases with editor chrome hidden by CSS viewport bounds. The original PNGs are not edited or replaced. Visitors can switch between Report canvas, Showcase image and Full source screenshot.
- The native image dialog supports fit-to-screen/original-size viewing, internal scrolling, mobile touch, keyboard controls, Escape, background scroll locking and restored focus. Opening transitions respect reduced-motion CSS; existing global MotionConfig remains in place.
- The original full-page MonksHub and Educore screenshots and original Hanzala dashboard screenshot remain unavailable in the repository/current attachment set. Their viewers explicitly disclose this and show the supplied promotional image. The new images are not misrepresented as original application screenshots.

### Files changed for this refinement

- `src/data/projectMedia.js` (new): media mapping and non-destructive report viewport coordinates, separate from project metadata.
- `public/assets/projects/` (new): five unchanged showcase images with descriptive filenames.
- `src/components/ProjectImage.jsx`: shared preview/detail viewer with image switching and zoom.
- `src/components/Projects.jsx`: real software preview images, concise card composition and case-study actions.
- `src/pages/ProjectCaseStudy.jsx`: shared detail-image presentation and preserved contribution details.
- `src/styles.css`: card layouts, viewer controls, crop viewports, focus treatment and restrained interactions.
- This report: current asset status and verification.

### Refinement verification

- Lint and production build pass; no TypeScript check is configured in this JavaScript/JSX project. No frontend dependency was added.
- Five image assets return HTTP 200 with image/png content type. All three original live-demo URLs return HTTP 200.
- All eight filters retain their expected counts: 11 total, 8 development, 2 analytics, 1 ML; original categories retain 3/1/1/3.
- All eight original project data records remain byte-for-byte identical to their original records. All three analytics projects remain; there are no deleted or duplicate projects.
- Browser checks cover the three development detail routes, both report canvas views, promotional/original switching, original-size scrolling, Escape, focus restoration and missing-original notices. No browser console errors were observed.
- Visually checked at 1440px desktop, 768px tablet and 390px mobile. The supplied 4:3 aspect ratios are retained and no page-level horizontal overflow was observed at the checked widths. Internal horizontal scrolling is intentional in original-size image mode.
- Unrelated sections and existing ML content were not edited for this refinement. Existing model-evidence limitations below still apply.

Implemented locally on `feature/data-analytics-portfolio`. Nothing was pushed, merged, or deployed.

## What changed

- Extended the existing identity, hero, About, Skills, project experience, learning and SEO metadata to Full-Stack Developer & Data Analyst.
- Extended the existing project filters with All Projects, Full-Stack Development, Data Analytics and Machine Learning, retaining all original category filters.
- Added Retail Sales & Profitability Analysis and HR Analytics & Employee Attrition Dashboard using the supplied, unaltered Power BI screenshots.
- Added one Student Performance Prediction & Machine Learning Analysis case study covering all six documented algorithm exercises.
- Added full-width dashboard previews, an editorial two-column ML showcase on desktop, workflow lists and reusable keyboard-accessible native image dialogs with original-size scrolling, Escape dismissal and restored focus.
- Reused the navy palette, Inter typography, blue accents, glass surfaces, spacing conventions, Framer Motion and existing case-study routes. Added global reduced-motion configuration and disabled the custom cursor under reduced motion.
- Fixed home-section navigation from case-study pages and mobile contact-grid overflow while preserving contact submission behavior.

## Main files

- `src/data/analyticsProjects.js`: project content, evidence boundaries, model objectives and source downloads.
- `src/data/portfolioData.js`: updated identity, analytics skill groups and combined project lookup. Original eight project records are unchanged.
- `src/components/AnalyticsShowcase.jsx`, `ProjectImage.jsx`, `Projects.jsx`: project presentation, image dialogs and filtering.
- `src/pages/ProjectCaseStudy.jsx`: shared routes, analytics content, model objectives and materials.
- `src/components/Hero.jsx`, `About.jsx`, `Skills.jsx`, `Experience.jsx`, `Education.jsx`, `CurrentlyLearning.jsx`: profile and learning updates.
- `src/main.jsx`, `CustomCursor.jsx`, `Navbar.jsx`, `Footer.jsx`, `Contact.jsx`, `src/styles.css`: reduced motion, navigation, accessibility and responsive integration.
- `index.html`: title, description, Open Graph and Twitter metadata. No canonical URL or structured data existed; none was invented.
- `public/assets/analytics/`, `public/data/`: original screenshots, descriptive chart and provided coursework materials.
- `scripts/analyze_students.py`: reproducible CSV audit and chart. Requires Python and Matplotlib; these are not frontend dependencies.

## Evidence and limitations

- CSV inspection found 6,607 rows, 20 columns, zero exact duplicate rows, and missing values in Teacher_Quality (78), Parental_Education_Level (90), and Distance_from_Home (67).
- The exam score chart is descriptive analysis computed from the actual CSV, not a model output. All original values are retained, including a score of 101 requiring domain validation.
- The PDF is an assignment brief. It confirms the pass threshold of 65, KNN k values 3/5/7/9, tree depths 1/3/5/10/unrestricted, clustering K values 2–6, and linear/RBF SVM objectives. It does not prove execution.
- The owner reports six Colab implementations. No student-performance notebooks, execution outputs or notebook-list screenshot were supplied. An algorithm notebook found in Downloads uses heart.csv and was excluded from this project. No model metrics, rankings or training charts were invented; no unverified ML library is listed.
- The ChatGPT share URL exposed no readable conversation content through the retrieval tool.
- Neither Power BI source files nor underlying retail/HR datasets were supplied. Dashboard features are based on the screenshots and the owner's description. No HR data-modeling claim or real-company impact is asserted. Retail values are identified as sample-report values, without an inferred currency.
- No official Power BI certificate/course details or new project repository/live-report links were available. Training is shown separately from official credentials.
- The original repository did not contain development project screenshots for MonksHub, Educore or Hanzalah Supermarket. Their existing previews, descriptions, stacks and links were preserved.

## Verification

- `npm run lint`: passed with zero warnings/errors after removing temporary chart-generation dependencies.
- `npm run build`: passed. Vite reports an informational plugin-timing warning, not a build failure.
- `git diff --check`: passed.
- TypeScript: not applicable; this repository uses JavaScript/JSX and has no TypeScript configuration or type-check script.
- Source comparison confirmed all eight original project records are byte-for-byte unchanged: China-Afghanistan Logistics MIS, Service Marketplace Platform, Home Management Information System, AI Data Assistant, Hanzalah Supermarket, Educore, MonksHub and Frontend Layout System.
- Browser-tested all eight filters: counts 11 / 8 / 2 / 1 for the four main filters; 3 / 1 / 1 / 3 for original categories.
- Browser-tested mobile menu open/close, Escape, case-study keyboard navigation, return-to-projects navigation, theme switching, preview expansion, Escape dismissal, focus restoration and contact validation. No real contact message was sent; external delivery remains untested.
- Visually inspected desktop, 768px tablet and 390px mobile layouts. Confirmed no page-level horizontal overflow at the tested mobile/tablet widths after the contact fix. Expanded images deliberately scroll inside their dialog.
- Browser-inspected the new case-study routes and original flagship route. Local route/asset HTTP checks returned 200 for all three new studies, original flagship, dashboard/EDA images and source downloads.
- Existing Hanzalah, Educore and MonksHub live-demo URLs returned HTTP 200. Their remote application workflows were not exhaustively retested.
- Reduced motion is covered by global `MotionConfig reducedMotion="user"`, the existing CSS media query and the custom-cursor opt-out. OS-level reduced-motion emulation was not available in the browser control surface.
