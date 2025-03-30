# Crypto

## 对称加密

## 非对称加密

### RSA

**Key Generation**

1. Choose two large prime numbers $p$ and $q$
2. Compute $n = pq$ and $z = (p - 1)(q - 1)$
3. Choose a number $e$ less than $n$ such that $e$ and $z$ are coprime
4. Choose a number $d$ such that $ed \mod z = 1$
5. Finally, the public key is $(n, e)$ and the private key is $(n, d)$

**Encryption and Decryption**

1. Encryption: $c = m^e \mod n$
2. Decryption: $m = c^d \mod n$

Where $m < n$

**Example**

| p   | q   | n   | z   | e   | d   |
| --- | --- | --- | --- | --- | --- |
| 11  | 13  | 143 | 120 | 7   | 103 |

- Public Key: $(143, 7)$
- Private Key: $(143, 103)$
- Message: `hello`

| Message | ASCII | Encryption | Decryption | Message |
| ------- | ----- | ---------- | ---------- | ------- |
| h       | 104   | 91         | 104        | h       |
| e       | 101   | 62         | 101        | e       |
| l       | 108   | 4          | 108        | l       |
| l       | 108   | 4          | 108        | l       |
| o       | 111   | 45         | 111        | o       |
