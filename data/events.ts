// data/events.js

export const eventsData = {
  preEvents:{
    title: "Pre-Events",
    date: "Feb 10",
    events: [
      {
        title: "BGMI",
        backendValue: "BGMI",
        coordsValue:"BGMI",
        description: "Play-Finish-Win, a multi round action packed BGMI tournament",
        src: "/events/bgmiPG.webp",
        date: "Feb 12",
        time: "09:00 AM",
        color: "#1a1a1a",
        // Min 2 people (1 Cap + 1 Mem), Max 4 people
        teamSize: { min: 4, max: 5 }, 
        deadline: "2026-02-11T23:59:00", // Example Deadline
      },
      {
        title: "LIFE IN A LENS",
        backendValue: "Photo",
        coordsValue:"photo",
        description: "Capture a memory meant for a lifetime",
        src: "/events/photoPG.webp",
        date: "Feb 12",
        time: "02:00 PM",
        color: "#171717",
        // Individual event (1 Cap, 0 Mem)
        teamSize: { min: 1, max: 1 }, 
        deadline: "2026-02-11T23:59:00",
      },
      {
        title: "POSTER MAKING",
        backendValue: "Poster",
        coordsValue:"poster",
        description: "Create a poster and win, be creative and competetive",
        src: "/events/posterPG.webp",
        date: "Feb 12",
        time: "05:00 PM",
        color: "#141414",
        teamSize: { min: 1, max: 1 },
        deadline: "2026-02-11T23:59:00",
      }]
  },
  day1: {
    title: "Day 01",
    date: "Feb 12",
    events: [
      {
        title: "MECHANICAL TRIATHLON",
        backendValue: "Mechanical Triathlon",
        coordsValue:"MECHANICAL",
        description: "A three-round challenge testing mechanical instincts...",
        src: "/events/merchtriPG.webp",
        date: "Feb 12",
        time: "09:00 AM",
        color: "#1a1a1a",
        // Min 2 people (1 Cap + 1 Mem), Max 4 people
        teamSize: { min: 2, max: 4 }, 
        deadline: "2026-02-11T23:59:00", // Example Deadline
      },
      {
        title: "CADATHON",
        backendValue: "Cadathon",
        coordsValue:"CADATHON",
        description: "A design challenge organized by SAE...",
        src: "/events/cadathonPG.webp",
        date: "Feb 12",
        time: "02:00 PM",
        color: "#171717",
        // Individual event (1 Cap, 0 Mem)
        teamSize: { min: 1, max: 1 }, 
        deadline: "2026-02-11T23:59:00",
      },
      {
        title: "SCRAPYARD",
        backendValue: "ScrapYard",
        coordsValue:"SCRAPYARD",
        description: "Redefine innovation by crafting solutions from scrap...",
        src: "/events/scrapPG.webp",
        date: "Feb 12",
        time: "05:00 PM",
        color: "#141414",
        teamSize: { min: 3, max: 5 },
        deadline: "2026-02-11T23:59:00",
      },
      {
        title: "YANTRASEARCH",
        backendValue: "YantraSearch",
        coordsValue:"YANTRASEARCH",
        description: "A campus-wide treasure hunt...",
        src: "/events/yantraPG.webp",
        date: "Feb 12",
        time: "08:00 PM",
        color: "#0f0f0f",
        teamSize: { min: 3, max: 5 },
        deadline: "2026-02-11T23:59:00",
      }
    ]
  },
  day2: {
    title: "Day 02",
    date: "Feb 13",
    events: [
      {
        title: "VALORANT",
        backendValue: "Valorant",
        coordsValue:"VALORANT",
        description: "The ultimate high-stakes tournament...",
        src: "/events/valoPG.webp",
        date: "Feb 13",
        time: "10:00 AM",
        color: "#1a1a1a",
        teamSize: { min: 5, max: 5 }, // Strictly 5
        deadline: "2026-02-12T23:59:00",
      },
      {
        title: "IQ IGNITION",
        backendValue: "IQ Ignition",
        coordsValue:"IQIGNITION",
        description: "An intellectual showdown...",
        src: "/events/iqPG.webp",
        date: "Feb 13",
        time: "01:00 PM",
        color: "#171717",
        teamSize: { min: 1, max: 2 },
        deadline: "2026-02-12T23:59:00",
      },
      {
        title: "DEATHRACE",
        backendValue: "Death Race",
        coordsValue:"DEATHRACE",
        description: "Navigate a manual robot...",
        src: "events/deathracePG.webp",
        date: "Feb 13",
        time: "03:00 PM",
        color: "#141414",
        teamSize: { min: 2, max: 4 },
        deadline: "2026-02-12T23:59:00",
      },
      {
        title: "DRONE PURSUIT",
        backendValue: "Drone Pursuit",
        coordsValue:"DRONEPURSUIT",
        description: "A high-speed FPV drone racing event...",
        src: "/events/dronepurPG.webp",
        date: "Feb 13",
        time: "07:00 PM",
        color: "#0f0f0f",
        teamSize: { min: 1, max: 2 },
        deadline: "2026-02-12T23:59:00",
      },
      {
        title: "CONTROL CRAFT",
        backendValue: "Control Craft",
        coordsValue:"CONTROLCRAFT",
        description: "Build a manual robot...",
        src: "/events/controlcraftPG.webp",
        date: "Feb 13",
        time: "07:00 PM",
        color: "#0f0f0f",
        teamSize: { min: 2, max: 4 },
        deadline: "2026-02-12T23:59:00",
      }
    ]
  }
};