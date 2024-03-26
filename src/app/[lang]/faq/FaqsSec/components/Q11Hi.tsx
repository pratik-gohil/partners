import React from 'react'
import styles from '@/components/Accordian/Accordian.module.scss'

function Q11Hi() {
    return (
        <>
            eMargin के लिए,फंडिंग वैल्यू के आधार पर हमारे पास लागू होने वाले 3 स्लैब हैं
            <div className={styles["pricingTableHolder"]}>
                <table cellPadding={0} cellSpacing={0} width="100%">
                    <tr>
                        <th>आधार ब्याज दर</th>
                        <th>पार्टनर को भुगतान
                            <br />(आधार दर तक)
                        </th>
                        <th>कस्टमाइज़्ड ब्याज दर <br />(अधिकतम सीमा)
                        </th>
                        <th>पार्टनर को भुगतान
                            <br />(आधार दर से ज़्यादा पर)</th>
                    </tr>
                    <tr>
                        <td>9.99%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>5%</b></td>
                        <td>24%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>80%</b></td>
                    </tr>
                </table>
            </div>
            <br />
            मार्जिन प्लेज के लिए न्यूनतम प्रभावी ब्याज दर 9.99% है।<br /><br />
            दोनों ही फंडिंग प्रोडक्ट (MTF और मार्जिन प्लेज) के लिए आप हमारे स्टैंडर्ड रेट चार्ज कर सकते हैं या उन्हें 24% तक कस्टमाइज कर सकते हैं।<br /><br />
            Mirae Asset Partners आपके क्लाइंट की जरूरतों के हिसाब से चार्ज कस्टमाइज करने की सुविधा ऑफर करते हैं। इनकी ओर से बिना किसी अप्रूवल के पार्टनर डैशबोर्ड के माध्यम से पूरा प्लान बनाने का ऑफर भी दिया जाता है। इससे बिजनेस में आपका पूरा कंट्रोल बना रहता है।<br /><br />
            <b className={styles["orangeTxt"]}>नोट:</b>&nbsp; आप अपने क्लाइंट को हमारे स्टैंडर्ड MTF इंटरेस्ट रेट चार्ज करके 5% कमा सकते हैं। हालांकि, अगर आप अपने क्लाइंट को 9.99% से कम और 6.99% p.a तक चार्ज करना चाहते हैं तो कोई शेयरिंग नहीं होगी।
        </>
    )
}

export default Q11Hi