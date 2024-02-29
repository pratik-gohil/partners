import Q1 from "./components/Q1"; 
import Q2 from "./components/Q2"; 
import Q3 from "./components/Q3"; 
import Q7 from "./components/Q7"; 
import Q8 from "./components/Q8"; 
import Q9 from "./components/Q9"; 
import Q11 from "./components/Q11"; 
import Q17 from "./components/Q17"; 
import Q21 from "./components/Q21";  

const faqsData = [
    {
        queryNumber: `1`,
        query: `1. What are the key differences between Mirae Asset Partners and other partner programs?`, 
        component:  <Q1 />,  
    },
    {
        queryNumber: `2`,
        query: `2. What are the standard pricing plans offered by m.Stock to their clients?`, 
        component:  <Q2 />,  
    },
    {
        queryNumber: `3`,
        query: `3. What are the other opportunities to associate and earn apart from the Mirae Asset Partner program?`, 
        component:  <Q3 />,  
    },
    {
        queryNumber: `4`,
        query: `4. Will I be able to place offline orders on behalf of my clients?`,
        answer: `You will have 'View Only' access to the service and monitor your client's trading positions. To place orders, your clients can contact our centralized 'Call and Trade' dealing desk and submit offline orders. They can reach the dealing desk by calling 1800 2028 444.`, 
    },
    {
        queryNumber: `5`,
        query: `5. Will I be able to place orders on behalf of my clients through your call & trade desk?`,
        answer: `Orders can only be placed by the client using their registered mobile number when calling the Call and Trade desk.`, 
    },
    {
        queryNumber: `6`,
        query: `6. Are there any Call and Trade charges applicable to my clients?`,
        answer: `There are no charges applicable for calling or placing orders through the Call & Trade desk.`, 
    },
    {
        queryNumber: `7`,
        query: `7. I am GST registered, how can I claim GST collected from the clients in my payout?`, 
        component:  <Q7 />,  
    },
    {
        queryNumber: `8`,
        query: `8. How can I transfer my existing clients? Can I waive off their account opening fee?`, 
        component:  <Q8 />,  
    },
    {
        queryNumber: `9`,
        query: `9. Are there any minimum account opening charges applicable to my clients?`, 
        component:  <Q9 />,  
    },
    {
        queryNumber: `10`,
        query: `10. What is the minimum brokerage I can offer to my clients?`,
        answer: `You can offer a Zero brokerage account to your clients where they can trade at zero brokerage for lifetime by paying a minimum account opening fee of ₹ 999.`, 
    },
    {
        queryNumber: `11`,
        query: `11. What are the minimum and maximum interest charges I can offer to my clients? Do I need approval to charge higher interest rates?`, 
        component:  <Q11 />,  
    },
    {
        queryNumber: `12`,
        query: `12. What is a DP plan?`,
        answer: `DP plan is a combination of Account Maintenance Charges, Pledge/Unpledge charges and Sell Transaction Charges.`, 
    },
    {
        queryNumber: `13`,
        query: `13. Mirae Asset is associated with CDSL or NSDL?`,
        answer: `Mirae Asset is associated with CDSL.`, 
    },
    {
        queryNumber: `14`,
        query: `14. Is it possible to transfer m.Stock client to my partner code?`,
        answer: `On a case-to-case basis, you are allowed to transfer clients from m.Stock to your partner code. To initiate the transfer process, the client should provide an email where he suggests he has no objection in getting mapped with the partner.`, 
    },
    {
        queryNumber: `15`,
        query: `15. Can I withdraw a partial amount from my deposit in case of an emergency?`,
        answer: `Mirae Asset Partners requires a nominal deposit of ₹50,000 during onboarding. Partial withdrawal of this deposit is not allowed; it can only be withdrawn when you surrender your partnership business.`, 
    },
    {
        queryNumber: `16`,
        query: `16. What facilities will I get to service my clients?`,
        answer: `As a partner, you will have access to our Interactive Partner portal. Through this portal, you can onboard clients, create and modify pricing plans, service them, monitor their trades, and access client-specific reports to provide investment advice. Additionally, we have a dedicated help and client support, allowing you to track your customers' queries and promptly resolve them.`, 
    },
    {
        queryNumber: `17`,
        query: `17. What are the payout and pricing terms for partners?`,
        component:  <Q17 />,  
    },
    {
        queryNumber: `18`,
        query: `18. What is the payout cycle? Is it consistent across all income streams?`,
        answer: `Payouts for all income streams are calculated and issued on the 5th of each month.`, 
    },
    {
        queryNumber: `19`,
        query: `19. Will the uncovered debit in my client's ledger be recovered from me?`,
        answer: `Partners have the responsibility to recover any uncovered debits from their clients. In case you are unable to recover these debits in the current month, the outstanding amount will be adjusted from your monthly payout. Once the amount is successfully recovered, it will be paid back to the you in the upcoming payout cycle.`, 
    },
    {
        queryNumber: `20`,
        query: `20. Does Mirae Asset provide algo trading facility for clients?`,
        answer: `As of now we do not provide the facility of algo trading.`, 
    },
    {
        queryNumber: `21`,
        query: `21. How can I reach out to Mirae Asset for support or to address queries?`, 
        component:  <Q21 />,  
    },
    {
        queryNumber: `22`,
        query: `22. Can I offer mutual fund schemes to my clients, and what would be the revenue?`,
        answer: `We have deactivated the mutual fund segment for partner clients as we only offer direct mutual funds. To prevent any revenue loss from your existing mutual fund base, we have disabled mutual fund access.`, 
    },
    {
        queryNumber: `23`,
        query: `23. Can I become a master franchisee and appoint other AP's under my code?`,
        answer: `Currently, Mirae Asset doesn't offer master franchisee.`, 
    },
    {
        queryNumber: `24`,
        query: `24. Is it necessary to have a dedicated office setup, or can I run my business from home?`,
        answer: `You have the flexibility to operate your business from your residence. However, it's important to ensure that all compliance requirements, such as displaying notice boards and certificates, are met at your residential address.`, 
    },
    {
        queryNumber: `25`,
        query: `25. How much time does it take for AP registration?`,
        answer: `Once you complete your onboarding process, our verification team will verify your documents within 48 hours and proceed for exchange registration which is done within 10 days if there are no rejections.`, 
    },
];

export default faqsData;