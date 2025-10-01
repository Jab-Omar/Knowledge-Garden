---
title: Layer Interactions
---
[[Network Knowledge Base|🔙 Back to Index ]]

---

## Layer Interactions: How Devices Communicate

### Adjacent-Layer Interaction (Within the Same Device)

Adjacent-layer interaction happens **between neighboring layers on the same device**. Each layer depends on the one below it to provide specific services, while offering services to the layer above.

- The **higher layer** sends data and **requests a service** from the layer just below it.
- The **lower layer** receives the request, **adds necessary control information** (like headers), and passes the data down.

**Example:**  
The Application layer gives data to the Transport layer. The Transport layer adds a TCP header (like labeling the data) and sends it to the Network layer.
**Key point:** Each layer works as a service provider to the layer above and a service user to the layer below.


---
### Same-Layer Interaction (Between Different Devices)

Same-layer interaction occurs **between corresponding layers on two different devices**. This is called **peer-to-peer communication**, and it follows specific protocols.

- The layers don’t communicate directly; instead, they send data down through the lower layers on their own device, across the network, and then back up through the layers on the receiving device.
- The protocol defines how these layers talk to each other—what format to use, how to respond, and so on.

**Example:**  
The Transport layer on your computer uses TCP to communicate with the Transport layer on the server, ensuring data is reliably delivered. Similarly, the Application layers (like web browsers and servers) use HTTP to exchange web pages.

**Key point:** Peer layers communicate using agreed-upon protocols, ensuring both sides understand each other.

---
[[Network Knowledge Base|🔙 Back to Index ]]