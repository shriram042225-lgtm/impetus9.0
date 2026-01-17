export interface TeamMember {
  name: string;
  phone: string;
  post: string;
  imgname: string;
  email: string;
  link: string;
}

export interface Team {
  teamName: string;
  slug: string;
  members: TeamMember[];
}

export interface TeamsData {
  teams: Team[];
}

export const teamsData: TeamsData = {
  teams: [
    {
      teamName: "Coordinators",
      slug: "coordinators",
      members: [
        {
          name: "Akshat Gupta",
          phone: "+91 7548071485",
          post: "Coordinator",
          imgname: "team/akshat_spt.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Akash",
          phone: "+91 9444265824",
          post: "Coordinator",
          imgname: "team/akashS.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Shubhrajyoti",
          phone: "+91 8918586396",
          post: "Joint Coordinator",
          imgname: "team/shubrajyoti.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Bontha Likith",
          phone: "+91 8074677491",
          post: "Joint Coordinator",
          imgname: "team/likith.jpeg",
          email: "",
          link: "",
        }
      ]
    },
    {
      teamName: "Finance Team",
      slug: "finance",
      members: [
        {
          name: "Varun Gautam",
          phone: "+91 9368145959",
          post: "Lead",
          imgname: "team/varunIMG.jpeg",
          email: "",
          link: "https://in.linkedin.com/in/varun-gautam-1205012a9"
        },
        {
          name: "Ritesh Premchand Gupta",
          phone: "+91 8291164387",
          post: "Lead",
          imgname: "team/ritesGupta.jpeg",
          email: "",
          link: "",
        }
      ]
    },
    {
      teamName: "Event Management Team",
      slug: "events",
      members: [

      ]
    },
    {
      teamName: "Web Development Team",
      slug: "web-dev",
      members: [
        {
          name: "Abhishek Kumar (absie)",
          phone: "+91 9959387572",
          post: "Lead",
          imgname: "team/abhishek.jpg",
          email: "",
          link: ""
        }
      ]
    },
    {
      teamName: "Content & Design Team",
      slug: "design",
      members: [
      ]
    },
    {
      teamName: "Publicity Team",
      slug: "publicity",
      members: [
      ]
    },
    {
      teamName: "Sponsorship Team",
      slug: "sponsorship",
      members: [
      ]
    },
    {
      teamName: "Travel & Logistics Team",
      slug: "logistics",
      members: [
      ]
    },
    {
      teamName: "Industry Academia Meet Team",
      slug: "iam",
      members: [
      ]
    },
    {
      teamName: "Videography & Photography Team",
      slug: "media",
      members: [
      ]
    }
  ]
};
