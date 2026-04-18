# Principles of Compilers - 7 Day Study Plan

> A structured study plan for mastering compiler fundamentals.

---

## Day 1: Lexical Analysis

### Key Concepts
- **Tokens, Patterns, and Lexemes** — the building blocks of lexical analysis
- Regular expressions and their role in defining token patterns
- Finite Automata: NFA → DFA conversion

### Example: Token Recognition

```c
// Input source code
int main() {
    int x = 42;
    return x;
}
```

Tokens generated:
| Token Type | Lexeme |
|-----------|--------|
| KEYWORD | `int` |
| IDENTIFIER | `main` |
| LPAREN | `(` |
| RPAREN | `)` |
| LBRACE | `{` |
| KEYWORD | `int` |
| IDENTIFIER | `x` |
| ASSIGN | `=` |
| INTEGER | `42` |
| SEMICOLON | `;` |

---

## Day 2: Syntax Analysis (Parsing)

### Key Concepts
- Context-Free Grammars (CFG)
- Top-down parsing: Recursive Descent, LL(1)
- Bottom-up parsing: LR(0), SLR, LALR

### Example: Grammar Rule

```
E → E + T | T
T → T * F | F
F → ( E ) | id
```

### FIRST and FOLLOW Sets
- `FIRST(E) = { (, id }`
- `FOLLOW(E) = { ), +, $ }`

---

## Day 3: Semantic Analysis

### Key Concepts
- Attribute grammars (synthesized vs inherited attributes)
- Type checking and type inference
- Symbol table management
- Scope resolution

### Type Checking Example

```python
def add(a: int, b: int) -> int:
    return a + b  # Type-safe ✓

result = add(1, "hello")  # Type error ✗
```

---

## Day 4: Intermediate Code Generation

### Key Concepts
- Three-address code (TAC)
- Abstract Syntax Trees (AST)
- Directed Acyclic Graphs (DAG)

### TAC Example

```
Source: a = b * c + b * c

t1 = b * c
t2 = b * c
t3 = t1 + t2
a = t3

// Optimized with DAG:
t1 = b * c
a = t1 + t1
```

---

## Day 5: Code Optimization

### Key Concepts
- Local optimization: constant folding, dead code elimination
- Loop optimization: invariant code motion, strength reduction
- Global optimization: data flow analysis

### Optimization Example

```c
// Before optimization
for (int i = 0; i < n; i++) {
    x = y + z;      // Loop invariant
    a[i] = x * i;
}

// After optimization
x = y + z;          // Moved outside loop
for (int i = 0; i < n; i++) {
    a[i] = x * i;
}
```

---

## Day 6: Code Generation

### Key Concepts
- Register allocation (graph coloring)
- Instruction selection
- Target code generation

---

## Day 7: Review & Practice

### Exam Topics Checklist
- [ ] NFA to DFA conversion
- [ ] LL(1) parsing table construction
- [ ] LR parsing (shift-reduce)
- [ ] Type checking rules
- [ ] Three-address code generation
- [ ] Basic block optimization
- [ ] Register allocation strategies
