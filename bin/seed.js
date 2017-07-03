const Event = require ("../models/event-model.js");
const Workshop = require ("../models/workshop-model.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/miamitech");

// ARRAY OF EVENTS ----------------------------------------------------------

const EventArray = [
  {
    category: "Event",
    name: "Waffle Wednesday",
    location: "LiveNinja - 120 Northwest 25th Street Loft 301 Miami, FL 33172 United States",
    date: new Date(2017, 06, 12, 09),
    photoUrl: "/images/waffle.jpeg",
    description: "Waffle Wednesday is a local Miami community event hosted at the LiveNinja offices in Wynwood, Miami. Every Wednesday morning (except for the last Wednesday of the month – check out our Waffles After Work event) we cook up delicious waffles in our office and host local entrepreneurs, artists, activists, and more to mingle over breakfast and some brief presentations by our weekly featured guests. We are sponsored by the Knight Foundation, and are honored to be considered a staple in the Miami entrpreneurial and tech communities.As always, we want this to be an open conversation! Bring your ideas, questions, and we will bring waffles, coffee, juices and fruits."
  },
  {
    category: "Event",
    name: "Thursday gathering @ Venture Cafe",
    location: "Venture Cafe Miami - 1951 NW 7th Ave Miami, FL 33136",
    date: new Date(2017, 06, 13, 16),
    photoUrl: "/images/venture.jpg",
    description: "Connect with hundreds of Miami’s amazing innovation and startup community every week. Gather to enjoy, engage and learn from each other at our free Thursday Gathering @ Venture Café. The Venture Cafe Thursday Gathering serves as a physical nexus for helping innovators and entrepreneurs find one another and collaborate to bring their dreams to reality.  Through connections and scheduled programming, Venture Cafe Miami is working to strengthen the growth of our innovation community. Please check our calendar for more information on weekly programs. No need to RSVP, and parking is free!"
  },
  {
    category: "Event",
    name: "Women in Miami Tech",
    location: "Lagniappe - 3425 NE 2nd Ave, Miami, FL",
    date: new Date(2017, 06, 13, 18, 30),
    photoUrl: "/images/womenintech2.jpeg",
    description: "Join us for our monthly happy hour! Share opportunities, get advice and meet other incredible women!"
  },
  {
    category: "Event",
    name: "Refresh-ing Miami Happy Hour",
    location: "Bar Works Miami - 31 NW 23rd Street Wynwood, FL ",
    date: new Date(2017, 06, 19, 18, 30),
    photoUrl: "/images/refresh-miami.gif",
    description: "Join us for a Refresh-ing Happy Hour! Meet fellow South Florida entrepreneurs and techies. We’ll have drink specials and fun ice breakers to help you connect with others in the tech community. Learn what fellow Refreshers are working on, make great connections and potentially meet your next co-founder, lead designer or programmer! With the recent closing of Acme Lounge, our new location will be announced shortly. Stay tuned!"
  },
  {
    category: "Event",
    name: "Frech Tech Networking Events",
    location: "Concrete Beach Brewery - 325 NW 24th St, Miami, FL",
    date: new Date(2017, 06, 06, 19, 15),
    photoUrl: "/images/frenchtech.jpeg",
    description: "Welcome to the monthly meetup of the Tech lovers of Miami. Feel free to come by after your day of work, to share ideas on tech in general. Whether you're a software engineer, a chief marketing officer, a newsletter writer, or just passionate about new technology, you're more than welcome. We like to keep it cool, and we think that sharing a beer is of more use than exchanging business cards. Open event. "
  },
  {
    category: "Event",
    name: "Product Hunt Miami",
    location: "Building Miami - 120 SW 8th st Miami, FL 33130",
    date: new Date(2017, 06, 13, 18, 30),
    photoUrl: "/images/product-hunt.png",
    description: "Join us for the Product Hunt Miami meetup. Learn about awesome products Made in Miami and hear from the founders who made them. Hang out with fellow startup people, grab a slice, drink a beer and meet someone new!"
  },
];

Event.create(
  EventArray,           //1st arg = array of product info objects
  (err, eventResults) => {  //2nd arg = callback!
      if (err) {
        console.log ("Please try again!");
        return;
      }
      eventResults.forEach((oneEvent) => {
        console.log("New Event: " + oneEvent.name);
      });
  }
);

// END ARRAY OF EVENTS ------------------------------------------------------

// ARRAY OF WORKSHOPS -------------------------------------------------------

const WorkshopArray = [
  {
    category: "Workshop",
    name: "Weekly Open Hack Night",
    location: "Cambridge Innovation Center - 1951 NW 7th Avenue, 1st Floor Miami, FL 33136",
    date: new Date(2017, 06, 10, 19),
    photoUrl: "/images/hacknight.png",
    description: "Join us for our weekly civic hack sessions @ Cambridge Innovation Center. Anyone interested in civic hacking and engagement is welcome. You can contribute to an existing Code for Miami Project (see our projects at http://codefor.miami/projects) or come share your idea, and maybe start a new collaboration. As always, bring a laptop; beginners are always welcome! We ask that participants at Code for Miami events follow our Code of Conduct to ensure that our group is a safe and welcoming space."
  },
  {
    category: "Workshop",
    name: "Social Media Marketing",
    location: "Doral Chamber of Commerce - 8181 NW 36TH STREET, SUITE 20-G DORAL, FL 33166",
    date: new Date(2017, 06, 12, 08, 30),
    photoUrl: "/images/socialmedia.png",
    description: "Social Media Marketing (SMM) July 12 Mastery Basic & Advanced Strategies Implement a real, practical Social Media Marketing Strategy that provides positive Return On Investment (ROI) for Small, Medium and Large businesses, Entrepreneurs, Franchisees, and Local Business owners. Students will be able to immediately apply proprietary formulas such as G.A.S. and C.C.E., along with understanding Social Media M-Levels and how it applies to the implementation of practical Social Media Marketing strategies. Students will learn conventional Social Media tools along with non-conventional but powerful ones! Register Now: http://events.r20.constantcontact.com/register/event?oeidk=a07ee3t94dy9a26dde3&llr=niazh9cab FEE: 3 Hours – $97.00"
  },
  {
    category: "Workshop",
    name: "Visual Storytelling Xperience",
    location: "The Idea Center at MDC Wolfson Campus - 315 NE 2nd Ave Miami, FL 33132",
    date: new Date(2017, 06, 12, 18, 30),
    photoUrl: "/images/storytelling.jpg",
    description: "WHY VISUAL STORYTELLING? Transforming an idea into a business success requires excelling in many areas: business strategy, visual production, and marketing strategy. Imagine taking only 8 weeks to convert your new startup idea or existing product into an impactful business proposition. With our VISUAL STORYTELLING XPERIENCE workshop, you can learn how to articulate, visualize and distribute your business idea – to empower your customers’ lives. Registration is now open for our July-August 2017 workshop at the Idea Center Miami Dade College. Summer 2017: Class starts on July 5th and ends on August 23rd, 2017. We’ll meet Wednesdays from 6:30 p.m. to 8:00 p.m. $597 – Class number 14117"
  },
  {
    category: "Workshop",
    name: "Game Programming With Unity & C#",
    location: "University of Miami - 1320 S Dixie Hwy Coral Gables, FL 33124",
    date: new Date(2017, 08, 01, 09),
    photoUrl: "/images/gamedev.jpeg",
    description: "Design and develop your very own game with the power of Unity. It’s the most popular tool among game developers, so you'll be building skills that you can take to college and beyond. You'll also get a chance to hone your programming skills using C# to bring your creation to life."
  },
  {
    category: "Workshop",
    name: "TechWeek Growth Summit",
    location: "Miami Dade College - 300 NE 2nd Ave, Miami, FL 33132",
    date: new Date(2017, 07, 02, 19),
    photoUrl: "/images/techweek.jpeg",
    description: "Growth Summit is a unique gathering where CEOs and Founders can learn from other tech leaders. It provides investors with an in-depth look into up-and-coming companies. Attendees get the opportunity to hear from and connect with top CEOs."
  },
];

Workshop.create(
  WorkshopArray,           //1st arg = array of product info objects
  (err, WorkshopResults) => {  //2nd arg = callback!
      if (err) {
        console.log ("Please try again!");
        return;
      }
      WorkshopResults.forEach((oneWorkshop) => {
        console.log("New Workshop: " + oneWorkshop.name);
      });
  }
);

// END ARRAY OF WORKSHOPS ------------------------------------------------------
