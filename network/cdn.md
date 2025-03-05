# CDN

## Lookup

```mermaid
sequenceDiagram
  Client ->> Resolver: Domain Name
  Resolver ->> DNS: Domain Name
  DNS ->> Resolver: CNAME
  Resolver ->> PoP: CNAME
  PoP ->> Resolver: Cache Server IP
  Resolver ->> Client: Cache Server IP
```
