"""Reproduce portfolio EDA from the supplied CSV; no models are trained."""
import csv
import json
from collections import Counter
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
with (ROOT / "public/data/StudentPerformanceFactors.csv").open(newline="", encoding="utf-8-sig") as source:
    rows = list(csv.DictReader(source))
scores = [int(row["Exam_Score"]) for row in rows]
summary = {
    "records": len(rows), "columns": len(rows[0]),
    "missing": {key: sum(not row[key].strip() for row in rows) for key in rows[0] if any(not row[key].strip() for row in rows)},
    "duplicateRows": len(rows) - len({tuple(row.values()) for row in rows}),
    "examScoreRange": [min(scores), max(scores)],
    "scoreDistribution": dict(sorted(Counter(scores).items())),
    "note": "Descriptive analysis of the supplied CSV, not model predictions. Original values retained, including scores above 100."
}
(ROOT / "public/data/student-summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
plt.rcParams.update({"font.family": "DejaVu Sans", "text.color": "#e2e8f0", "axes.labelcolor": "#cbd5e1", "xtick.color": "#94a3b8", "ytick.color": "#94a3b8"})
fig, ax = plt.subplots(figsize=(12, 5.5), facecolor="#0f172a", layout="constrained")
ax.set_facecolor("#0f172a")
counts = Counter(scores)
ax.bar(list(sorted(counts)), [counts[x] for x in sorted(counts)], color="#60a5fa", width=.8, zorder=3)
ax.set_title("Student exam score distribution", loc="left", color="#f8fafc", fontsize=20, pad=24, weight="bold")
ax.set_xlabel("Exam score (original dataset values)", labelpad=12)
ax.set_ylabel("Number of records", labelpad=12)
ax.grid(axis="y", color="#334155", alpha=.6, zorder=0)
for spine in ax.spines.values(): spine.set_visible(False)
fig.savefig(ROOT / "public/assets/analytics/student-score-distribution.png", dpi=160)
print(json.dumps({key: value for key, value in summary.items() if key != "scoreDistribution"}, indent=2))
