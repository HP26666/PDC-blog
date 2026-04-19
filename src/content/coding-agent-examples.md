# Coding Agent Programming Examples

> Real-world examples of using AI coding agents to build projects, fix bugs, and automate development tasks.

---

## Example 1: Building a REST API with Express.js

### The Prompt

```
Build a complete REST API for a task management app with:
- User authentication (JWT)
- CRUD operations for tasks
- Input validation
- Error handling middleware
- TypeScript
```

### Agent Output

The coding agent creates the following project structure:

```
task-api/
├── src/
│   ├── index.ts
│   ├── config/
│   │   └── database.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   ├── models/
│   │   ├── User.ts
│   │   └── Task.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   └── tasks.ts
│   └── validators/
│       └── task.ts
├── package.json
├── tsconfig.json
└── .env.example
```

### Key Code Generated

#### Authentication Middleware

```typescript
// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

#### Task Routes

```typescript
// src/routes/tasks.ts
import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { validateTask } from '../validators/task';

const router = Router();

// All routes require authentication
router.use(authenticate);

// GET /api/tasks - List all tasks for the user
router.get('/', async (req, res) => {
  const tasks = await Task.find({ userId: req.userId })
    .sort({ createdAt: -1 });
  res.json(tasks);
});

// POST /api/tasks - Create a new task
router.post('/', validateTask, async (req, res) => {
  const task = new Task({
    ...req.body,
    userId: req.userId,
  });
  await task.save();
  res.status(201).json(task);
});

// PUT /api/tasks/:id - Update a task
router.put('/:id', validateTask, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId,
  });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
});

export default router;
```

---

## Example 2: React Component with Animation

### The Prompt

```
Create an animated dashboard card component in React with:
- Glassmorphism design
- Animated number counter
- Gradient border on hover
- Framer Motion animations
- TypeScript
```

### Agent Output

```tsx
// DashboardCard.tsx
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DashboardCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
  color: 'blue' | 'purple' | 'green' | 'orange';
}

const colorMap = {
  blue: { from: '#3B82F6', to: '#06B6D4' },
  purple: { from: '#8B5CF6', to: '#EC4899' },
  green: { from: '#10B981', to: '#34D399' },
  orange: { from: '#F59E0B', to: '#EF4444' },
};

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (end - start) + start);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{display.toLocaleString()}</span>;
}

export default function DashboardCard({
  title, value, prefix = '', suffix = '',
  icon, trend, color
}: DashboardCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const { from, to } = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative group rounded-2xl p-[1px] cursor-pointer"
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      />

      {/* Card content */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 
                      border border-white/10 group-hover:border-transparent transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg" 
               style={{ background: `linear-gradient(135deg, ${from}20, ${to}20)` }}>
            {icon}
          </div>
          {trend && (
            <span className={`text-sm font-medium ${
              trend.isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </span>
          )}
        </div>
        <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white">
          {prefix}<AnimatedCounter value={value} />{suffix}
        </p>
      </div>
    </motion.div>
  );
}
```

---

## Example 3: Python Data Pipeline

### The Prompt

```
Create a Python data pipeline that:
- Reads CSV files from a directory
- Cleans and transforms the data
- Generates summary statistics
- Outputs results as JSON
- Includes logging and error handling
```

### Agent Output

```python
# pipeline.py
import os
import json
import logging
from pathlib import Path
from datetime import datetime
from dataclasses import dataclass, asdict
from typing import Optional

import pandas as pd

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler('pipeline.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


@dataclass
class PipelineResult:
    filename: str
    rows_original: int
    rows_cleaned: int
    rows_removed: int
    columns: list[str]
    summary: dict
    processed_at: str


class DataPipeline:
    def __init__(self, input_dir: str, output_dir: str):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.results: list[PipelineResult] = []
    
    def discover_files(self) -> list[Path]:
        """Find all CSV files in the input directory."""
        files = list(self.input_dir.glob("*.csv"))
        logger.info(f"Discovered {len(files)} CSV files")
        return files
    
    def clean_dataframe(self, df: pd.DataFrame) -> pd.DataFrame:
        """Clean and transform the dataframe."""
        original_rows = len(df)
        
        # Remove duplicate rows
        df = df.drop_duplicates()
        
        # Remove rows where all values are NaN
        df = df.dropna(how='all')
        
        # Strip whitespace from string columns
        str_columns = df.select_dtypes(include=['object']).columns
        for col in str_columns:
            df[col] = df[col].str.strip()
        
        # Convert date-like columns
        for col in df.columns:
            if 'date' in col.lower() or 'time' in col.lower():
                try:
                    df[col] = pd.to_datetime(df[col])
                except (ValueError, TypeError):
                    pass
        
        cleaned_rows = len(df)
        logger.info(
            f"Cleaned: {original_rows} → {cleaned_rows} rows "
            f"({original_rows - cleaned_rows} removed)"
        )
        return df
    
    def generate_summary(self, df: pd.DataFrame) -> dict:
        """Generate summary statistics for the dataframe."""
        summary = {
            'total_rows': len(df),
            'total_columns': len(df.columns),
            'numeric_stats': {},
            'categorical_stats': {},
            'missing_values': df.isnull().sum().to_dict()
        }
        
        # Numeric columns summary
        numeric_df = df.select_dtypes(include=['number'])
        if not numeric_df.empty:
            summary['numeric_stats'] = json.loads(
                numeric_df.describe().to_json()
            )
        
        # Categorical columns summary
        cat_df = df.select_dtypes(include=['object'])
        for col in cat_df.columns:
            summary['categorical_stats'][col] = {
                'unique_values': int(df[col].nunique()),
                'top_values': df[col].value_counts().head(5).to_dict()
            }
        
        return summary
    
    def process_file(self, filepath: Path) -> Optional[PipelineResult]:
        """Process a single CSV file."""
        logger.info(f"Processing: {filepath.name}")
        
        try:
            df = pd.read_csv(filepath)
            original_rows = len(df)
            
            df = self.clean_dataframe(df)
            summary = self.generate_summary(df)
            
            result = PipelineResult(
                filename=filepath.name,
                rows_original=original_rows,
                rows_cleaned=len(df),
                rows_removed=original_rows - len(df),
                columns=list(df.columns),
                summary=summary,
                processed_at=datetime.now().isoformat()
            )
            
            # Save cleaned data
            output_csv = self.output_dir / f"cleaned_{filepath.name}"
            df.to_csv(output_csv, index=False)
            
            return result
            
        except Exception as e:
            logger.error(f"Failed to process {filepath.name}: {e}")
            return None
    
    def run(self) -> None:
        """Execute the complete pipeline."""
        logger.info("=" * 50)
        logger.info("Starting data pipeline")
        
        files = self.discover_files()
        for filepath in files:
            result = self.process_file(filepath)
            if result:
                self.results.append(result)
        
        # Save results
        output_path = self.output_dir / "pipeline_results.json"
        with open(output_path, 'w') as f:
            json.dump(
                [asdict(r) for r in self.results],
                f, indent=2, default=str
            )
        
        logger.info(f"Pipeline complete. Results saved to {output_path}")
        logger.info(f"Processed: {len(self.results)}/{len(files)} files")


if __name__ == "__main__":
    pipeline = DataPipeline(
        input_dir="./data/raw",
        output_dir="./data/processed"
    )
    pipeline.run()
```

---

## Example 4: Full-Stack Feature with Agent

### The Prompt

```
Add a "bookmark" feature to my blog. Users should be able to:
- Bookmark/unbookmark articles
- View their bookmarked articles
- Bookmarks persist in localStorage
- Show bookmark count on each article
- Animate the bookmark icon
```

### Agent Steps

The coding agent typically follows these steps:

```
Step 1: Analyze existing codebase structure
  → Reads package.json, src/ directory, existing components

Step 2: Plan the implementation
  → Creates a bookmark context/store
  → Modifies article cards to include bookmark button
  → Creates a bookmarks page

Step 3: Implement the bookmark store
  → Creates useBookmarks hook with localStorage persistence

Step 4: Add bookmark button component
  → Creates animated bookmark icon with Framer Motion

Step 5: Modify article cards
  → Adds bookmark button to each article card

Step 6: Create bookmarks page
  → Lists all bookmarked articles with remove option

Step 7: Update routing
  → Adds /bookmarks route to the app

Step 8: Test the feature
  → Runs build to check for errors
  → Verifies localStorage persistence
```

### Generated Hook

```typescript
// hooks/useBookmarks.ts
import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'blog-bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggle = useCallback((articleId: string) => {
    setBookmarks(prev =>
      prev.includes(articleId)
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  }, []);

  const isBookmarked = useCallback(
    (articleId: string) => bookmarks.includes(articleId),
    [bookmarks]
  );

  return { bookmarks, toggle, isBookmarked, count: bookmarks.length };
}
```

---

## Key Takeaways

### What Coding Agents Excel At

1. **Boilerplate generation** — Project setup, CRUD operations, configuration
2. **Pattern-based code** — Following established patterns in your codebase
3. **Multi-file changes** — Features that touch many files
4. **Testing** — Writing comprehensive test suites
5. **Documentation** — Generating docs from code

### What Still Needs Human Review

1. **Architecture decisions** — Overall system design
2. **Security** — Authentication, authorization, input validation
3. **Business logic** — Domain-specific rules and edge cases
4. **Performance** — Optimization for specific use cases
5. **UX decisions** — User experience and accessibility

### Best Practices

```
✅ DO:
- Give clear, specific instructions
- Break complex tasks into smaller pieces
- Review all generated code
- Test thoroughly before deploying
- Use version control

❌ DON'T:
- Blindly accept all generated code
- Skip testing
- Ignore security warnings
- Use agents for sensitive data handling without review
- Forget to commit your work regularly
```
