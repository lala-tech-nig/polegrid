
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
    question: "What safety measures are in place for telecoms masts?",
    answer: "Telecoms masts are designed and installed with safety in mind, adhering to strict regulations and guidelines to protect people and the environment.",
  },
  {
    question: "Can I still use my land after the telecoms mast is installed?",
    answer: "Yes, landowners can continue using their land as usual, with minimal restrictions, once the installation is complete.",
  }
 
];

function FaqData() {
  return (
    <div className="App">
      <FAQsection faqData={faqData} />
    </div>
  );
}

export default FaqData;