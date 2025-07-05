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
