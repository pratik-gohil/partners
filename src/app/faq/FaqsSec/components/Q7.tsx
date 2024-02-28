import React from 'react'
import styles from '../FaqsSec.module.scss'
function Q7() {
    return (
        <>  
            For GST registered partners, we follow the below process to release the GST amount payable.<br /> 
            <ul>

                <li><b>Pre-defined GST invoice</b> will be displayed along with a unique <b>GST invoice no</b>. on the partner dashboard for the respective payout month with a breakup of Gross payout amount and GST payable for the month.</li>
                <li>Enter this unique GST invoice no. at the time of declaring the liability on the Govt. GST portal.</li>
                <li>Once the liability is created on the Govt. GST portal, e-sign the predefined GST invoice available in dashboard on or before 10th of every month.</li>
                <li>Our Finance team will verify the liability created through the GST portal.</li>
                <li>Once the entries are verified by the finance team for the signed invoice, the amount will be released in the next payout cycle.</li>

            </ul>
            <span><b>Note:</b>&nbsp; The liability created for the GST amount should be equal to or higher than the GST invoice for the month and should be e-signed by you. Without this the GST amount shall be kept on hold. Partial GST declared will not be considered and will not be released.</span>
     
        </>
    ) 
}

export default Q7