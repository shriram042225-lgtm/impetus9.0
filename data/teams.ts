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
          imgname: "teamimages/akshat gupta.jpeg",
          email: "akshatgupta1003@gmail.com",
          link: "https://www.linkedin.com/in/akshat-gupta-816a422a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
          name: "Shubhrajyoti Saha",
          phone: "+91 8918586396",
          post: "Joint Coordinator",
          imgname: "teamimages/subrajyoti saha.jpeg",
          email: "shubhrajyotisaha334@gmail.com",
          link: "https://www.linkedin.com/in/shubhrajyoti-saha-15952029a",
        },
        {
          name: "Bontha Likith",
          phone: "+91 8074677491",
          post: "Joint Coordinator",
          imgname: "teamimages/bontha likhith.jpeg",
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
          imgname: "teamimages/varun gautam.jpeg",
          email: "varungautam081@gmail.com",
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
        {
          name: "Debjit Maity",
          phone: "8167025227",
          post: "Lead",
          imgname: "teamimages/Debjit Maity.jpg",
          email: "maitydebjit27022003@gmail.com",
          link: "https://www.linkedin.com/in/debjit-maity-398069262?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Dibya Jyoti Das",
          phone: "7699249687",
          post: "Lead",
          imgname: "teamimages/DIBYA_JYOTI_DAS.jpg",
          email: "2022meb098.dibya@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/dibya-jyoti-das-049473289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Nabadisha Chattopadhyay",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Diptayan Mondal ",
          phone: "6290131020",
          post: "Lead",
          imgname: "teamimages/DIPTAYAN.png",
          email: "2022meb009.diptayan@students.iiests.ac.in",
          link: "http://www.linkedin.com/in/diptayan-mondal-947923287"
        },
        {
          name: "Diethozo jabez Vizo",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Shivansh Kumar",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Hariram Murmu",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Debolina Das",
          phone: "7003574001",
          post: "Lead",
          imgname: "teamimages/DEBOLINA.jpg",
          email: "2022meb029.debolina@students.iiests.ac.in",
          link: ""
        },
        {
          name: "Sreejani Mukherjee",
          phone: "7044442412",
          post: "Lead",
          imgname: "Sreejani.jpg",
          email: "2022meb008.sreejani@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/sreejani-mukherjee-01539a2b8"
        }
        

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
        {
          name: "Arunabh Bagchi",
          phone: "6232089966",
          post: "Lead",
          imgname: "",
          email: "2022meb066.arunabh@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/arunabh-bagchi-94412025b"
        },
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
        {
          name: "Saketh Manchu",
          phone: "9381457448",
          post: "Lead",
          imgname: "teamimages/Manchu Saketh.JPG",
          email: "manchusaketh123@gmail.com",
          link: "https://www.linkedin.com/in/manchu-venkata-sai-saketh-60b756256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
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
