# Integers by Equivalence Classes

In $N\times N$ , let us define a relation $\sim$ as

$$(a,b)\sim(c,d)\Leftrightarrow a+d=b+c\;\forall\;a,b,c,d\in N$$

It can be easily seen that this relation $\sim$ is an equivalence relation & it partitions $N\times N$ into mutually disjoint equivalence classes.

Equivalence class w.r.t $(a,b)$ is

$$\overline{(a,b)}\;\text{or}\;[a,b]=\{\;(x,y)\in N\times N : (x,y)\sim(a,b)\;\}$$

This equivalence class behaves like the integer $a-b$ .

The set of all equivalence classes is denoted by $Z$ .

### Addition & Multiplication of Integers

$$[a,b]\oplus[c,d]=[a+c,b+d]$$

$$[a,b]\odot[c,d]=[ac+bd,ad+bc]$$

✱ $$\begin{align*}
[a,b]\oplus[c,d]
  &= (a-b)+(c-d) \\
  &= (a+c)-(b+d) \\
  &= [a+c,b+d]
\end{align*}$$

✱ $$\begin{align*}
[a,b]\odot[c,d]
  &= (a-b)\cdot(c-d) \\
  &= (ac+bd)-(ad+bc) \\
  &= [ac+bd,ad+bc]
\end{align*}$$

### Positive, Negative, & Zero Integers

The integer $[a,b]$ is positive, negative, or $0$ according as $a>b$, $a<b$, or $a=b$.

### Unity

$[a+1,a]$ is the unity.

## Algebraic Laws

### (i) $Z$ is closed w.r.t $(+)$

$$[a,b]\oplus[c,d]=[a+c,b+d]\in Z$$

### ✱ $Z$ is closed w.r.t $(\cdot)$

### (ii) Addition is associative in $Z$

$$\begin{align*}
[a,b]\oplus\{[c,d]\oplus[e,f]\}
  &= [a,b]\oplus[c+e,d+f] \\
  &= [a+(c+e),b+(d+f)] \\
  &= [(a+c)+e,(b+d)+f] \\
  &= [a+c,b+d]\oplus[e,f] \\
  &= \{[a,b]\oplus[c,d]\}\oplus[e,f]
\end{align*}$$

### ✱ Multiplication is associative in $Z$

### (iii) Addition is commutative in $Z$

### (iv) Multiplication is distributive over addition in $Z$

### (v) In $Z$ , cancellation laws hold w.r.t addition

$$\begin{align*}
[a,b]\oplus[c,d] &= [a,b]\oplus[e,f] \\
\Rightarrow[a+c,b+d] &= [a+e,b+f] \\
\Rightarrow a+c+b+f &= b+d+a+e \\
\Rightarrow a+c+f+b &= a+d+e+b \\
\Rightarrow c+f &= d+e \\
\Rightarrow(c,d) &\sim (e,f) \\
\Rightarrow[c,d] &= [e,f]
\end{align*}$$

**NOTE:** We know that $[x]=[y]\Leftrightarrow x\;R\;y$

### ✱ In $Z$ , cancellation laws hold w.r.t multiplication

*(Tricky solution)*

$$\begin{align*}
[a,b]\odot[c,d] &= [a,b]\odot[e,f],\;\;[a,b]\neq 0 \\
\Rightarrow ac+bd+af+be &= ad+bc+ae+bf &\text{...(1)}
\end{align*}$$

Since $[a,b]\neq 0$ , i.e. $a\neq b$ ; therefore $a>b$ or $a<b$ .

Let $a>b$ , then $\exists\;x\in N$ such that $a=b+x$ . Putting it in $\text{(1)}$ , we get

$$\begin{align*}
xc+xf &= xd+xe \\
\Rightarrow x(c+f) &= x(d+e) \\
\Rightarrow c+f &= d+e \\
\Rightarrow (c,d) &\sim (e,f) \\
\Rightarrow [c,d] &= [e,f]
\end{align*}$$
