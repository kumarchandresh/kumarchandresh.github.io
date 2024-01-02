# Rational Numbers by Equivalence Classes

In $Z\times Z_0$ , let us define a relation $\sim$ as

$$(a,b)\sim(c,d)\Leftrightarrow ad=bc\;\forall\;(a,b),(c,d)\in Z\times Z_0$$

It cab be easily seen that this relation $\sim$ in an equivalence relation & it partitions $Z \times Z_0$ into mutually disjoint equivalence classes.

Equivalence class with respect to $(a,b)$ is

$$\overline{(a,b)}\;\text{or}\;[a,b]=\{\;(x,y)\in Z\times Z_0 : (x,y)\sim(a,b)\;\}$$

This equivalence class behaves like the rational number $a/b$ .

The set of all rational numbers is denoted by $Q$ .

### Equality of Two Classes

$$[a,b]=[c,d]\Leftrightarrow(a,b)\sim(c,d)\Leftrightarrow ad=bc$$

### Addition & Multiplication of Rational Numbers

$$[a,b]\oplus[c,d]=[ad+bc,bd]$$

$$[a,b]\odot[c,d]=[ac,bd]$$

✱ $$\begin{align*}
[a,b]\oplus[c,d]
  &= \frac{a}{b}+\frac{c}{d} \\
  &= \frac{ad+bc}{bd} \\
  &= [ad+bc,bd]
\end{align*}$$

✱ $$\begin{align*}
[a,b]\odot[c,d]
  &= \frac{a}{b}\cdot\frac{c}{d} \\
  &= \frac{ac}{bd}
\end{align*}$$

### Unity

If $a\neq 0$ , then $[a,a]$ will be the unity.

### Zero

$[0,b]$ is the zero.

## Algebraic Laws

### (i) $Q$ is closed w.r.t $+$

$$[a,b]\oplus[c,d]=[ad+bc,bd]\in Q$$

### (ii) Addition is associative in $Q$

$$\begin{align*}
[a,b]\oplus\{[c,d]\oplus[e,f]\}
  &= [a,b]\oplus[cf+de,df] \\
  &= [a(df)+b(cf+de),b(df)] \\
  &= [a(df)+b(cf)+b(de),b(df)] \\
  &= [(ad)f+(bc)f+(bd)e,(bd)f] \\
  &= [ad+bc,bd]\oplus[e,f] \\
  &= \{[a,b]\oplus[c,d]\}\oplus[e,f]
\end{align*}$$

### ✱ Multiplication is associative in $Q$

### (iii) Addition is commutative in $Q$

### ✱ Multiplication is commutative in $Q$

### (iv) Multiplication is distributive over addition in $Q$

$$\begin{align*}
[a,b]\odot\{[c,d]\oplus[e,f]\}
  &= [a,b]\odot[cf+de,df] \\
  &= [a(cf+de),b(df)] \\
  & =[(ac)f+(ad)e,(bd)f] &\text{...(1)}
\end{align*}$$

$$\begin{align*}
\text{Also,}\;[a,b]\odot[c,d]\oplus[a,b]\odot[e,f]
  &=[ac,bd]\oplus[ae,bf] \\
  &=[(ac)(bf)+(bd)(ae),(bd)(bf)] \\
  &=[(ac)fb+(ad)eb,(bd)fb] \\
  &=[(ac)f+(ad)e,(bd)f] &\text{...(2)}
\end{align*}$$

From $\text{(1)}$ and $\text{(2)}$, we have

$$[a,b]\odot\{[c,d]\oplus[e,f]\}=[a,b]\odot[c,d]\oplus[a,b]\odot[e,f]$$

### (v) In $Q$ , cancellation laws hold w.r.t addition

$$\begin{align*}
[a,b]\oplus[c,d] &= [a,b]\oplus[e,f] \\
\Rightarrow\frac{a}{b}+\frac{c}{d} &= \frac{a}{b}+\frac{e}{f} \\
\Rightarrow\frac{ad+bc}{bd} &= \frac{af+be}{bf} \\
\Rightarrow\frac{ad+bc}{d} &= \frac{af+be}{f} \\
\Rightarrow adf+bcf &= daf+dbe \\
\Rightarrow bcf &= bde \\
\Rightarrow cf &= de \\
\Rightarrow(c,d) &\sim (e,f) \\
\Rightarrow[c,d] &= [e,f]
\end{align*}$$

### ✱ In $Q$ , cancellation laws hold w.r.t multiplication

$$\begin{align*}
[a,b]\odot[c,d] &= [a,b]\odot[e,f],\;\;[a,b]\neq 0 \\
\Rightarrow\frac{a}{b}\cdot\frac{c}{d} &= \frac{a}{b}\cdot\frac{e}{f},\;\;a\neq 0 \\
\Rightarrow\frac{ac}{bd} &= \frac{ae}{bf} \\
\Rightarrow\frac{ac}{d} &= \frac{ae}{f} \\
\Rightarrow\frac{c}{d} &= \frac{e}{f} & (\because a\neq 0) \\
\Rightarrow(c,d) &\sim (e,f) \\
\Rightarrow[c,d] &= [e,f]
\end{align*}$$
