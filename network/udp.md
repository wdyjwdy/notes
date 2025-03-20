# UDP

[User Datagram Protocol](https://datatracker.ietf.org/doc/html/rfc768) (UDP),
which provides an unreliable, connectionless service to the invoking application.

Services provided by UDP:

1. data delivery
2. error checking

## Multiplexing

Extending the host-to-host delivery service provided by the network layer to a **process-to-process** delivery service.

1. **multiplexing**: gathering data from different sockets, and passing the segments to the network layer
2. **demultiplexing**: delivering the data in segment to the correct socket

> [!TIP]
> UDP socket is fully identified by (destination IP, destination Port). if two UDP segments have different source IP or Port, but have the same destination IP and Port, they will be directed to the same process via the same socket.

![multiplexing](../imgs/network-udp-multiplexing.svg)

## Header

```mermaid
packet-beta
title UDP Packet
0-15: "Source Port"
16-31: "Destination Port"
32-47: "Length"
48-63: "Checksum"
64-95: "Data (variable length)"
```

Port number is a 16-bit number, ranging from 0 to 65535. The port numbers ranging from 0 to 1023 are called well-known port numbers, they are reserved for use by well-known application protocols.
