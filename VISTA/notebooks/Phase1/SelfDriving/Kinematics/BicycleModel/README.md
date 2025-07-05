# 🟠 Circle Geometry in Bicycle Kinematics 

This section expands on the circular motion part of the bicycle kinematic model. It helps you understand how circles, arcs, angles, rotation, and forward movement come together when a robot or car turns.

---

## 📐 What is a Circle in This Context?

When a car turns, it follows the edge of a **circle** — this edge is called an **arc**. The robot rotates around the center of this circle.

| Part of Circle       | Meaning in Robot Turn                      |
| -------------------- | ------------------------------------------ |
| **Center**           | Instantaneous Center of Rotation (ICR)     |
| **Radius (R)**       | Distance from ICR to the robot             |
| **Arc**              | Path the robot follows while turning       |
| **Angle ($\theta$)** | How much the robot has turned (in radians) |

---

## 📏 Important Circle Formulas

### 1. **Arc Length**

$s = R \cdot \theta$

* $s$ = arc length (distance the robot has traveled along the curve)
* $R$ = turning radius (from ICR to robot)
* $\theta$ = angle turned (in **radians**)

### 2. **Convert Degrees to Radians**

$\theta_{rad} = \frac{\pi}{180} \cdot \theta_{deg}$

This helps when your steering or heading is given in degrees, but equations need radians.

### 3. **Angular Velocity from Arc**

If you travel arc length $s$ in time $t$, then:

$\omega = \frac{\theta}{t} = \frac{s}{R \cdot t}$

---

## 🚗 Kinematics: How a Robot Moves While Turning

Kinematics means studying **how things move** — their speed, angle, and direction — **without worrying about the forces** that cause the motion.

When a robot (or car) turns using a bicycle model, we care about:

* Its **forward speed** along the curved path → $v$
* Its **rotation speed** (how fast the heading is changing) → $\omega$
* The **circle** it’s following → radius $R$
* Its **steering angle** → $\delta$

---

## 🔁 Kinematic Equations for Turning

![image](https://github.com/user-attachments/assets/bf01d5ec-e06d-4cb8-adee-23f575fbdb58)


### 1. **Relationship Between Speed and Rotation**

$\omega = \frac{v}{R}$

> The faster the car moves forward ($v$), or the tighter the turn (small $R$), the faster it rotates.

### 2. **Radius from Steering Angle**

$\tan(\delta) = \frac{L}{R} \Rightarrow R = \frac{L}{\tan(\delta)}$

* $L$: Distance between front and rear axle (wheelbase)
* $\delta$: Steering angle of the front wheel

> Sharper steering → smaller $R$

### 3. **Final Angular Velocity Equation**

$\omega = \frac{v \cdot \tan(\delta)}{L}$

> This combines both formulas into one powerful equation to compute how fast the robot turns when you know its speed, steering, and size.

---

## 🔄 Displacement Over Time

To compute how far the car has rotated over time:

$\theta(t) = \omega \cdot t$

And how far it moved along the arc:

$s = v \cdot t = R \cdot \theta(t)$

You can also combine these:

$\theta(t) = \frac{v \cdot t}{R}$

---

## ✨ Example Calculation

### Given:

* Wheelbase $L = 2$ meters
* Steering angle $\delta = 25^\circ$
* Forward speed $v = 2$ m/s
* Time elapsed $t = 3$ seconds

### Step-by-step:

1. **Convert steering angle to tangent**:
   $\tan(25^\circ) \approx 0.4663$

2. **Compute turning radius**:
   $R = \frac{2}{\tan(25^\circ)} = \frac{2}{0.4663} \approx 4.29 \text{ m}$

3. **Compute angular velocity**:
   $\omega = \frac{2}{4.29} \approx 0.466 \text{ rad/s}$

4. **Compute rotation in 3 seconds**:
   $\theta = 0.466 \cdot 3 = 1.398 \text{ rad} \approx 80.1^\circ$

5. **Compute arc distance traveled**:
   $s = 2 \cdot 3 = 6 \text{ meters}$

So, in 3 seconds:

* The robot turns about **80°**
* It travels **6 meters** along a circular arc of radius **4.29 meters**

---

## 🧠 Visual Flow of Movement

1. You steer → sets $\delta$
2. $\delta$ gives turning radius $R$
3. Your speed $v$ and $R$ define your angular velocity $\omega$
4. You rotate over time → heading angle $\theta(t)$
5. You follow a curved arc of length $s = R \cdot \theta$

---

## 🧩 Common Student Questions (with Answers)

### ❓ Is the ICR always fixed?

**Answer**: Only if the steering angle $\delta$ stays constant. If you keep turning the wheel more or less, the ICR changes position, and the car no longer follows a perfect circle.

### ❓ Is R the same as angular velocity?

**Answer**: No. R is a **distance** (how wide the circle is), while angular velocity $\omega$ is how fast the robot is **rotating**. They are related by:
$\omega = \frac{v}{R}$

### ❓ If I rotate 25°, does the circle change?

**Answer**: No. If the steering angle is fixed, then the radius R and the ICR stay the same — the car just sweeps more arc of the same circle.

### ❓ What does "v" mean in a turn?

**Answer**: It’s the speed along the curved path (the arc). It’s how fast the car moves forward, not how fast it's spinning.

### ❓ Is the ICR the middle of the circle?

**Answer**: ✅ Yes! It is the **center** of the turning circle — from there, you can draw the radius R to any point on the arc.

---

Understanding circle geometry **and** kinematics together gives you a full picture of how a robot moves, turns, and calculates its position over time.



# 🧮 Rear Axle Bicycle Model – Simplified README (For 12th Grade Students)

This document explains the **Rear Axle Bicycle Model** — a way to describe the motion of a car or robot when its **rear axle midpoint** is used as the reference point.

We’ll break down the meaning of each formula, how the robot moves in 2D, and avoid confusion between angular velocity symbols like $\omega$ and $\dot{\theta}$.



---

## 🚗 What is the Rear Axle Model?

In this model, we track the robot’s motion using the **center of the rear axle**:

* All motion is computed from that rear point
* This makes the math cleaner and more stable for control

The model uses:

* **$v$**: Forward speed (how fast the robot moves)
* **$\theta$**: Heading angle (the direction the robot is facing)
* **$\delta$**: Steering angle (angle of the front wheel)
* **$L$**: Distance between front and rear axle (wheelbase)

---

## 📐 Kinematic Equations (Rear Axle Reference)

     |
     |   v·sinθ  ← this is the y-part (vertical)
     |   
     |_____→
       v·cosθ  ← this is the x-part (horizontal)


### 1. **Position Update Equations**

$\dot{x}_r = v \cdot \cos(\theta)$
$\dot{y}_r = v \cdot \sin(\theta)$

These tell us how the **rear axle center point** moves forward:

* It follows the direction of the heading angle $\theta$
* $v$ breaks into x and y motion using basic trigonometry

### 2. **Heading Change (Rotation) Equation**

$\dot{\theta} = \frac{v \cdot \tan(\delta)}{L}$

This tells us **how quickly the robot is turning**.

> 💡 **Important Note:**
> $\dot{\theta}$ ("theta dot") means the **rate of change of the heading angle**, and it is the **same thing as angular velocity**, which is often written as:
>
> $\omega = \dot{\theta}$
>
> Both symbols represent the same concept: **how fast the robot is turning**, in **radians per second**.

---

## 🧠 How the Robot Moves (Step-by-Step Intuition)

1. **You turn the front wheel** → this sets $\delta$
2. **$\delta$ defines a turning circle** (small $\delta$ = wide turn, large $\delta$ = tight turn)
3. The robot moves forward along that circle, at speed $v$
4. It moves forward and rotates at the same time, using:

   * $\dot{x}_r = v \cos\theta$
   * $\dot{y}_r = v \sin\theta$
   * $\dot{\theta} = \omega = \frac{v \tan(\delta)}{L}$

---

## ✨ Example Walkthrough

### Given:

* $v = 2$ m/s
* $\delta = 25^\circ$
* $L = 2$ m
* $\theta = 30^\circ$

### Step 1: Calculate Trig Terms

* $\cos(30^\circ) \approx 0.866$
* $\sin(30^\circ) = 0.5$
* $\tan(25^\circ) \approx 0.466$

### Step 2: Compute Motion

* $\dot{x}_r = 2 \cdot 0.866 = 1.73 \, \text{m/s}$
* $\dot{y}_r = 2 \cdot 0.5 = 1.00 \, \text{m/s}$
* $\dot{\theta} = \frac{2 \cdot 0.466}{2} = 0.466 \, \text{rad/s}$

### Interpretation:

* The robot moves forward-right
* It’s rotating left at 0.466 rad/s (angular velocity)

---

## 🧭 Summary Table

| Symbol                   | Meaning                                   |
| ------------------------ | ----------------------------------------- |
| $x_r, y_r$               | Position of rear axle midpoint            |
| $\theta$                 | Heading direction (angle robot is facing) |
| $\delta$                 | Steering angle (angle of front wheel)     |
| $L$                      | Distance between wheels (wheelbase)       |
| $v$                      | Forward velocity (speed)                  |
| $\dot{x}_r, \dot{y}_r$   | Motion in x/y directions                  |
| $\dot{\theta}$, $\omega$ | Angular velocity (rotation rate)          |

> ✅ Remember: $\dot{\theta} = \omega$ — they are two names for the same thing.

---

## 📌 When to Use This Model

This is used when:

* You're building a simulator for a car or mobile robot
* You want to track its position and rotation based on speed and steering
* You need something simple but realistic enough to work in real life
