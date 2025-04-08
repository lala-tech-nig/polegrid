
import FAQsection from './FaqSection';

const faqData = [
  {
    question: "What is Polegrid?",
    answer: "Polegrid is a company that connects landowners and property managers with telecom companies and banks looking to install telecom masts or ATMs. We facilitate these partnerships, ensuring a hassle-free process and competitive rental income for property owners.",
  },
  {
    question: "How does it work?",
    answer: "We work with telecom companies and towercos to identify suitable locations for telecom towers. We then partner with landowners to install the towers on their properties, providing a rental income stream.",
  },
  {
    question: "What supporting documents do I need to provide and upload?",
    answer: "Required documents include ID, land ownership documents (e.g., Certificate of Occupancy, Deed of Assignment), utility bills, and a passport photo and picture of your land.",
  },
  {
    question: "How much can I earn from renting my land?",
    answer: "Earnings vary depending on the location and size of the tower, but you can earn above  N2 million per year.",
  },
  {
    question: "What is the typical duration of a lease agreement?",
    answer: "Lease agreements usually range from 5 to 20 years, providing property owners with a stable and long-term income stream.",
  },
  {
    question: "What types of properties qualify for mast or ATM installations?",
    answer: "Properties such as vacant lands, commercial buildings, and spaces in strategic locations with high visibility or foot traffic are ideal for installations. Our team assesses your property to determine its suitability.",
  },
  {
    question: "Will the installation of a telecom mast or ATM affect my property’s usability or appearance?",
    answer: "Installations are designed to have minimal impact on your property. Telecom companies and banks handle all installation and maintenance, ensuring your property remains functional and aesthetically pleasing.",
  },
  {
    question: "How do I benefit from partnering with Polegrid Solutions?",
    answer: "By partnering with us, landowners can earn passive income annually while supporting the development of essential telecoms infrastructure.",
  },
  {
    question: "How long does the telecoms mast or atm installation process take?",
    answer: "The installation process typically takes several months, depending on factors like site acquisition, planning permission, and construction.",
  },
  {
    question: "Can I still use my land after the telecoms mast is installed?",
    answer: "Yes, landowners can continue using their land as usual, with minimal restrictions, once the installation is complete.",
  },
  {
    question: "What kind of support and maintenance can I expect from Polegrid Solutions?",
    answer: "We provide ongoing support and ensure that telecoms companies maintain the installations, minimizing disruptions to landowners.",
  },
  {
    question: "As a landlord, what is the minimum space requirement for telecom towers?",
    answer: "The minimum space requirement for telecom towers is 20 feet x 20 feet.",
  },
  {
    question: "How do I get started with Polegrid?",
    answer: "Simply register your property on our platform by providing basic information. Our team will guide you through the inspection, agreement, and installation process, ensuring a smooth experience from start to finish.Registration and consultation fee N15,500",
  },
  {
    question: "How long does the registration process take?",
    answer: "Registration typically takes 3-5 business days, after which we will contact you.",
  },
  {
    question: " How much can I earn from renting my land?",
    answer: "Earnings vary depending on the location and size of the tower, but you can with earn above N2 million per year.",
  },
  {
    question: "Is there a success fee, and if so, how much?",
    answer: "Yes, there is a success fee of 5%.",
  },
  {
    question: "What supporting documents do I need to provide and upload?",
    answer: ". A valid ID card, passport, or a clear picture of yourself.One supporting document, which can be a utility bill, land documents (e.g., certificate of occupancy, deed of assignment, land receipt, land survey, letter of allocation), a property photo, land photo, or any other document related to the selected service",
  },
 
];

function FaqData() {
  return (
    <div className="App">
      <FAQsection faqData={faqData} />
    </div>
  );
}

export default FaqData;