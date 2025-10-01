 [[Network Knowledge Base|🔙 Back to the Index ]] 
 
---

## Table of Contents

1. [[#What is a Network ?]]
2. [[#Networking Devices]]
    - [[#Clients and servers]]
    - [[#Switches (Layer 2)]]
    - [[#Routers (Layer 3)]]
    - [[#Firewalls (Can operate at Layers 3, 4, and 7)]]
3. [[#Summary]]

---

## What is a Network ?

A **network** connects devices to share resources and communicate. In a **computer network**, devices (also called **nodes**) can include things like computers, TVs, phones, and network infrastructure such as routers and switches. A **resource** is anything shared across the network, like webpages, shared printers, or cloud applications.

In short, a network links **nodes** to efficiently share **resources**.

---

## Networking Devices

### Clients and servers

In a network, **clients** and **servers** have different roles:

- A **client** requests a service.
- A **server** provides the service.

These roles can change depending on the situation. For example, a TV streaming content from Netflix is a **client**, while Netflix’s server is the **server**. Devices can switch roles, like two PCs sharing a file—one acting as the **server** and the other as the **client**.

**Endpoints** or **end hosts** refer to both clients and servers, with other devices in the network connecting them.

>[!example]+
>![[01_IntroToNetworks_01.png]]
>*Two desktop PCs sharing a file. The PC on the left is functioning as a client, and the PC on the right is functioning as a server.*


### Switches (Layer 2)

A **switch** connects devices within a **Local Area Network (LAN)**, allowing them to communicate with each other.

Key points:

- Devices connect to the switch via **ports** (physical connectors).
- Switches have many ports (usually 24-48) to support multiple devices.
- A switch manages communication **within a LAN** but does not connect to external networks.

In essence, a switch acts as a central hub for devices to interact within a local network.

>[!Example]+
>![[01_IntroToNetworks_02.png]]
>*Three end hosts connected to a switch*


### Routers (Layer 3)

A **router** connects a **LAN** to external networks like the internet, enabling communication beyond the local network.

Key points:

- **Routers** are placed at the **edge** of a LAN to connect it to other networks, including the internet.
- Unlike switches, which operate within a LAN, routers manage communication **between LANs** and external networks.
- **Wireless routers** combine a router, switch, access point, and firewall, serving small networks.

Simply put, while switches connect devices within a LAN, routers link LANs to external networks.

>[!example]+
>![[01_IntroToNetworks_03.png]]
>*Two LANs connected to the internet via a router at the edge of each LAN*

>[!note]+
>A **cloud icon** in a network diagram represents parts of the network that are not important or are unknown. For example, it’s often used to show the **internet** without detailing its complexity. In this case, we only need to know that the two LANs are connected to the internet.

### Firewalls (Can operate at Layers 3, 4, and 7)

A **firewall** controls the traffic entering or leaving a network, either as hardware or software, and works based on pre-configured rules.

- **Network firewalls** filter traffic for the entire network.
- **Host-based firewalls** are installed on individual devices, filtering traffic specific to that device.
- **Next-Generation Firewalls (NGFW)** offer advanced filtering for enhanced security.

Firewalls **protect networks** by blocking harmful traffic and allowing safe communication based on set rules.


> [!Example]+
> ![[01_IntroToNetworks_04.png]]
> *A firewall between each LAN and the internet secures the network. Network communications between the two LANs are allowed, but malicious traffic from an attacker is denied.*


---

## Summary

- A **Local Area Network (LAN)** connects devices in a small area, like an office, while a **Wide Area Network (WAN)** spans large distances, such as between cities.
- **Clients** request services from **servers**, and servers provide those services. Depending on the task, devices can act as both clients and servers.
- **Switches** connect devices within a LAN, offering many ports for device connections.
- **Routers** connect LANs to external networks like the internet.
- A **wireless router** combines a router, switch, access point, and firewall into one device.
- **Firewalls** filter traffic to protect networks by blocking harmful content and allowing secure communication.

---


 [[Network Knowledge Base|🔙 Back to the Index ]]