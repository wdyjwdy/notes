class HashSet {
    buckets: number
    table: number[][]

    constructor() {
        this.buckets = 997
        this.table = Array.from({ length: this.buckets }, () => [])
    }

    add(key: number): void {
        if (!this.contains(key)) {
            const i = this.hash(key)
            this.table[i].push(key)
        }
    }

    remove(key: number): void {
        const i = this.hash(key)
        this.table[i] = this.table[i].filter(x => x !== key)
    }

    contains(key: number): boolean {
        const i = this.hash(key)
        return this.table[i].includes(key)
    }

    hash(key: number): number {
        return key % this.buckets
    }
}

class MyHashMap {
    buckets: number
    table: number[][][]

    constructor() {
        this.buckets = 997
        this.table = Array.from({ length: this.buckets }, () => [])
    }

    put(key: number, value: number): void {
        const i = this.hash(key)
        const v = this.table[i].find(x => x[0] === key)
        if (v) {
            v[1] = value
        } else {
            this.table[i].push([key, value])
        }
    }

    get(key: number): number {
        const i = this.hash(key)
        const v = this.table[i].find(x => x[0] === key)
        if (v) {
            return v[1]
        } else {
            return -1
        }
    }

    remove(key: number): void {
        const i = this.hash(key)
        this.table[i] = this.table[i].filter(x => x[0] !== key)
    }

    hash(key: number): number {
        return key % this.buckets
    }
}
