import QTwo from "./components/qTwo"; 

const faqsData = [
    {
        queryNumber: `1`,
        query: `1. What is Mirae Asset Partners referral program?`,
        answer: `Mirae Asset Partners referral program gives you the opportunity to refer business partners and earn ₹6,000 as referral reward per successful registration.`, 
    },
    {
        queryNumber: `2`,
        query: `2. How does Mirae Asset Partners referral program work?`, 
        component: <QTwo />
    }, 
    {
        queryNumber: `3`,
        query: `3. Will my name be disclosed to my referral lead?`,
        answer: `Yes, your name will be shared with your referred lead.`, 
    }, 
    {
        queryNumber: `4`,
        query: `4. How much time does it take for the referral rewards to be credited?`,
        answer: `Once your referred partner completes their registration with us, you will receive the referral  reward within 30 working days.`, 
    }, 
    {
        queryNumber: `5`,
        query: `5. Is there any limit on the rewards or the number of partners that can be referred?`,
        answer: `No, there is no limit on referral rewards. Share this opportunity with your business partner community and earn unlimited rewards. Simply enter business partner details, refer and earn big!`, 
    }, 
    {
        queryNumber: `6`,
        query: `6. Will TDS be deducted on my referral rewards?`,
        answer: `Since referral rewards will be added to your monthly payout, overall TDS of 5% will be applicable.`, 
    },  
];

export default faqsData;