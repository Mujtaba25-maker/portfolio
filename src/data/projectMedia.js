// Presentation assets stay separate from authoritative project descriptions/stacks.
// Supplied showcase images are unchanged; report crops only affect their display.
const showcase = (file, alt) => ({
  src: `/assets/projects/${file}-showcase.png`, width: 1448, height: 1086, alt
});

export const projectMedia = {
  monkshub: {
    showcase: showcase("monkshub", "MonksHub promotional showcase with the online learning website displayed on a laptop against a green background"),
    missingOriginal: "The original full-page MonksHub website screenshot is not available. This is the supplied promotional showcase."
  },
  educore: {
    showcase: showcase("educore", "Educore promotional showcase with the UI/UX course landing page displayed on a laptop against a purple background"),
    missingOriginal: "The original full-page Educore website screenshot is not available. This is the supplied promotional showcase."
  },
  "hanzalah-supermarket": {
    showcase: showcase("hanzala-supermarket", "Hanzala Supermarket promotional showcase with its management dashboard displayed on a laptop against a pink background"),
    wide: true,
    missingOriginal: "The original Hanzala dashboard screenshot is not available. This is the supplied promotional showcase."
  },
  "retail-sales-profitability-analysis": {
    showcase: showcase("retail-sales", "Retail Sales and Profitability promotional showcase featuring the Power BI dashboard on a laptop with blue lighting"),
    crop: { x: 53, y: 152, width: 1158, height: 658, alt: "Original retail report canvas with sales and profitability KPIs, monthly trends, regional comparisons, customer rankings, summary table and slicers" }
  },
  "hr-analytics-employee-attrition": {
    showcase: showcase("hr-analytics", "HR Analytics promotional showcase featuring the employee attrition dashboard on a laptop with blue lighting"),
    crop: { x: 82, y: 165, width: 1113, height: 633, alt: "Original HR report canvas with workforce KPIs, attrition charts, job satisfaction matrix, department comparisons and age-group slicer" }
  }
};

export function getProjectMedia(project) {
  const media = projectMedia[project.slug] || {};
  const original = project.image ? {
    src: project.image, width: project.imageWidth, height: project.imageHeight, alt: project.imageAlt
  } : null;
  return { ...media, original, preview: media.showcase || original };
}
