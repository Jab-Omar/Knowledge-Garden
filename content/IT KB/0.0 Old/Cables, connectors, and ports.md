
[[Network Knowledge Base|🔙 Retour à l'index ]]

---

## Table of Contents

1. [[#What is Ethernet?]]
2. [[#Binary: Bits and Bytes]]
3. [[#Network Speeds]]
4. [[#Copper UTP connections]]
  - [[#IEEE 802.3 standards (copper)]]
  - [[#Straight-through and crossover cables]]
  - [[#Common device types and their Tx/Rx pin pairs]]
  - [[#Auto MDI-X]]
5. [[#Fiber-optic connections]]
  - [[#The anatomy of a fiber-optic cable]]
  - [[#Overview of Some Fiber Optic Standards]]
6. [[#UTP vs. Fiber]]
7. [[#Summary]]



---
## What is Ethernet ?

Network standards are essential rules that enable devices from different brands to seamlessly connect and communicate with each other, whether via **wired** or **wireless** connections. These standards ensure that **data** is exchanged efficiently and without errors.

**Key Standards:**

**Ethernet (IEEE 802.3):**  
- Governs **wired** connections.  
- Defines how devices connect via cables to exchange data.  
- Widely used in **local area networks (LANs)** for fast and reliable connections.  

**Wi-Fi (IEEE 802.11):**  
- Governs **wireless** connections.  
- Allows devices to connect without cables, ensuring flexibility and convenience.  

**Why Network Standards Matter:**  
Thanks to these standards, devices can easily communicate regardless of their connection type—whether they use cables or wireless signals.

**In Summary:**  
- **Ethernet** is a cornerstone of **wired networks**.  
- It’s part of a broader set of standards that enable seamless communication between **all types of devices**.

Network standards make the modern digital world possible, ensuring that our devices can always stay connected and share information effortlessly.


---
## Binary: Understanding Bits and Bytes

- **Bit**: The smallest unit of information, a bit can be either **0** or **1**. It's the fundamental language that computers use to process and store data.
    
- **Byte**: A byte is made up of 8 bits. It’s commonly used to measure data size, such as representing one character of text (e.g., "A").
    

Computers exchange information by transmitting **sequences of bits** (0s and 1s) through cables or wireless signals. When data is sent over cables, such as in **Ethernet connections**, these bits are converted into electrical signals or light pulses that travel along the wire.

### How Ethernet Transmits Data

In an Ethernet network, devices like computers and switches communicate by sending **electrical signals** through copper cables. Each signal represents either a **0** or a **1**, depending on the voltage level.

- **High voltage** might represent a 1.
- **Low voltage** could represent a 0.

These electrical signals are then decoded by the receiving device to reconstruct the data, allowing devices on the network to exchange information rapidly and efficiently.


> [!Example]+
> ![[02_ CablesConnectorsAndPorts_01.png]]
> *A router sends 1 byte of data to a switch. Changes in the voltage of the electric signal indicate values of 0 or 1.*

---

## Network Speeds

Network speeds are measured in **bits per second (bps)**. Because modern networks transfer data at incredibly high speeds, we use larger units:

- **Kilobits (kb)** = 1,000 bits
- **Megabits (Mb)** = 1,000,000 bits
- **Gigabits (Gb)** = 1,000,000,000 bits
- **Terabits (Tb)** = 1,000,000,000,000 bits

**Example speeds**:

- 56 kbps (56 kilobits per second)
- 100 Mbps (100 megabits per second)
- 10 Gbps (10 gigabits per second)


> [!Question]+ 1,000 or 1,024 bits?
> There can be confusion about whether 1 kilobit is 1,000 bits or 1,024 bits. Here's a breakdown to help clear things up:
>
>**Decimal (Base-10) System:**
>
In most networking contexts, we use the decimal system, where:
>
>- **1 kilobit (kb) = 1,000 bits**
>- **1 megabit (Mb) = 1,000 kilobits**
>- **1 gigabit (Gb) = 1,000 megabits**
>- **1 terabit (Tb) = 1,000 gigabits**
>
These values are used to measure things like network speeds.
>
>**Binary (Base-2) System:**
>
In computing, binary prefixes are used, based on powers of 2 (e.g., 2^10 = 1,024):
>
>- **1 kibibit (Kib) = 1,024 bits**
>- **1 mebibit (Mib) = 1,024 kibibits**
>- **1 gibibit (Gib) = 1,024 mebibits**
>- **1 tebibit (Tib) = 1,024 gibibits**
>
>**The Key Difference:**
>
>- **Decimal system (1,000)** is used for network speeds and large data transfer rates.
>- **Binary system (1,024)** is used for computer memory and storage.

---

## Copper UTP connections

**Copper Ethernet cables** (commonly referred to as **UTP - Unshielded Twisted Pair**) are used for networking connections. These cables are popular because they are cost-effective, reliable, and suitable for short to medium distances.

**Key Features of UTP Cables:**

- **Unshielded**: No metallic shielding around the wires, which makes UTP cables more affordable but more susceptible to electromagnetic interference (EMI).
- **Twisted Pair**: The 8 wires inside the cable are twisted in pairs to reduce interference between them.

**Connectors:**

- **8P8C connectors**: Often referred to as **RJ45**, these connectors have 8 pins, one for each wire inside the cable.

> [!Example]+
> ![[02_ CablesConnectorsAndPorts_02.png]]
> *Two 8P8C ports on a Cisco switch (left) and an 8P8C connector on a copper UTP network cable (right)*


### IEEE 802.3 standards (copper)

The **IEEE** (Institute of Electrical and Electronics Engineers) defines a range of standards for Ethernet cables that cover different speeds, cable types, and distances.

**Types of Names for Each Standard:**

1. **Speed-derived name**: Indicates the speed, such as 10BASE-T (10 Mbps), 100BASE-T (100 Mbps).
2. **IEEE Task Group Name**: Identifies the IEEE group responsible for creating the standard, e.g., IEEE 802.3i.
3. **Informal Name**: A commonly used name, typically based on the speed and cable type, like **Gigabit Ethernet** for 1000BASE-T.

**Overview of Some Copper Ethernet Standards**

The following table summarizes some key copper Ethernet standards, their speeds, and the cables used.

| Speed    | Speed-Derived Name | IEEE Task Group | Informal Name    | Max Cable Length | Cable Name |
| -------- | ------------------ | --------------- | ---------------- | ---------------- | ---------- |
| 10 Mbps  | 10BASE-T           | IEEE 802.3i     | Ethernet         | 100 m            | Cat 3      |
| 100 Mbps | 100BASE-T          | IEEE 802.3u     | Fast Ethernet    | 100 m            | Cat 5      |
| 1 Gbps   | 1000BASE-T         | IEEE 802.3ab    | Gigabit Ethernet | 100 m            | Cat 5e     |
| 10 Gbps  | 10GBASE-T          | IEEE 802.3an    | 10 Gig Ethernet  | 100 m            | Cat 6a     |

> [!NOTE]+
> - **IEEE 802.3**: This standard defines **how Ethernet networks work**. It specifies the **rules for data transmission**, the **communication protocol**, and the **speed** at which data can travel over the network.
>- **Physical Cables**: While **IEEE 802.3** defines the network protocol, it **does not define the physical cables** used to connect devices in an Ethernet network.
>- The **cables** (like **Cat 5** and **Cat 6**) are actually defined by two other organizations:  
   > 	- **EIA** (Electronic Industries Alliance)
   > 	- **TIA** (Telecommunications Industry Association)
>- **Ethernet Cable**: The term "Ethernet cable" is commonly used, but it's a bit misleading. While it refers to the cables used for Ethernet networks, the physical specifications of these cables are set by **EIA** and **TIA**, not by IEEE.

### Straight-through and crossover cables

**Straight-Through** cables are used to connect **different devices**, such as a **PC to a switch**.

**Wiring Structure**:

- **Pair 1**: Connected to **pins 1 and 2** (used for **transmitting** data - Tx).
- **Pair 2**: Connected to **pins 3 and 6** (used for **receiving** data - Rx).

**How it Works**:

- The **PC** uses **pins 1 and 2** to transmit (Tx), while the **switch** uses these same pins to receive (Rx).
- The **switch** uses **pins 3 and 6** to transmit (Tx), while the **PC** uses these same pins to receive (Rx).

**Example Use Case**:
- **PC to Switch Connection**: The straight-through cable works perfectly here because the devices have opposite roles in communication (one transmits, the other receives).



> [!Example]
> ![[02_ CablesConnectorsAndPorts_03.png]]
> *A PC and a switch connected via a straight-through cable*


In this configuration, the **PC** uses **pins 1 and 2** to transmit data (Tx) and the **switch** uses **pins 1 and 2** to receive data (Rx). Similarly, the **switch** uses **pins 3 and 6** to transmit data (Tx), and the **PC** uses **pins 3 and 6** to receive data (Rx).

This wiring works perfectly when connecting devices that communicate in opposite directions, such as a **PC to a switch**.


Now, consider connecting **two similar devices**, such as **two routers**, or **two PCs** together using a **straight-through cable**. This can cause issues:

- **Problem**: Both devices are trying to **transmit data** on the same pins.
    - The **Tx pins (1-2)** from one device will be connected to the **Tx pins (1-2)** of the other device, which causes communication failure.


> [!Example]+
> ![[02_ CablesConnectorsAndPorts_04.png]]
> Two routers connected via a straight-through cable. Because both routers transmit data using the same pin pair, communication fails.


Crossover Cable is used to connect **similar devices** (like **router to router** or **PC to PC**), a **crossover cable** is used. The crossover cable swaps the transmission and reception pins, allowing proper communication between the two devices. PC).

- **Router to Router**: The crossover cable swaps the Tx and Rx pins for each device, allowing them to communicate correctly.


> [!Example]+
> ![[02_ CablesConnectorsAndPorts_05.png]]
> *Two routers connected via a crossover cable. The Tx pin pair of one router connects to the Rx pin pair of the other router.*

### Common device types and their Tx/Rx pin pairs

| Device Type | Transmit (Tx) Pins | Receive (Rx) Pins |
|-------------|--------------------|-------------------|
| Router      | 1 and 2            | 3 and 6           |
| Firewall    | 1 and 2            | 3 and 6           |
| PC/Server   | 1 and 2            | 3 and 6           |
| Switch      | 3 and 6            | 1 and 2           |


### Auto MDI-X

**Overview**

With modern networking equipment, you no longer have to worry about choosing between **straight-through** and **crossover** cables. This is thanks to a feature called **Auto Medium-Dependent Interface Crossover (Auto MDI-X)**.

**How Auto MDI-X Works**

Auto MDI-X automatically detects the type of device it’s connected to and adjusts the pins it uses to transmit and receive data. This means that a device can reverse its transmit and receive pins based on whether it is connected to another similar device (like router-to-router or PC-to-PC) or a different device (like PC-to-switch or router-to-switch).

**Why This Matters**

- **Straight-through and crossover cables** are still important to understand, especially for exams, but **in practice**, Auto MDI-X removes the need to worry about which type of cable to use.
- **Example:** Two routers connected via a straight-through cable. Normally, the routers transmit on **pins 1-2** and receive on **pins 3-6**, but with Auto MDI-X, the router on the right can automatically reverse the pins and transmit on **pins 3-6** while receiving on **pins 1-2**.


> [!Example]+
> ![[02_ CablesConnectorsAndPorts_06.png]]
> *Two routers connected via a straight-through cable. The router on the right uses Auto MDI-X to adjust which pins it uses to transmit and receive data.*

---

## Fiber-optic connections

Copper UTP cables are common in LANs due to their low cost and broad compatibility, but they are limited to a **100-meter distance**. While sufficient for devices on the same floor, this isn’t ideal for multi-floor or inter-building connections. For longer distances, **fiber-optic cabling** is preferred. Unlike copper, fiber-optic cables transmit data using **light signals** through **glass fibers**, offering superior range but requiring careful handling to avoid damage or signal loss.


### The anatomy of a fiber-optic cable


A typical **fiber-optic connection** uses **two cables**: one for transmitting and one for receiving data. These cables connect to an **SFP (Small Form-Factor Pluggable) transceiver**, which is inserted into an SFP port on the device. SFP transceivers are modular and must be purchased separately, and they can be surprisingly expensive.

>[!example]+
>![[02_ CablesConnectorsAndPorts_07.png]]
>*A Cisco switch with an SFP transceiver inserted into one of its SFP ports. An additional SFP is placed on top of the switch.*


A **fiber-optic cable** consists of several layers:

1. **Core**: A thin glass fiber that carries the light signal (core thickness varies by cable type).
2. **Cladding**: A reflective layer that helps guide the light along the core.
3. **Buffer**: Provides protection to the core.
4. **Outer Jacket**: The protective outer layer of the cable.


>[!example]+
>![[02_ CablesConnectorsAndPorts_08.png]]
>*The typical structure of a fiber-optic cable. An outer jacket (4) and buffer (3) serve to protect and contain the inner components. A layer of reflective cladding (2) helps carry the light signal along the glass core (1).*


All types of fiber-optic cabling can carry a signal farther than copper cabling, but even within the category of fiber-optic cabling, the maximum supported length can vary greatly. There are two main types of fiber-optic cabling: multimode fiber (MMF) and single-mode fiber (SMF).

>[!example]+
>![[02_ CablesConnectorsAndPorts_09.png]]
>*Light travels down an MMF cable at multiple angles (modes), whereas light travels down SMF cables at a single angle.*

**MMF (Multimode Fiber)** cables have a wider core and use **LED transmitters** that send light at multiple angles. They typically support distances of **several hundred meters**.  
**SMF (Single-Mode Fiber)** cables have a narrower core and use **laser transmitters** that send light in a single direction, allowing for **longer distances**—up to **tens of kilometers**. SMF transmitters are more expensive than MMF's LED transmitters.

**Overview of Some Fiber Optic Standards**

| Speed       | Standard | Connection Speed | Mode Support       | Max Transmission Distance          |
| ----------- | -------- | ---------------- | ------------------ | ---------------------------------- |
| 1000BASE-LX | 802.3z   | 1 Gbps           | Multimode / Single | 550 meters (Multi) / 5 km (Single) |
| 10GBASE-SR  | 802.3ae  | 10 Gbps          | Multimode          | 400 meters                         |
| 10GBASE-LR  | 802.3ae  | 10 Gbps          | Single             | 10 kilometers                      |
| 10GBASE-ER  | 802.3ae  | 10 Gbps          | Single             | 30 kilometers                      |

---

## UTP vs. Fiber

| **Aspect**               | **Copper UTP**                                                      | **Fiber-Optic**                                                                                          |
| ------------------------ | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Distance Support**     | Limited to 100 meters                                               | Supports much greater distances (up to tens of kilometers)                                               |
| **Cost**                 | Lower cost (cheaper cables and no need for SFP transceivers)        | Higher cost (expensive SFP transceivers)                                                                 |
| **Common Use**           | Connections from switches to end hosts on the same floor            | Connections between network infrastructure (e.g., switches and routers on different floors or buildings) |
| **Vulnerability to EMI** | Can be affected by electromagnetic interference (EMI)               | Immune to EMI                                                                                            |
| **Signal Leakage**       | Can emit signals outside the cable, posing security risks           | No signal leakage, more secure                                                                           |
| **Device Compatibility** | Most devices (e.g., PCs) use UTP connections, no need for SFP ports | Devices must have SFP ports, limiting its use for client devices                                         |
| **Maximum Distance**     | Limited to short distances (100 meters)                             | Suitable for long-distance connections (hundreds of meters to kilometers)                                |

---

## Summary

- **Network Standards**: These are rules that ensure devices can communicate over a network. Ethernet, defined by the IEEE 802.3 standard, is used for wired connections.
    
- **Binary Communication**: Computers communicate using 0s and 1s (bits). A group of 8 bits is called a byte.
    
- **Network Speeds**: Measured in bits per second (bps), with units like kilobits (kb), megabits (Mb), gigabits (Gb), and terabits (Tb).
    
- **UTP Cables**: Most Ethernet networks use **unshielded twisted pair (UTP)** cables. These cables have 8 wires twisted into 4 pairs to reduce electromagnetic interference (EMI). The connectors used are **RJ45** (8P8C).
    
- **Ethernet Standards**:
    
    - **10BASE-T and 100BASE-T**: Use 2 wire pairs.
    - **1000BASE-T and 10GBASE-T**: Use all 4 pairs.
    - All of these have a maximum cable length of 100 meters.
    - **Auto MDI-X** lets devices automatically adjust how they send and receive data.
- **Fiber Optic Cables**: They send light signals and support much longer distances than UTP cables.
    
    - **Single-mode fiber (SMF)**: Supports longer distances (kilometers), but is more expensive.
    - **Multi-mode fiber (MMF)**: Supports shorter distances (hundreds of meters) and is cheaper.
- **Cost and Usage**:
    
    - **UTP Cables**: Less expensive and commonly used to connect devices to switches (e.g., a PC to a switch).
    - **Fiber Optic Cables**: More expensive but are used for connecting network devices over long distances, such as between different floors or buildings.

---

[[Network Knowledge Base|🔙 Retour à l'index ]]