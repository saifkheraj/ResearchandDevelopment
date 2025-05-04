import os

# Define the folder structure
folders = [
    "notebooks",
    "arduino",
    "raspberry-pi",
    "iot-dashboard",
    "hardware/wiring-diagrams",
    "hardware/chassis-designs",
    "docs/week-by-week"
]

# Define starter files with default content
starter_files = {
    "README.md": "# Project VISTA\n\nSmart Autonomous Rover built with IoT and Self-Driving technologies.\n",
    "hardware/parts-list.csv": "Component,Quantity,Source\n",
    "docs/architecture-diagram.png": "",  # placeholder, user can replace with actual image
    "docs/final-demo.md": "# Final Demo\n\nDocument your final video, lessons learned, and next steps here.\n",
    "docs/week-by-week/week_01_progress.md": "# Week 1 Progress\n\n## What I Studied\n\n## What I Built\n\n## Challenges\n\n## Next Steps\n",
    "notebooks/week_01_intro_to_iot.ipynb": "",  # User can create notebook later
    "arduino/.gitkeep": "",  # Placeholder to ensure folder is tracked
    "raspberry-pi/.gitkeep": "",
    "iot-dashboard/.gitkeep": ""
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create starter files
for filepath, content in starter_files.items():
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

"✅ Project structure created successfully!"

