const mentorsData = [
  {
    name: "Dr. Birmohan Singh",
    education: "Ph.D., M.E.",
    phone: "+91-1672-253208",
    email: ["birmohansingh@sliet.ac.in", "birmohans@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg",
    staffType: "Professors",
  },
  {
    name: "Dr. Damanpreet Singh",
    education: "Ph.D., M.Tech, B.Tech.",
    phone: "+91-1672-253210",
    email: ["damanpreets@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg",
    staffType: "Professors",
  },
  {
    name: "Dr. Major Singh Goraya",
    education: "Ph.D., M.Tech., B.Tech.",
    phone: "01672-253212",
    email: ["mjrsingh@yahoo.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg",
    staffType: "Professors",
  },
  {
    name: "Dr. Manoj Sachan",
    education:
      "B.Tech(Computer Science) , M.E(Computer Science), Ph.D (Computer Science & Engineering)",
    phone: "+91-1672-253214",
    email: ["manojsachan@sliet.ac.in", "manojsachan@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg",
    staffType: "Professors",
  },
  {
    name: "Dr. Gurjinder Kaur",
    education:
      "B.E. Kyrgyz Technical University, Bishkek M.S. BITS, Pilani Ph.D SLIET, Longowal",
    phone: "+91-1672-253326",
    email: ["gurjinder13@yahoo.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg",
    staffType: "Associate Professors",
  },
  {
    name: "Dr. Amar Nath",
    education:
      "Ph.D. in CSE from IIT Roorkee, Sept. 2020. Thesis 'A Distributed Approach for Collaborative Task Execution in Dynamic Environment'   M. Tech. in CSE from NIT Rourkela, June 2014.   B. Tech. in CSE from  BIET Jhansi,  June 2006.",
    phone: "01672-253610",
    email: ["amarnath@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Jagdeep Singh",
    education: `entitled "Proficient Route Selection Strategies for Effective Routing in Delay-Tolerant Opportunistic Networks" from the University of Delhi, New Delhi,   M. Tech, Computer Science & Engineering,   B. Tech, Computer Science & Engineering`,
    phone: "01672-253320",
    email: ["jagdeep@sliet.ac.in", "jagdeepknit@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Manminder Singh",
    education: `B.Tech (Computer Science & Engineering) M.Tech (Computer Science & Engineering) Ph. D (Computer Science & Engineering)`,
    phone: "+91-01672-253328",
    email: ["manminderldh@gmail.com", "manmindersingh@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Preetpal Kaur Buttar",
    education: `PhD (Computer Science & Engineering)`,
    phone: "01672-253614",
    email: ["preetpal@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Tajinder Singh",
    education: `Ph.D entitled “Machine Learning Based Text Mining in Social Media” from National Institute of Technology, Hamirpur, India.`,
    phone: "91-6283963279",
    email: ["tajindersingh@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Utkarsh",
    education: `Doctor of Philosophy School of Computer & Systems Sciences Jawaharlal Nehru University, New Delhi, India   Master of Technology (Computer Science and Technology) School of Computer & Systems Sciences Jawaharlal Nehru University, New Delhi, India   Bachelor of Technology (Information Technology) University Institute of Engineering & Technology CSJM University, Kanpur, India`,
    phone: "",
    email: [],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. VINOD KUMAR VERMA",
    education: `Ph.D. Computer Science and Engineering`,
    phone: "+91-1672-253218",
    email: ["vinod5881@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Jaspal Singh",
    education: `M.E. ( CSE & IT), Pursuing  PhD. in Cloud Computing`,
    phone: "01672-253327",
    email: ["safrisoft@yahoo.com", "jaspalsingh@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Rahul Gautam",
    education: `Ph.D. pursuing, M.Tech (Computer Science and Applications) from Thapar University, Patiala., B.Tech(Computer Science and Info. Technology) from Sir Chhotu Ram Inst. of Engg. & Technology, CCS University Campus, Meerut.`,
    phone: "+91-1672-25 3612",
    email: ["rahulgautam@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg",
    staffType: "Assistant Professors",
  },
  {
    name: "Dr. Jatinder Pal Singh",
    education: `B.Tech - Computer Science and Engineering, M.Tech - Computer Science and Engineering, Ph.D. - Computer Science and Engineering`,
    phone: "",
    email: ["sachdeva.jp@gmail.com", "jatinderpalsingh@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg",
    staffType: "Assistant Professors(Contract)",
  },
  {
    name: "Sukhpreet Singh",
    education: `B.Tech M.Tech Ph.D (Pursuing)`,
    phone: "",
    email: ["sukhpreet.manshahia@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg",
    staffType: "Assistant Professors(Contract)",
  },
  {
    name: "Chinu",
    education: `Ph.D.(Pursuing), M.Tech, B.Tech`,
    phone: "9915025805",
    email: ["chinu@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/477/605067c46b9c6-bpfull.jpg",
    staffType: "Guest/Part-Time Teachers",
  },
  {
    name: "Dr. Vikash Kumar Garg",
    education: `B.Tech(IT) , M.Tech(Computer Science & Engineering), Ph.D (Big Data, Hadoop, MongoDB) (Computer Science & Engineering)`,
    phone: "9988610629",
    email: ["contactvikashgarg@gmail.com"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/457/605b0275612df-bpfull.jpg",
    staffType: "Guest/Part-Time Teachers",
  },
  {
    name: "Sunita Rani",
    education: `Ph.D(Pursuing),M.Tech,B.Tech`,
    phone: "8196013222",
    email: ["sunitarani@sliet.ac.in"],
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg",
    staffType: "Guest/Part-Time Teachers",
  },
];
