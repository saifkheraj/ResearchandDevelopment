# Autonomous Vehicle Safety Systems - Complete Technical Guide

## 📚 Course Introduction


**Reality Check**: Every aspect of the autonomous driving system - perception, planning, and control - can all lead to failures and crashes, and often the interaction of multiple systems or multiple decision-makers can lead to unanticipated consequences.

## 🎯 Learning Objectives

By the end of this module, you will understand:
1. **Real AV failures** and their root causes
2. **Safety terminology** and risk assessment principles  
3. **Industry frameworks** for safety assurance
4. **Current implementations** by major AV companies
5. **How to design** safety-critical autonomous systems

---

## 🚨 Real-World Autonomous Vehicle Failures: Learning from Tragedy

### 📊 **Summary of Major AV Incidents**

| Incident | Date | Company | Outcome | Root Cause | Industry Response |
|----------|------|---------|---------|------------|-------------------|
| **Waymo vs Bus** | March 2016 | Google/Waymo | Property damage | Prediction failure | Behavioral modeling improvements |
| **Uber Rollover** | 2017 | Uber | Vehicle overturn | Controller overreaction | Robust control systems |
| **GM Cruise Motorcycle** | Late 2017 | GM Cruise | Motorcyclist injury | Lane change abort dilemma | Conservative planning algorithms |
| **Uber Fatality** | March 2018 | Uber | Pedestrian death | Multiple system failures | Industry-wide safety overhaul |

### Critical Case Study 1: Waymo vs. Bus (March 2016)

**What Happened**: A self-driving Google car (now Waymo) ran into the side of a bus when it attempted to pull out from behind an obstacle. The Google car software believed the bus would not attempt to pass it, as the gap between itself and the cars in the next lane was too narrow.

**Root Cause Analysis**:
- **Prediction Failure**: AI couldn't predict human bus driver behavior
- **Gap Assessment Error**: Buses habitually use smaller gaps than expected
- **Reaction Time**: By detection time, collision was unavoidable

**Lessons Learned**:
- Human behavior prediction is extremely challenging
- Conservative assumptions about other drivers can be wrong
- Need robust models for different vehicle types and driver behaviors

**Industry Response**:
- **Waymo 2025**: Now uses behavioral modeling with 20 billion miles of simulation data
- **Tesla**: Neural networks trained on aggressive driver scenarios
- **Mercedes**: Conservative Level 3 systems avoid complex prediction scenarios

### Critical Case Study 2: Uber Fatality (March 2018, Tempe, Arizona)

**The Tragedy**: The incident occurred where a pedestrian was walking her bicycle across the road in an unmarked area. The victim, Elaine Herzberg, was a 49-year-old woman from Tempe.

**Multiple System Failures**:

#### **Failure 1: Human Monitoring**
- **Problem**: The safety driver was inattentive and allegedly watching Hulu at the time. Uber didn't have any way in the vehicle to assess the driver's attentiveness.
- **Industry Fix**: Driver monitoring systems now mandatory
  - **Tesla**: Cabin camera monitors driver attention
  - **Mercedes**: Eye-tracking for Level 3 certification
  - **Waymo**: Eliminated safety drivers entirely in operational areas

#### **Failure 2: Perception System**
- **Problem**: Upon initial detection at six seconds to impact, the victim was first classified as an unknown object, then misclassified as a vehicle, and then misclassified as a bicycle. The decision made by the autonomy software was to ignore the detections.
- **Industry Response**:
  - **Tesla**: Vision-only system with consistent object classification
  - **Waymo**: Multi-sensor fusion prevents single-sensor failures
  - **Mercedes**: LiDAR + camera redundancy for Level 3 certification

#### **Failure 3: Emergency Systems Disabled**
- **Problem**: 1.3 seconds before the crash, the Volvo emergency braking system did detect the pedestrian but Uber had disabled the Volvo system when in autonomous mode.
- **Critical Learning**: Never disable safety-critical backup systems
- **Current Practice**: All modern AV systems maintain emergency braking as final backup

### 📊 **Uber Fatality: System Failure Analysis**

| System | Failure Mode | Timeline | Current Industry Fix |
|--------|--------------|----------|---------------------|
| **Human Monitoring** | Driver watching Hulu | Throughout incident | Mandatory driver monitoring cameras |
| **Perception** | Object misclassification | 6-1.3 seconds before | Multi-sensor fusion, improved AI |
| **Planning** | Ignored uncertain detection | 1.3 seconds before | Conservative uncertainty handling |
| **Emergency Backup** | Volvo system disabled | 1.3 seconds before | Never disable safety systems |
| **Human Fallback** | Inattentive safety driver | Final 1.3 seconds | Better training, elimination |

### Critical Case Study 3: GM Cruise Motorcycle Incident (2017)

**What Happened**: A GM Cruise Chevy Bolt knocked over a motorcyclist after it aborted a lane change maneuver. The motorcyclist who was lane splitting moved forward beside the Bolt and blocked the return maneuver.

**Dilemma Situation**: Vehicle faced impossible choice between hitting motorcycle or multiple cars

**Industry Evolution**:
- **Cruise 2025**: Now uses prediction models for motorcycle behavior
- **Tesla**: Neural networks trained on lane-splitting scenarios
- **Mercedes**: Avoids complex scenarios entirely with conservative ODD

### Critical Case Study 4: Uber Rollover (2017)

**What Happened**: An Uber self-driving vehicle overreacted during a minor collision caused by another vehicle and ended up overturning. The controller had likely not been tested for such a scenario and overreacted.

**Root Cause**: Dynamic models of the vehicle don't assume significant disturbance forces from other vehicles acting on the car.

**Lesson**: Robust control systems must handle unexpected disturbances

### 📊 **Lessons Learned: Before vs After**

| Problem Area | Pre-2018 Industry Practice | Post-2018 Industry Standard |
|--------------|---------------------------|----------------------------|
| **Driver Monitoring** | Optional, basic attention detection | Mandatory eye/head tracking systems |
| **Perception Uncertainty** | Ignore uncertain detections | Conservative response to uncertainty |
| **System Redundancy** | Single-point failure modes | Multiple independent backup systems |
| **Emergency Braking** | Sometimes disabled during testing | Always active as final safety net |
| **Testing Scope** | Limited scenario coverage | Extensive edge case validation |
| **Regulatory Oversight** | Self-regulation by companies | Government certification requirements |

---

## 📖 Safety Terminology: Building a Common Language

### Core Definitions

**🔴 Harm**: Physical harm to a living thing
- Examples: Injury, death, property damage

**⚠️ Risk**: The probability that an event occurs, combined with the severity of the harm that the event can cause
- Formula: Risk = Probability × Severity
- Example: 0.001% chance of fatal accident = very high risk due to severity

**✅ Safety**: The process of avoiding unreasonable risk of harm to a living thing
- Note: "Unreasonable" - some risk always exists
- Goal: Reduce risk to acceptable levels

**🚩 Hazard**: A potential source of unreasonable risk of harm or a threat to safety
- Example: Software bug that could cause accident

### 📊 **Safety Terminology Reference**

| Term | Definition | Example | Risk Assessment |
|------|------------|---------|-----------------|
| **Harm** | Physical harm to a living thing | Injury, death, property damage | Severity measure |
| **Risk** | Probability × Severity of harm | 0.001% chance of fatal accident | Very high due to severity |
| **Safety** | Avoiding unreasonable risk | Acceptable risk threshold | Risk < acceptable level |
| **Hazard** | Potential source of harm | Software bug, brake failure | Must be identified & mitigated |

---

## 🔧 Categories of Autonomous Vehicle Hazards

### 1. 🔩 **Mechanical Hazards**
**Definition**: Physical component failures
- **Examples**: Brake system failure, steering malfunction, tire blowout
- **Industry Solutions**:
  - **Mercedes Drive Pilot**: Redundant steering and braking systems
  - **Waymo**: Regular vehicle inspection protocols
  - **Tesla**: Over-the-air diagnostics for early detection

### 2. ⚡ **Electrical Hazards**
**Definition**: Electrical system failures
- **Examples**: Faulty wiring, power loss, indicator light failure
- **Industry Solutions**:
  - **Mercedes**: Redundant electrical systems for Level 3 certification
  - **Tesla**: Dual power supplies for critical systems
  - **Waymo**: Independent power sources for safety systems

### 3. 🖥️ **Computing Hardware Hazards**
**Definition**: Computer chip and processor failures
- **Examples**: GPU crash, memory corruption, sensor processor failure
- **Industry Solutions**:
  - **Tesla FSD Computer**: Dual redundant processors
  - **NVIDIA Drive AGX**: Built-in redundancy and fail-safes
  - **Mercedes**: Dual ECUs for safety-critical functions

### 4. 💻 **Software Hazards**
**Definition**: Bugs and errors in autonomy software
- **Examples**: Planning algorithm bugs, perception errors, control system glitches
- **Industry Solutions**:
  - **Tesla**: Continuous over-the-air updates with safety validation
  - **Waymo**: Extensive simulation testing (20 billion miles)
  - **Mercedes**: Formal verification for safety-critical code

### 5. 👁️ **Perception Hazards**
**Definition**: Bad or noisy sensor data, inaccurate object detection
- **Examples**: Camera blinded by sun, LiDAR range limitation, false positives
- **Industry Solutions**:
  - **Tesla**: Neural networks with uncertainty quantification
  - **Waymo**: Multi-sensor fusion (cameras + LiDAR + radar)
  - **Mercedes**: Redundant sensor types for verification

### 6. 🧠 **Planning Hazards**
**Definition**: Incorrect decision-making and path planning
- **Examples**: Selecting unsafe maneuvers, poor trajectory planning
- **Industry Solutions**:
  - **Tesla**: End-to-end neural network planning
  - **Waymo**: Rule-based planning with learned components
  - **Mercedes**: Conservative planning within certified ODD

### 7. 👨‍✈️ **Driving-Task Fallback Hazards**
**Definition**: Failure to properly hand control back to human driver
- **Examples**: Insufficient warning time, driver inattention, unclear status
- **Industry Solutions**:
  - **Mercedes**: Driver monitoring with 10-second takeover requirement
  - **Tesla**: Gradual escalation of warnings
  - **Waymo**: Eliminated human fallback in operational areas

### 8. 🛡️ **Cybersecurity Hazards**
**Definition**: Malicious attacks on vehicle systems
- **Examples**: Hacking sensors, compromising control systems, data theft
- **Industry Solutions**:
  - **Tesla**: Encrypted over-the-air updates
  - **Mercedes**: Cybersecurity certification for Level 3
  - **Waymo**: Isolated safety-critical systems

### 📊 **Hazard Categories and Industry Solutions**

| Hazard Type | Examples | Detection Method | Industry Solutions | Leading Company |
|-------------|----------|------------------|-------------------|-----------------|
| **Mechanical** | Brake failure, steering malfunction | Vehicle diagnostics | Redundant systems | Mercedes (Level 3) |
| **Electrical** | Power loss, wiring faults | Electrical monitoring | Dual power supplies | Tesla, Mercedes |
| **Computing** | Processor crash, memory error | System health checks | Redundant processors | Tesla (FSD Computer) |
| **Software** | Algorithm bugs, logic errors | Code review, testing | Formal verification | All major companies |
| **Perception** | Sensor noise, misdetection | Cross-sensor validation | Multi-sensor fusion | Waymo (29 cameras) |
| **Planning** | Poor decisions, unsafe paths | Simulation testing | Conservative algorithms | Mercedes (certified) |
| **Fallback** | Driver handover failure | Driver monitoring | Attention tracking | Mercedes, Tesla |
| **Cybersecurity** | Hacking, data theft | Security monitoring | Encrypted systems | Tesla (OTA security) |

---

## 🏛️ NHTSA Safety Framework: The Foundation

The National Highway Transportation Safety Administration (NHTSA) has defined a twelve-part safety framework to structure safety assessment for autonomous driving.

### 🎯 **Core Principle: System Design Approach**
- **Well-planned software development processes**
- **Application of existing SAE and ISO standards**
- **Integration of automotive, aerospace, and other industry best practices**

### 🤖 **Autonomy Design Requirements (6 Elements)**

#### **1. Operational Design Domain (ODD)**
**Requirement**: Well-defined operational design domain, so that designers are well aware of the flows and limitations of the system

**Industry Implementations**:
- **Mercedes Drive Pilot**: German Autobahn, ≤95 km/h, daylight, good weather
- **Waymo**: Specific mapped cities with detailed environmental conditions  
- **Tesla FSD**: Gradually expanding capabilities with beta testing
- **BMW**: Highway-only systems with clear speed/weather limits

#### **2. Object and Event Detection**
**Requirement**: Well-tested object and event detection and response system, which is critical to perception and crash avoidance

**Industry Examples**:
- **Tesla**: 8 cameras processing 36 frames/second for 360° detection
- **Waymo**: 29 cameras + 5 LiDAR + 6 radar for redundant detection
- **Mercedes**: LiDAR + stereo cameras + radar for certified Level 3

#### **3. Fallback Mechanism**
**Requirement**: Reliable and convenient fallback mechanism by which the driver is alerted or the car is brought to safety autonomously

**Real Implementations**:
- **Mercedes**: 10-second takeover warning → emergency stop if no response
- **Tesla**: Progressive alerts → autopilot disablement → emergency braking
- **Waymo**: No human fallback → autonomous safe stop procedures

#### **4. Traffic Law Compliance**
**Requirement**: The driving system should be designed such that all federal, state, and local traffic laws are followed within the ODD

**Industry Challenges & Solutions**:
- **Regional Variations**: Different traffic laws by location
- **Tesla**: Global training data to learn local traffic patterns
- **Waymo**: Hand-coded rules for each operational city
- **Mercedes**: Conservative interpretation ensures legal compliance

#### **5. Cybersecurity Protection**
**Requirement**: Think about cybersecurity threats and how to protect the driving system from malicious agents

**Industry Standards**:
- **ISO/SAE 21434**: Cybersecurity engineering for road vehicles
- **Tesla**: Regular security updates, bug bounty programs
- **Mercedes**: Certified cybersecurity for Level 3 approval
- **Waymo**: Air-gapped safety systems, encrypted communications

#### **6. Human Machine Interface (HMI)**
**Requirement**: The car should be able to well convey the status of the machine at any point in time to passengers or driver

**Status Information Examples**:
- **Sensor operational status**: All cameras/LiDAR functioning
- **Current motion plans**: Where the vehicle intends to go
- **Detected objects**: What the vehicle sees around it
- **System limitations**: When autonomous mode unavailable

**Industry Implementations**:
- **Mercedes**: Turquoise lights indicate Level 3 active status
- **Tesla**: Detailed visualization of detected objects and path
- **Waymo**: Passenger app shows route, ETA, and system status

### 📊 **NHTSA Framework: Autonomy Design Elements**

| Element | Requirement | Tesla Implementation | Waymo Implementation | Mercedes Implementation |
|---------|-------------|---------------------|---------------------|------------------------|
| **ODD Definition** | Clear operational limits | Gradual expansion via beta | Mapped cities only | German Autobahn ≤95 km/h |
| **Object Detection** | Reliable perception system | 8 cameras, 36 fps | 29 cameras + 5 LiDAR | LiDAR + stereo cameras |
| **Fallback** | Safe driver handover | Progressive warnings | No human fallback | 10-second takeover |
| **Law Compliance** | Follow all traffic laws | Global training data | Hand-coded rules | Conservative interpretation |
| **Cybersecurity** | Protect from attacks | OTA security updates | Air-gapped systems | Certified cybersecurity |
| **HMI** | Clear status communication | Detailed visualizations | Passenger app | Turquoise indicator lights |

### 🧪 **Testing and Crash Mitigation (5 Elements)**

#### **7. Extensive Testing Program**
**Requirement**: Strong and extensive testing program before any service is launched for the public

**Three Testing Pillars**:

**🖥️ Simulation Testing**:
- **Waymo**: 20 billion simulated miles
- **Tesla**: Extensive virtual scenarios from fleet data
- **Mercedes**: Virtual validation of edge cases

**🏁 Closed Track Testing**:
- **Waymo**: Private test facilities in California, Arizona
- **Tesla**: Fremont test track for validation
- **Mercedes**: Proving grounds for Level 3 scenarios

**🛣️ Public Road Testing**:
- **Waymo**: 20+ million real-world miles
- **Tesla**: Billions of miles from customer fleet
- **Mercedes**: Extensive validation on German Autobahn

#### **8. Crash Energy Mitigation**
**Requirement**: Careful consideration of methods to mitigate the extent of injury or damage during a crash event

**Industry Approaches**:
- **Tesla**: Crumple zones, reinforced battery pack, active safety systems
- **Waymo**: Modified vehicles with enhanced safety structures
- **Mercedes**: Luxury vehicle safety standards + autonomous safety systems

#### **9. Post-Crash Behavior**
**Requirement**: The car must be rapidly returned to a safe state - brought to a stop with fuel pumps securing, first responders alerted

**Automatic Responses**:
- **Emergency stop procedures**: Controlled deceleration to safe location
- **Hazard activation**: Warning lights and emergency signals
- **Emergency services**: Automatic 911/emergency calls
- **Door unlocking**: Emergency access for first responders
- **System shutdown**: Safe powering down of vehicle systems

#### **10. Data Recording (Black Box)**
**Requirement**: Automated data recording function - very helpful to have this crash data to analyze and design systems that can avoid the specific kind of crash in the future

**Data Recorded**:
- **Sensor inputs**: Camera, LiDAR, radar data before crash
- **Vehicle state**: Speed, steering angle, braking force
- **System decisions**: Planning choices, control commands
- **Timeline**: Precise sequence of events leading to crash

**Industry Implementations**:
- **Tesla**: Continuous recording with incident-triggered uploads
- **Waymo**: Comprehensive data logging for analysis
- **Mercedes**: Aviation-grade black box recording for Level 3

#### **11. Consumer Education and Training**
**Requirement**: Well-defined consumer education and training for fallback drivers during testing and consumer drivers to understand both capabilities and limits

**Educational Components**:
- **System capabilities**: What the vehicle can and cannot do
- **Operational limits**: Weather, road, and scenario restrictions
- **Proper usage**: How to engage, monitor, and disengage systems
- **Emergency procedures**: What to do when systems fail

**Industry Examples**:
- **Mercedes**: Mandatory training for Level 3 customers
- **Tesla**: In-vehicle tutorials and safety warnings
- **Waymo**: Public education campaigns and rider orientation

### 📊 **NHTSA Framework: Testing and Mitigation Elements**

| Element | Requirement | Tesla Approach | Waymo Approach | Mercedes Approach |
|---------|-------------|----------------|----------------|-------------------|
| **Testing Program** | Simulation + track + road | Billions of fleet miles | 20 billion simulated miles | German Autobahn validation |
| **Crash Mitigation** | Minimize injury/damage | Enhanced crumple zones | Modified safety structures | Luxury safety standards |
| **Post-Crash** | Safe state + emergency call | Auto emergency call | Controlled safe stop | Emergency protocols |
| **Data Recording** | Black box functionality | Incident-triggered upload | Comprehensive logging | Aviation-grade recording |
| **Education** | User training programs | In-vehicle tutorials | Public education | Mandatory customer training |

---

## 🏢 Current Industry Safety Implementations (2025)

### **🚗 Tesla's Safety-First Approach**

**Philosophy**: Scale through data, improve through iteration

**Safety Measures**:
- **Vision-only redundancy**: Multiple cameras provide overlapping coverage
- **Neural network uncertainty**: AI quantifies confidence in decisions
- **Shadow mode**: New algorithms tested against current system
- **Fleet learning**: Every Tesla contributes safety-relevant data
- **Continuous updates**: Weekly safety improvements via over-the-air

**Limitations Acknowledged**:
- **Weather dependency**: Vision struggles in heavy rain/snow
- **Construction zones**: Require frequent updates and human oversight
- **Novel scenarios**: System may encounter unexpected situations

### **🚙 Waymo's Redundant Safety Systems**

**Philosophy**: Multiple backup systems, conservative operation

**Safety Architecture**:
- **Sensor redundancy**: 29 cameras + 5 LiDAR + 6 radar
- **Computing redundancy**: Multiple processors with independent operation
- **Behavioral redundancy**: Multiple algorithms cross-check decisions
- **Geographic limitation**: Only operate in thoroughly mapped areas
- **No human fallback**: Vehicle must handle all scenarios autonomously

**Safety Record**: 7+ years of testing, millions of miles with minimal incidents

### **🏎️ Mercedes Level 3 Certification**

**Philosophy**: Legal liability requires absolute safety assurance

**Certification Requirements**:
- **Government approval**: German and US regulatory certification
- **Redundant systems**: Dual steering, braking, computing, sensors
- **Conservative ODD**: Limited to known-safe scenarios only
- **Driver monitoring**: Continuous attention assessment
- **Emergency procedures**: Guaranteed safe stop if takeover fails

**Legal Significance**: First system where manufacturer accepts liability

### **🔧 BMW/Mobileye Partnership Approach**

**Philosophy**: Proven technology, gradual capability expansion

**Safety Strategy**:
- **EyeQ chips**: Specialized vision processing with safety certification
- **RSS (Responsibility-Sensitive Safety)**: Formal mathematical safety model
- **Crowd-sourced mapping**: Fleet vehicles contribute to safety database
- **Incremental deployment**: Gradual expansion of capabilities and coverage

---

## 📊 Safety Framework Comparison

| Framework | Focus | Strengths | Limitations |
|-----------|--------|-----------|-------------|
| **NHTSA** | Comprehensive guidance | Industry-wide adoption | Non-mandatory suggestions |
| **ISO 26262** | Functional safety | Rigorous standards | Complex implementation |
| **Tesla Approach** | Rapid iteration | Fast improvement | Public beta testing risks |
| **Waymo Method** | Conservative reliability | Proven safety record | Limited scalability |
| **Mercedes L3** | Legal compliance | Regulatory approval | Very limited ODD |

---

## 🚀 Implementation Roadmap for Safe AV Development

### Phase 1: Safety Foundation (Months 1-6)
1. **Define ODD**: Clearly specify where/when system will operate
2. **Hazard Analysis**: Identify all possible failure modes
3. **Safety Requirements**: Define acceptable risk levels
4. **Architecture Design**: Plan redundant safety systems

### Phase 2: System Development (Months 7-18)
1. **Sensor Selection**: Choose appropriate sensors for safety requirements
2. **Algorithm Development**: Implement with safety constraints
3. **Testing Framework**: Build simulation, track, and road testing
4. **Validation Methods**: Prove system meets safety requirements

### Phase 3: Verification & Deployment (Months 19-36)
1. **Extensive Testing**: Millions of miles across all three testing types
2. **Safety Assessment**: Independent verification of safety claims
3. **Regulatory Approval**: Work with authorities for deployment permission
4. **Gradual Rollout**: Careful monitoring of real-world performance

### Phase 4: Continuous Improvement (Ongoing)
1. **Data Collection**: Monitor all vehicle operations
2. **Incident Analysis**: Learn from any failures or near-misses
3. **System Updates**: Improve safety based on real-world data
4. **Expanded Capabilities**: Carefully grow ODD as confidence increases

---

## 🎯 Key Safety Principles for AV Development

### **1. Assume Everything Will Fail**
- Design for failure modes, not just success cases
- Multiple independent backup systems
- Graceful degradation when components fail

### **2. Conservative by Design**
- Better to be overly cautious than risk harm
- Clearly define and respect system limitations
- Never operate outside validated ODD

### **3. Continuous Learning**
- Every mile driven provides safety-relevant data
- Systematic analysis of near-misses and failures
- Rapid deployment of safety improvements

### **4. Transparency and Accountability**
- Clear communication of system capabilities and limits
- Comprehensive data recording for incident analysis
- Willingness to accept responsibility for system failures

### **5. Human-Centered Design**
- Systems must work with human behavior, not against it
- Clear interfaces for human-machine interaction
- Proper training and education for all users

---

## 📚 Critical Learning Takeaways

### **The Harsh Reality**
Autonomous vehicles **will** fail. The question is not whether failures will occur, but how we design systems to:
1. **Minimize** the probability of failures
2. **Mitigate** the consequences when failures occur
3. **Learn** from failures to prevent future incidents

### **Multi-Layered Safety**
No single technology or approach can guarantee safety. Effective AV safety requires:
- **Redundant sensors** and computing systems
- **Conservative planning** algorithms
- **Robust testing** across millions of scenarios
- **Clear limitations** and operational boundaries
- **Continuous monitoring** and improvement

### **Industry Evolution**
The field is rapidly evolving from "move fast and break things" to "move carefully and break nothing":
- **Early days (2016-2018)**: Learning from tragic failures
- **Current state (2025)**: Mature safety frameworks and redundant systems  
- **Future direction**: Formal verification and mathematical safety proofs

### **Regulatory Landscape**
Safety requirements are becoming increasingly stringent:
- **Voluntary guidelines** (NHTSA 2017) → **Mandatory standards** (emerging)
- **Company self-regulation** → **Government oversight**
- **Technology demonstration** → **Legal liability and certification**

---

## 🔍 Next Module Preview

In our next module, we'll dive into **"Functional Safety and Risk Assessment"** where we'll cover:
- **ISO 26262 functional safety standard** for automotive systems
- **Quantitative risk assessment** methodologies  
- **Safety case development** and documentation
- **Verification and validation** techniques for safety-critical systems

### 📝 Assignment

**Safety Analysis Project**: Choose one real autonomous vehicle incident (from our case studies or research a new one) and complete:

1. **Root Cause Analysis**: Identify all contributing factors
2. **Hazard Classification**: Categorize the hazards involved
3. **Current Industry Response**: How has the industry addressed this failure mode?
4. **Prevention Strategy**: Design systems to prevent this type of incident
5. **NHTSA Framework Application**: Show how the framework could have prevented this incident

**Deliverable**: 5-page safety analysis report with recommendations

---

**Remember**: In autonomous vehicle development, safety is not a feature to be added later - it must be the foundation upon which everything else is built. Every design decision, every line of code, every test case must prioritize safety above all other considerations. Lives depend on getting this right.