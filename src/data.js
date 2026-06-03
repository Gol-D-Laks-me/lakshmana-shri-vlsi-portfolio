window.portfolioData = {};

window.portfolioData.profile = {
  name: "Lakshmana shri D",
  role: "VLSI Design Aspirant",
  email: "lakshmanashri956@gmail.com",
  resumeUrl: "./public/Lakshmana_shri_D_RTL_resume.pdf",
  links: {
    linkedIn: "#linkedin-placeholder",
    github: "#github-placeholder",
  },
  summary:
    "Final-year Electronics and Communication student with a strong foundation in digital design and hands-on exposure to RTL design flows. Familiar with ASIC implementation stages and physical design, seeking an entry-level VLSI Design role.",
};

window.portfolioData.navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

window.portfolioData.projects = [
  {
    title: "Digital Alarm Clock Design using Verilog",
    year: "2026",
    tag: "FSM + Counters",
    accent: "cyan",
    details:
      "Designed a modular alarm clock system with FSM-based control for time display, alarm setting, and user input handling. Implemented a 256 Hz system clock division path for real-time operation using counters, registers, and control logic.",
    tools: ["Verilog", "Icarus Verilog", "GTKWave"],
  },
  {
    title: "8-bit Arithmetic Logic Unit Design in Verilog",
    year: "2026",
    tag: "Opcode Control",
    accent: "green",
    details:
      "Implemented an 8-bit ALU supporting arithmetic, logical, and shift operations through a 4-bit opcode. Built a Verilog testbench and verified functional behavior with waveform analysis.",
    tools: ["Verilog", "Testbench", "GTKWave"],
  },
  {
    title: "Micro Satellite Environmental Monitoring System",
    year: "2025",
    tag: "Sensor Prototype",
    accent: "amber",
    details:
      "Designed a mini satellite prototype using MPU6050, pressure sensor, and gas sensor modules to collect atmospheric and environmental data including pressure and gas concentration.",
    tools: ["MPU6050", "Pressure Sensor", "Gas Sensor"],
  },
];

window.portfolioData.skillGroups = [
  { title: "HDL", items: ["Verilog", "SystemVerilog"] },
  { title: "Software Tools", items: ["Quartus Prime", "ModelSim", "Xilinx ISE Design Suite"] },
  { title: "Methodologies", items: ["Static Timing Analysis", "UVM"] },
  { title: "Programming", items: ["C", "Python", "TCL"] },
  { title: "VLSI Concepts", items: ["RTL Design", "Digital Logic Design", "ASIC Design Flow"] },
];

window.portfolioData.timeline = [
  {
    date: "2026",
    title: "B.E. Electronics and Communication",
    detail: "Dr. N.G.P. Institute of Technology, CGPA 8.49, graduation 2026.",
    type: "education",
  },
  {
    date: "08/2025",
    title: "Digital System Design Using Altera FPGA",
    detail:
      "Workshop by MIT covering digital design and SoC development with hands-on exposure to Intel Quartus Prime.",
    type: "workshop",
  },
  {
    date: "07/2024",
    title: "Airport Authority of India",
    detail:
      "Hands-on exposure to Communication, Navigation, and Surveillance Department operations and aviation communication systems.",
    type: "internship",
  },
  {
    date: "03/2024",
    title: "VLSI Design and Recent Trends",
    detail: "Workshop by IIT Palakkad on the importance and significance of VLSI in the electronics industry.",
    type: "workshop",
  },
];

window.portfolioData.courses = [
  "Executive Certification in ASIC verification by Maven Silicon and IIT Roorkee (Ongoing)",
  "Verilog HDL Fundamentals for Digital Design and Verification by Udemy (Ongoing)",
  "Electronics Mastery course by LMES and UPTOR",
];
