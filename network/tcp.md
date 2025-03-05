# TCP

## Header

```mermaid
---
title: "TCP Packet"
---
packet-beta
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"
64-95: "Acknowledgment Number"
96-99: "Data Offset"
100-105: "Reserved"
106: "URG"
107: "ACK"
108: "PSH"
109: "RST"
110: "SYN"
111: "FIN"
112-127: "Window"
128-143: "Checksum"
144-159: "Urgent Pointer"
160-191: "(Options and Padding)"
192-255: "Data (variable length)"
```

## Connection

### 三次握手

```mermaid
%%{init: { "showSequenceNumbers": "true" } }%%
sequenceDiagram
  Client ->> Server: SYN
  Server ->> Client: SYN, ACK
  Client ->> Server: ACK
```

1. 客户端请求建立连接，发送 SYN 报文 (SEQ: 100)
2. 服务端返回 SYN 的 ACK，并请求建立连接，发送 SYN 报文 (SEQ: 300, ACK: 101)
3. 客户端返回 SYN 的 ACK (SEQ: 101, ACK: 301)
4. 客户端开始传数据 (SEQ: 101, ACK: 301)

### 四次挥手

```mermaid
%%{init: { "showSequenceNumbers": "true" } }%%
sequenceDiagram
  Client ->> Server: FIN
  Server ->> Client: ACK
  Server ->> Client: FIN
  Client ->> Server: ACK
```

1. 客户端请求断开连接，发送 FIN 报文 (SEQ: 100, ACK: 300)
2. 服务端返回 FIN 的 ACK (SEQ: 300, ACK: 101)
3. 服务端请求断开连接，发送 FIN 报文 (SEQ: 300, ACK: 101)
4. 客户端返回 FIN 的 ACK (SEQ: 101, ACK: 301)
