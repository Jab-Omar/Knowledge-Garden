---
title: TCP/IP Model
---
[[Network Knowledge Base|🔙 Back to Index ]]

---

## Understanding the TCP/IP Model

### What is the TCP/IP suite ?

The **TCP/IP Suite** is a conceptual model and set of communication protocols used on the Internet and other networks. It is named after two of its core protocols: TCP (Transmission Control Protocol) and IP (Internet Protocol).

- Developed by the US Department of Defense through **DARPA** (Defense Advanced Research Projects Agency) in the 1970s.
- It shares a similar layered structure with the OSI Model but consists of **fewer layers**.
- The TCP/IP model is the foundation of all modern network communication, while the OSI Model serves mainly as a conceptual guide for understanding and teaching networking.

![[TcpIP.png]]

### Key Differences from OSI:

- The Application, Presentation, and Session layers of OSI are combined into a single Application layer in TCP/IP.  
    *This is because TCP/IP focuses on practical communication functions, and many protocols handle these responsibilities together rather than separating them strictly.*
    
- Similarly, the Data Link and Physical layers of OSI are often grouped into one Network Access layer in TCP/IP.  
    *This grouping reflects how physical transmission and local network access protocols (like Ethernet or Wi-Fi) work closely together in real hardware.*

![[OsiVsTcp.png]]

---
## 5-Layer Model 

- The 4-layer model is practical and groups physical and link layers together, often used in real networking environments.
- The 5-layer model provides more granularity, helpful for teaching and understanding hardware vs protocol distinctions.
- Both models represent the same core concepts, differing mainly in how the bottom layers are organized.

![[5LayerTcpIp.png]]
*Image from : https://velog.io/@jummi10/Internet-5-layer-architecture*

---
[[Network Knowledge Base|🔙 Back to Index ]]