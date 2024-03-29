import Qsix from "./components/qsix";
import QOne from "./components/qOne";
import QThree from "./components/qThree";
import QSeventeen from "./components/qSeventeen";
import QNineteen from "./components/qNineteen";

const faqsData = [
    {
        queryNumber: `1`,
        query: `1. Who is an Authorised Person?`,
        answer: ``,
        component: <QOne />
    },
    {
        queryNumber: `2`,
        query: `2. What is the role of an Authorised Person?`,
        answer: `The primary responsibility of an Authorised Person is to register clients and assist them with their trading requirements. They provide support in buying, selling securities and have the authority to trade on behalf of the clients, with prior permission.`,
    },
    {
        queryNumber: `3`,
        query: `3. Who can be appointed as an Authorised Person?`,
        answer: ``,
        component: <QThree />
    },
    {
        queryNumber: `4`,
        query: `4. Can Hindu Undivided Family (HUF) be appointed as an Authorised Person?`,
        answer: `No, HUF can't get registered as an AP. In order to become an AP, one must be either an individual, a partnership firm, a LLP or a Corporate entity.`,
    },
    {
        queryNumber: `5`,
        query: `5. If a company or partnership firm is already registered as an Authorised Person (AP), can one of its directors or partners also register individually as another Authorised Person?`,
        answer: `No, a Director or Partner of an existing AP registered firm cannot register as a new Authorised Person in any capacity.`,
    },
    {
        queryNumber: `6`,
        query: `6. What is the eligiblility criteria to become an Authorised Person?`,
        answer: ``,
        component: <Qsix />
    },
    {
        queryNumber: `7`,
        query: `7. What is the infrastructure required to become an AP?`,
        answer: `The Authorised Person must have an adequate office space, equipment, manpower and other infrastructural facilities, which the Exchange can prescribe from time to time, in order to effectively service their clients on behalf of the stockbroker.`,
    },
    {
        queryNumber: `8`,
        query: `8. Are NISM certification and third-party reference letters required to become an Authorised Person?`,
        answer: `No, they are not mandatory requirements.`,
    },
    {
        queryNumber: `9`,
        query: `9. Do you need to provide a Registration of Firm (ROF) certificate while registering as an AP in the Partnership firm category?`,
        answer: `As a part of the registration process, to become an AP, a Partnership firm needs to submit the Registration of Firm (ROF) certificate along with the partnership deed.`,
    },
    {
        queryNumber: `10`,
        query: `10. Is it necessary for an AP to enter into a tripartite agreement involving an AP, stockbroker, and client?`,
        answer: `No, the agreement is required to be signed only between the stockbroker and the Authorised Person in the format which has been prescribed by the Exchange vide circular no. 705 (download ref. no. 13601) dated December 3, 2009.`,
    },
    {
        queryNumber: `11`,
        query: `11. Can a stockbroker enter into a tripartite agreement in addition to the agreement between stockbroker and authorised person?`,
        answer: `Yes, however, whilst applying for appointment of Authorised Person, the uploaded agreement should be strictly as per the format prescribed by the Exchange.`,
    },
    {
        queryNumber: `12`,
        query: `12. Can an existing sub-broker also register as an Authorised Person (AP)?`,
        answer: `No, if you are an existing sub-broker with SEBI then you would first need to get your sub-broker registration cancelled. Once that is done, you can then apply to become an Authorised Person (AP) with the exchange.`,
    },
    {
        queryNumber: `13`,
        query: `13. Can an Authorised Person be affiliated with more than one stockbroker?`,
        answer: `No, an Authorised person can be affiliated with only one stockbroker at any given point of time.`,
    },
    {
        queryNumber: `14`,
        query: `14. Can you transfer your existing AP registration from one stockbroker to another?`,
        answer: `No, you would first need to cancel your AP registration done through the current stockbroker. Once that is done, you would need to apply for a new AP registration via the second stockbroker that you desire to get associated with.`,
    },
    {
        queryNumber: `15`,
        query: `15. Can an Authorised Person open multiple offices?`,
        answer: `Yes, an Authorised Person is allowed to have multiple offices.`,
    },
    {
        queryNumber: `16`,
        query: `16. Is it possible for one of the partners or directors to eSign on behalf of a Partnership / LLP / Corporate firm?`,
        answer: `Yes, if the partner’s or director's name is mentioned as an authorised signatory passed by the company's board of members or mentioned in their Partnership deed / LLP agreement, then they can eSign on behalf of the firm. A letter should be submitted on firms letterhead and mentioning the purpose of AP registration.`,
    },
    {
        queryNumber: `17`,
        query: `17. How can I become an authorised partner with Mirae Asset if I am already registered with another stockbroker?`,
        answer: ``, 
        component: <QSeventeen />
    },
    {
        queryNumber: `18`,
        query: `18. What is the affiliate program offered by Mirae Asset?`,
        answer: `Mirae Asset runs an affiliate program where you can introduce your community or clients to m.Stock and earn lucrative commissions on each new customer account opened.`,
    },
    {
        queryNumber: `19`,
        query: `19. What are the various charges that one needs to pay to register and operate as an AP?`,
        component: <QNineteen />
    },
];

export default faqsData;