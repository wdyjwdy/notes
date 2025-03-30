# Crypto

## 对称加密

## 非对称加密

### RSA

**Key Generation**

1. Choose two large prime numbers `p` and `q`
2. Compute `n = pq` and `z = (p - 1)(q - 1)`
3. Choose a number `e` less than `n` such that `e` and `z` are coprime
4. Choose a number `d` such that `ed mod z = 1`
5. Finally, the public key is `(n, e)` and the private key is `(n, d)`

**Encryption and Decryption**

- Encryption: $c = m^e \mod n$
- Decryption: $m = c^d \mod n$

Where $m < n$
