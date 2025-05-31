# 📍 Perception in Autonomous Driving

This document explains how autonomous vehicles perceive the world around them — a crucial foundation for making safe and intelligent driving decisions.

---

## 🧠 What is Perception?

Perception is the task of understanding the environment and how the ego vehicle is moving within it.

### Core Functions of Perception:

* **Identify static and dynamic objects**
* **Predict object motion**
* **Estimate the ego vehicle’s position and movement**

---

## 📆 Components of a Driving Task

```mermaid
graph TD
    A[Driving Task] --> B[Perception]
    A --> C[Decision-Making]
    B --> D[OEDR: Object & Event Detection and Response]
    C --> E[Driving Actions: Brake, Accelerate, Turn]
```

---

## 🌟 Goals of Perception

### 1. **Identify Static Elements**

| Static Element    | Examples                        |
| ----------------- | ------------------------------- |
| Road Layout       | Lane markings, zebra crossings  |
| Traffic Signals   | Stop lights, pedestrian signals |
| Road Signs        | Speed limit, hospital, school   |
| Off-Road Elements | Curbs, barriers                 |
| Road Obstructions | Cones, construction markers     |


### Road Layout

![image](https://github.com/user-attachments/assets/03645e3e-6e21-4a06-97be-6a5dc1744c6f)

### Traffic Signals

![image](https://github.com/user-attachments/assets/208292f6-53b1-4d69-981b-5329ffade6d7)

### Road Signs

![image](https://github.com/user-attachments/assets/9d3329a8-cd94-41d2-88f1-d47e60ecdc41)


### Off-Road Elements

![image](https://github.com/user-attachments/assets/11372364-0e01-47c5-8c5b-c4b59ba022fb)

### Road Obstruction

![image](https://github.com/user-attachments/assets/824c84c4-714b-4772-abe1-d6b5adc87bfe)



### 2. **Identify Dynamic Elements**

| Type               | Examples            | Challenge Level |
| ------------------ | ------------------- | --------------- |
| Vehicles (4-wheel) | Cars, trucks, buses | Medium          |
| Two-Wheelers       | Bikes, motorcycles  | High            |
| Pedestrians        | Walking individuals | Very High       |

> 🧠 **Note**: Human motion is much more unpredictable than vehicle motion. Dynamic objects are more of moving objects like trucks, pedestrians.

### Vehicles (different types)

![image](https://github.com/user-attachments/assets/026754d2-51ce-489e-9220-4bd0135a8f0f)

### Pedestrians 

![image](https://github.com/user-attachments/assets/ce3fda23-4c74-4a6e-ab72-37533c04008e)


---

### 3. **Ego Localization**

 - Understanding where *you* (the car) are and how you're moving:
 - Includes Position, Velocity, Acceleration, Orientation and angular motion

**Data Sources**:

* 📍 GPS
* 🧱 IMU (Inertial Measurement Unit)
* 🛎️ Odometry

```mermaid
flowchart LR
    A[Sensor Data] --> B[Fusion Engine]
    B --> C[Ego Position + Velocity Estimate]
```

---

## ❗ Why Is Perception Hard?

### 🧩 Key Challenges:

1. **Sensor Uncertainty**

   * Noisy GPS, radar, or LIDAR signals.
   * GPS outages in tunnels.

2. **Environmental Conditions**

   * Rain, fog, snow distort sensor readings.
   * Sudden lighting changes or lens flares.
  
   ![image](https://github.com/user-attachments/assets/97a53d0d-5efb-4ebe-bb46-574fafe464d5)


3. **Occlusion and Reflections**

   * Blocked line of sight.
   * Reflective surfaces confuse detection systems.
   *  ![image](https://github.com/user-attachments/assets/0c230464-9b2d-4e38-9c6d-f83e48c8b63d)

4. **Data Limitations**

   * Training data needed for diverse weather, objects, and environments.
   * Annotation is expensive and slow.
  
5. **Illumination and lens fare**
   
  ![image](https://github.com/user-attachments/assets/b5c113a7-fa06-4503-b649-2106540b86a0)

---

## 📷 Sensor Redundancy is Key


| Sensor  | Strengths                      | Weaknesses                       |
| ------- | ------------------------------ | -------------------------------- |
| Cameras | High-resolution visual info    | Affected by lighting & weather   |
| LIDAR   | Accurate depth sensing         | Can be blocked or reflected      |
| Radar   | Good in bad weather            | Low resolution                   |
| GPS     | Global positioning             | Can be jammed or blocked indoors |
| IMU     | Measures acceleration/rotation | Drifts over time                 |

> ✅ **Combine sensors for robustness.** Use sensor fusion!

---

## 🧱 Summary

✔️ **Perception = Understand Environment + Self-Motion**
✔️ Identify **static** and **dynamic** elements
✔️ Predict object behavior for better decisions
✔️ Handle uncertainty, occlusion, sensor errors
✔️ Use **multiple sensors** for robustness

---


> “What should the car do next?”


![image](https://github.com/user-attachments/assets/f490965f-62a0-4bfc-b9f9-b5ef58d270b3)


# 🎓 Decision-Making in Autonomous Driving

we explore how self-driving systems **make decisions**, building upon the **perception** layer discussed earlier. Decision-making is part of the broader task of **planning**, which also includes controlling the vehicle to follow through on those decisions.

---

## 🔄 Driving Task Pipeline

```mermaid
graph LR
    A[Perception] --> B[Planning]
    B --> C[Execution]
    subgraph Planning Levels
    B1[Mission Planning (Long-term)]
    B2[Behavioral Planning (Short-term)]
    B3[Motion Planning (Immediate)]
    end
```

---

## 🌍 Types of Planning

### 1. **Mission Planning (Long-Term)**

* 🗺 Plan full route from A to B
* Example: "Drive from Home to Work"
* Output: Global path and major turns

### 2. **Behavioral Planning (Short-Term)**

* ✈️ Make decisions like lane changes, turns
* Example: "Should I enter the left lane now?"
* Influences: Traffic signals, intersections, nearby vehicles

### 3. **Motion Planning (Immediate)**

* ⛵ Execute decisions with smooth, safe control
* Example: "How much should I brake right now?"
* Output: Trajectory (speed, steering angle)

---

## 🚗 Example: Left Turn at an Intersection

| Planning Stage | Example Decisions                                      |
| -------------- | ------------------------------------------------------ |
| Long-Term      | Turn left at upcoming intersection                     |
| Short-Term     | Change to left-turn lane, slow down, stop at stop line |
| Immediate      | Brake gently, steer accurately, yield to oncoming cars |

> Even for a **simple left turn**, dozens of planning decisions need to be evaluated and updated in real time.

---

## ⚖️ Decision Complexity

### Factors That Increase Complexity:

* Other vehicles cutting in
* Missing lane markings
* Pedestrians crossing suddenly
* Vehicle behind you pressuring your pace
* Multiple agents behaving unpredictably

Result:

> “A simple maneuver becomes a multi-layered planning problem.”

---

## 🤖 Approaches to Decision-Making

### ⚡ Reactive Planning

* Based on **current state only**
* Uses **rules** like:

  * "If pedestrian detected, stop."
  * "If speed limit drops, slow down."

**Pros**: Fast and simple
**Cons**: Doesn't handle future prediction

### 📈 Predictive Planning

* Uses **trajectory predictions** of other agents
* Rules include:

  * "Car ahead stopped for 10 sec, it might remain stopped."
  * "Pedestrian will enter my lane in 3 sec. Slow down."

**Pros**: More human-like, handles complex scenarios
**Cons**: Requires accurate prediction, depends on robust perception

---

## 🔄 Summary

* Driving involves **multi-horizon planning**:

  * Mission (long-term)
  * Behavioral (short-term)
  * Motion (immediate)

* We explored:

  * Planning layers using a left turn example
  * Two major decision-making approaches:

    * Reactive (now)
    * Predictive (now + future)

* Planning must adapt constantly as new data arrives

* Even simple scenarios require real-time updates and layered control

---

## 🏙️ What’s Next?

In the next module, we will look at the **hardware and software architecture** of self-driving cars.

You will learn about the sensors, compute units, and software stacks that allow perception, planning, and execution to happen in real time.

Stay tuned!

---

## 🖼️ Suggested Visuals to Add

* Planning pyramid with mission, behavioral, motion layers
* Intersection scenario: left-turn sequence with annotations
* Side-by-side of reactive vs predictive logic trees
* Timeline showing decisions at each planning window (long → short → immediate)
* Simulation: vehicle braking for jaywalker with predictive trajectory

---

