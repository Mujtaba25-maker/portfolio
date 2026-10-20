import { BarChart3, GraduationCap, UsersRound } from "lucide-react";

// Dashboard claims come from the supplied screenshots and the owner's description.
// Coursework objectives are kept separate from execution evidence.
export const analyticsProjects = [
  {
    slug: "retail-sales-profitability-analysis",
    title: "Retail Sales & Profitability Analysis",
    discipline: "Data Analytics",
    category: "Business Intelligence",
    icon: BarChart3,
    image: "/assets/analytics/retail-sales-dashboard.png",
    imageWidth: 1912, imageHeight: 947,
    imageAlt: "Original Power BI retail dashboard showing sales, costs, profit, regional comparisons, customer rankings and report page tabs",
    description: "An interactive retail analytics dashboard exploring sales performance, profitability, regional trends, and customer contributions.",
    problem: "Transactional tables make it difficult to review sales, margins, and customer contributions together.",
    role: "Power BI dashboard development and visual reporting through a practical analytics project.",
    stack: ["Microsoft Power BI", "Data Visualization", "Business Reporting"],
    features: ["Sales, cost, profit and margin KPIs", "Monthly sales and profit trends", "Regional comparisons and summary table", "Top customers by sales and profit", "Year, region and category filters", "Average sales per order"],
    workflow: ["Review sales indicators", "Compare regions", "Explore customers", "Communicate findings"],
    caseStudy: {
      overview: "A retail reporting interface that brings headline indicators and detailed comparisons into one readable dashboard. The supplied image documents the Executive Overview page.",
      sections: [
        { title: "Dashboard design", text: "Headline KPIs sit above monthly trends, regional comparisons and customer rankings. Year, region and category slicers support exploration inside the Power BI report; this portfolio displays a static screenshot." },
        { title: "Report structure", text: "The screenshot shows four report tabs: Executive Overview, Product & Profit Analysis, Operations & Monthly Analysis, and Management Recommendations. Only the Executive Overview content is available for inspection." },
        { title: "Reading the sample report", text: "The sample report shows approximately 3.28M total sales, 1.09M total profit and a 33.09% profit margin. These are values in the dashboard dataset, with no currency inferred. They are not verified commercial outcomes." },
        { title: "Scope and limitations", text: "The preview demonstrates reporting design and comparison opportunities. The underlying dataset and Power BI file were not supplied, so transformation logic, calculations and business recommendations cannot be independently reviewed." }
      ]
    }
  },
  {
    slug: "hr-analytics-employee-attrition",
    title: "HR Analytics & Employee Attrition Dashboard",
    discipline: "Data Analytics",
    category: "Business Intelligence",
    icon: UsersRound,
    image: "/assets/analytics/hr-analytics-dashboard.png",
    imageWidth: 1917, imageHeight: 946,
    imageAlt: "Original Power BI HR dashboard with workforce KPIs, attrition by department, salary, job role, gender and experience, and age group filters",
    description: "An interactive HR dashboard exploring workforce characteristics, employee attrition, job satisfaction, and departmental patterns through data cleaning, analysis, and visualization.",
    problem: "Employee tables contain workforce and attrition information that is difficult to interpret without clear comparisons and summaries.",
    role: "Cleaned and organized employee data, transformed it for analysis, and developed a Power BI dashboard as hands-on project work.",
    stack: ["Microsoft Power BI", "Data Cleaning", "Data Transformation", "HR Reporting"],
    features: ["Total and active employees", "Attrition count and rate", "Average age and experience", "Department and salary comparisons", "Job role and satisfaction matrix", "Age, gender and experience patterns", "Department and age-group filters"],
    workflow: ["Raw data", "Data cleaning", "Data transformation", "Analysis", "Interactive dashboard"],
    caseStudy: {
      overview: "A practical HR analytics project connecting data preparation with a readable workforce reporting interface.",
      sections: [
        { title: "Approach", text: "Clean and organize employee data, transform it for analysis, review workforce indicators, and design interactive Power BI reporting. Data cleaning and dashboard creation are confirmed by the project owner; detailed transformation steps were not supplied." },
        { title: "Dashboard design", text: "Workforce KPIs provide context above department and salary comparisons. A job role and satisfaction matrix sits alongside age, gender and experience views. Department and age-group slicers help explore the original report." },
        { title: "Outcome", text: "A dashboard that makes the HR dataset easier to explore and interpret, with clear summaries of workforce composition and employee attrition patterns." },
        { title: "Scope and limitations", text: "This portfolio preview is a static screenshot. No reduction in employee turnover or organizational impact is claimed. A Power BI file and raw HR dataset were not provided, so data modeling and calculation logic are not asserted." }
      ]
    }
  },
  {
    slug: "student-performance-machine-learning",
    title: "Student Performance Prediction & Machine Learning Analysis",
    discipline: "Machine Learning",
    category: "Machine Learning Study",
    icon: GraduationCap,
    image: "/assets/analytics/student-score-distribution.png",
    imageWidth: 1920, imageHeight: 880,
    imageAlt: "Exam score frequency chart calculated from all 6,607 records in the supplied student dataset; descriptive analysis, not predictions",
    description: "A student performance study spanning data preparation, regression, classification, and clustering, with a verified dataset overview and six documented algorithm exercises.",
    problem: "How can study-related and contextual factors be explored to understand exam scores, pass/fail classification and student groupings?",
    role: "Student coursework in Google Colab. The owner reports separate implementations for six algorithms; student notebook code and outputs were not available for independent review.",
    stack: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib"],
    features: ["6,607 records · 20 columns", "Missing-value and duplicate audit", "Regression and classification objectives", "Clustering and PCA objectives", "Six algorithms in one study", "Reproducible descriptive visualization"],
    workflow: ["Inspect data", "Plan preprocessing", "Explore patterns", "Compare model objectives"],
    downloads: [{ label: "Source dataset (CSV)", href: "/data/StudentPerformanceFactors.csv" }, { label: "Coursework brief (PDF)", href: "/data/algorithms-coursework.pdf" }, { label: "Dataset audit (JSON)", href: "/data/student-summary.json" }],
    models: [
      { name: "Linear Regression", objective: "Predict Exam_Score using numerical and one-hot encoded categorical features, with a train/test split.", evaluation: "MAE, MSE, RMSE, R²; actual vs predicted plot." },
      { name: "Logistic Regression", objective: "Classify pass/fail using Exam_Score ≥ 65. Remove Exam_Score from inputs to avoid target leakage; encode and scale features.", evaluation: "Accuracy, precision, recall, F1 and confusion matrix." },
      { name: "K-Nearest Neighbors", objective: "Compare k = 3, 5, 7 and 9 for pass/fail classification. Scale features so larger numerical ranges do not dominate distance.", evaluation: "Compare held-out classification metrics across k values." },
      { name: "Decision Tree", objective: "Compare maximum depths of 1, 3, 5, 10 and unrestricted depth; visualize the tree.", evaluation: "Training vs testing accuracy to examine underfitting and overfitting." },
      { name: "K-Means Clustering", objective: "Explore 2–6 student groups with standardized features. If Exam_Score is included, groups partly reflect exam performance.", evaluation: "Silhouette scores and two-dimensional PCA visualization." },
      { name: "Support Vector Machine", objective: "Compare linear and RBF kernels for pass/fail classification using encoded, standardized features.", evaluation: "Accuracy, precision, recall and F1 across kernels." }
    ],
    caseStudy: {
      overview: "One comprehensive coursework study with six algorithm objectives. The dataset and assignment are available to inspect. The chart shown here is a fresh descriptive analysis of the supplied CSV, not a notebook output or model result.",
      sections: [
        { title: "Dataset overview · verified", text: "The supplied CSV contains 6,607 rows and 20 columns, including study hours, attendance, sleep, previous scores and categorical background factors. There are 78 missing Teacher_Quality values, 90 missing Parental_Education_Level values, and 67 missing Distance_from_Home values. No exact duplicate rows were found." },
        { title: "Data cleaning and preprocessing plan", text: "Inspect missing values and data types before modeling. Split training and test data before fitting imputers, encoders and scalers. One-hot encode categorical features and standardize numerical features for distance-based models. For pass/fail models, derive the target at 65 and exclude Exam_Score from predictors. These are documented requirements and methodological considerations; notebook execution is not verified." },
        { title: "Exploratory analysis · verified", text: "The exam score distribution uses every original CSV record. Observed scores range from 55 to 101. The value above 100 requires validation against the dataset definition and has been retained rather than silently removed. Descriptive patterns do not establish causation." },
        { title: "Model evaluation and comparison", text: "The six exercises below specify the planned comparison methods. The owner reports implementing them in separate Colab notebooks, but no student-performance notebook outputs were supplied. No accuracy scores, model ranking, predictions, confusion matrices or training plots are published here." },
        { title: "Technical learning and limitations", text: "The study connects data inspection, missing-value handling, encoding, scaling, leakage prevention and appropriate evaluation design. A fair comparison needs reproducible splits and validation-based tuning, with the test set reserved for final evaluation. Results and model-specific libraries can be added once the original notebooks are available." }
      ]
    }
  }
];
