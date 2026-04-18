# Software Engineering Exam Questions

> Key exam preparation material covering core software engineering topics.

---

## Chapter 1: Software Process Models

### Q1: Compare Waterfall and Agile methodologies

**Waterfall Model:**
- Linear, sequential phases
- Requirements → Design → Implementation → Testing → Maintenance
- Best for well-defined, stable requirements

**Agile Model:**
- Iterative and incremental
- Sprints (2-4 weeks), continuous delivery
- Embraces changing requirements

| Feature | Waterfall | Agile |
|---------|-----------|-------|
| Flexibility | Low | High |
| Customer Involvement | Start/End | Continuous |
| Risk Management | Late detection | Early detection |
| Documentation | Extensive | Minimal |
| Delivery | End of project | Incremental |

### Q2: What is the Spiral Model?

The Spiral Model combines **iterative development** with **risk analysis**. Each loop has four phases:
1. **Planning** — objectives, alternatives
2. **Risk Analysis** — identify and resolve risks
3. **Engineering** — develop and test
4. **Evaluation** — customer review

---

## Chapter 2: Requirements Engineering

### Q3: Distinguish between Functional and Non-Functional Requirements

```
Functional: "The system shall allow users to log in with email and password."
Non-Functional: "The system shall respond within 200ms for 95% of requests."
```

### Q4: What is a Use Case Diagram?

A Use Case Diagram shows:
- **Actors** (stick figures) — external entities
- **Use Cases** (ovals) — system functions
- **Relationships** — associations, includes, extends

---

## Chapter 3: Software Design

### Q5: Explain SOLID Principles

| Principle | Description |
|-----------|-------------|
| **S**ingle Responsibility | A class should have one reason to change |
| **O**pen/Closed | Open for extension, closed for modification |
| **L**iskov Substitution | Subtypes must be substitutable for base types |
| **I**nterface Segregation | Prefer small, specific interfaces |
| **D**ependency Inversion | Depend on abstractions, not concretions |

### Q6: Design Patterns Classification

**Creational:** Singleton, Factory, Builder, Prototype
**Structural:** Adapter, Bridge, Composite, Decorator, Facade
**Behavioral:** Observer, Strategy, Command, State, Template Method

#### Singleton Pattern Example

```java
public class DatabaseConnection {
    private static volatile DatabaseConnection instance;
    
    private DatabaseConnection() {}
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            synchronized (DatabaseConnection.class) {
                if (instance == null) {
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}
```

---

## Chapter 4: Software Testing

### Q7: Testing Levels

1. **Unit Testing** — individual components
2. **Integration Testing** — module interactions
3. **System Testing** — complete system validation
4. **Acceptance Testing** — user/customer validation

### Q8: Black-Box vs White-Box Testing

**Black-Box (Functional):**
- Equivalence partitioning
- Boundary value analysis
- Decision table testing

**White-Box (Structural):**
- Statement coverage
- Branch coverage
- Path coverage

### Q9: What is Code Coverage?

```python
def calculate_grade(score):
    if score >= 90:        # Branch 1
        return "A"
    elif score >= 80:      # Branch 2
        return "B"
    elif score >= 70:      # Branch 3
        return "C"
    else:                  # Branch 4
        return "F"

# 100% branch coverage requires tests:
# score = 95 → "A"
# score = 85 → "B"
# score = 75 → "C"
# score = 50 → "F"
```

---

## Chapter 5: Software Maintenance

### Q10: Types of Maintenance

| Type | Purpose | Example |
|------|---------|---------|
| **Corrective** | Fix bugs | Patching a security vulnerability |
| **Adaptive** | Adapt to environment changes | OS upgrade compatibility |
| **Perfective** | Improve performance/features | UI redesign |
| **Preventive** | Prevent future problems | Code refactoring |
