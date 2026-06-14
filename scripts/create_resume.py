from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


OUTPUT = "public/resume/Mujtaba-Resume.pdf"
PAGE_W, PAGE_H = letter
MARGIN = 34
SIDEBAR_W = 190
ACCENT = colors.HexColor("#0f766e")
DARK = colors.HexColor("#0f172a")
TEXT = colors.HexColor("#334155")
MUTED = colors.HexColor("#64748b")
LIGHT_BG = colors.HexColor("#f8fafc")
LINE = colors.HexColor("#dbe3ea")


def wrap_text(c, text, width, font="Helvetica", size=8.8):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if c.stringWidth(candidate, font, size) <= width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, width, font="Helvetica", size=8.8, leading=11.2, color=TEXT):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap_text(c, text, width, font, size):
        c.drawString(x, y, line)
        y -= leading
    return y


def heading(c, text, x, y, color=DARK):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(x, y, text.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(x, y - 4, PAGE_W - MARGIN, y - 4)
    return y - 15


def sidebar_heading(c, text, x, y):
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 8.7)
    c.drawString(x, y, text.upper())
    c.setStrokeColor(colors.Color(1, 1, 1, alpha=0.28))
    c.line(x, y - 4, x + SIDEBAR_W - 58, y - 4)
    return y - 15


def bullet(c, text, x, y, width, color=colors.white):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 7.8)
    c.drawString(x, y, "-")
    return draw_wrapped(c, text, x + 10, y, width - 10, size=7.8, leading=10.5, color=color)


c = canvas.Canvas(OUTPUT, pagesize=letter)
c.setTitle("Mujtaba Resume")

# Background and sidebar
c.setFillColor(LIGHT_BG)
c.rect(0, 0, PAGE_W, PAGE_H, fill=True, stroke=False)
c.setFillColor(DARK)
c.rect(0, 0, SIDEBAR_W, PAGE_H, fill=True, stroke=False)
c.setFillColor(ACCENT)
c.rect(0, PAGE_H - 11, SIDEBAR_W, 11, fill=True, stroke=False)

# Header
main_x = SIDEBAR_W + 28
y = PAGE_H - 50
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 24)
c.drawString(main_x, y, "MOHAMMAD MUJTABA")
y -= 27
c.drawString(main_x, y, "SEKANDARI")
y -= 19
c.setFillColor(ACCENT)
c.setFont("Helvetica-Bold", 10.5)
c.drawString(main_x, y, "MERN Stack Developer | Frontend Developer | Data Science Learner")
y -= 20
summary = (
    "Motivated technology learner and developer with practical experience building responsive web applications, "
    "integrating REST APIs, and contributing to real-world software projects. Strong foundation in frontend development, "
    "backend fundamentals, databases, Git-based teamwork, and continuous learning, with growing focus on data analytics, "
    "machine learning, statistics, and AI-driven problem solving."
)
y = draw_wrapped(c, summary, main_x, y, PAGE_W - main_x - MARGIN, size=9.1, leading=12.2)

# Sidebar content
sx = 22
sy = PAGE_H - 48
c.setFillColor(colors.white)
c.setFont("Helvetica-Bold", 15)
c.drawString(sx, sy, "MUJTABA")
sy -= 24
c.setFont("Helvetica", 8)
c.setFillColor(colors.HexColor("#cbd5e1"))
c.drawString(sx, sy, "Kabul, Afghanistan")
sy -= 12
c.drawString(sx, sy, "+93 783 249 790")
sy -= 12
c.drawString(sx, sy, "mujtabasekandari470@gmail.com")
sy -= 12
c.drawString(sx, sy, "github.com/Mujtaba25-maker")
sy -= 26

sy = sidebar_heading(c, "Technical Skills", sx, sy)
sidebar_items = [
    "Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap",
    "Backend: Node.js, Express.js, REST APIs, Next.js basics",
    "Databases: MySQL, MongoDB, PostgreSQL, database fundamentals",
    "Tools: Git, GitHub, VS Code, Postman, Vercel",
]
for item in sidebar_items:
    sy = bullet(c, item, sx, sy, SIDEBAR_W - 45)
    sy -= 4

sy -= 6
sy = sidebar_heading(c, "Languages", sx, sy)
for item in ["English", "Dari", "Pashto"]:
    sy = bullet(c, item, sx, sy, SIDEBAR_W - 45)
    sy -= 3

sy -= 6
sy = sidebar_heading(c, "Core Strengths", sx, sy)
for item in ["Problem solving", "Responsive design", "API integration", "Team collaboration", "Continuous learning"]:
    sy = bullet(c, item, sx, sy, SIDEBAR_W - 45)
    sy -= 3

# Main content
y -= 7
y = heading(c, "Career Objective", main_x, y)
objective = (
    "To contribute as a MERN Stack Developer and continue growing in data science by applying web development, "
    "database, and analytical skills to build useful real-world digital solutions."
)
y = draw_wrapped(c, objective, main_x, y, PAGE_W - main_x - MARGIN, size=8.9, leading=11.8)

y -= 7
y = heading(c, "Experience", main_x, y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 9.4)
c.drawString(main_x, y, "Frontend Development Intern | Upskill")
c.setFillColor(MUTED)
c.setFont("Helvetica-Bold", 8.4)
c.drawRightString(PAGE_W - MARGIN, y, "2 Months - Present")
y -= 13
experience_bullets = [
    "Develop responsive web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.",
    "Integrate REST APIs and collaborate on real-world, industry-focused projects.",
    "Use Git and GitHub for version control, code sharing, and collaborative teamwork.",
    "Apply debugging, problem-solving, and testing practices to improve application reliability.",
]
for item in experience_bullets:
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 8.4)
    c.drawString(main_x, y, "-")
    y = draw_wrapped(c, item, main_x + 11, y, PAGE_W - main_x - MARGIN - 11, size=8.55, leading=11.2)
    y -= 2

y -= 4
y = heading(c, "Projects", main_x, y)
projects = [
    ("EduCore", "Educational platform project focused on digital learning workflows, React routing, Tailwind CSS, and responsive UI."),
    ("Manzal", "Afghanistan business directory platform concept connecting users with local services and business information."),
    ("Hanzalah Supermarket", "Retail dashboard and supermarket workflow project for product and business management."),
    ("Student Management System", "Application concept for managing student records, academic information, and administrative workflows."),
    ("Barcode Attendance System", "Attendance tracking solution using barcode-based identification and structured records."),
]
for title, description in projects:
    c.setFillColor(DARK)
    c.setFont("Helvetica-Bold", 8.7)
    c.drawString(main_x, y, title)
    y -= 10
    y = draw_wrapped(c, description, main_x, y, PAGE_W - main_x - MARGIN, size=8.45, leading=10.7)
    y -= 3

y -= 3
y = heading(c, "Education", main_x, y)
c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 8.9)
c.drawString(main_x, y, "English Language Diploma | Jahan University")
c.setFillColor(MUTED)
c.setFont("Helvetica-Bold", 8.3)
c.drawRightString(PAGE_W - MARGIN, y, "Currently in 6th Semester")
y -= 15

y = heading(c, "Scholarship & Learning Keywords", main_x, y)
keywords = (
    "Data Analytics | Machine Learning | Artificial Intelligence | Statistics | Python-ready Learning Mindset | "
    "Web Development | REST APIs | Databases | Problem Solving | Continuous Learning"
)
y = draw_wrapped(c, keywords, main_x, y, PAGE_W - main_x - MARGIN, size=8.5, leading=11.2)

c.save()
print(OUTPUT)
