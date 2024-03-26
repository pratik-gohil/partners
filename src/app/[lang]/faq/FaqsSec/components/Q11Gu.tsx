import React from 'react' 
import styles from '@/components/Accordian/Accordian.module.scss'

function Q11Gu() {
    return (
        <>
            ઇ-માર્જિન માટે, અમારી પાસે ફંડના મૂલ્યના આધારે ત્રણ સ્લેબ લાગુ છે.
            <div className={styles["pricingTableHolder"]}>
                <table cellPadding={0} cellSpacing={0} width="100%">
                    <tr>
                        <th>મૂળભૂત ઈન્સ્ટરેસ્ટ રેટ</th>
                        <th>પાર્ટનરને પેમેન્ટ
                            <br />(મૂળભૂત રેટ સુધી)
                        </th>
                        <th>કસ્ટમાઇઝ્ડ ઈન્ટરેસ્ટ રેટ <br />(મહત્તમ લિમિટ)
                        </th>
                        <th>પાર્ટનરને પેમેન્ટ
                            <br />(મૂળભૂત રેટ કરતા વધુ)</th>
                    </tr>
                    <tr>
                        <td>9.99%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>5%</b></td>
                        <td>24%</td>
                        <td className={`${styles["orangeTxt"]}}`}><b className={styles["orangeTxt"]}>100%</b></td>
                    </tr>
                </table>
            </div>
            <br />
            માર્જિન પ્લેજ માટે સૌથી ઓછું અસરકારક વ્યાજ દર 9.99% છે.<br /><br />
            બંને ફંડિંગ પ્રોડક્ટ (MTF અને માર્જિન પ્લેજ) માટે, તમે અમારા સ્ટાન્ડર્ડ રેટ ચાર્જ કરી શકો છો અથવા તેમને 24% સુધી કસ્ટમાઇઝ કરી શકો છો.<br /><br />
            Mirae Asset પાર્ટનર તમને તમારા ક્લાયન્ટના ચાર્જીસને તેમની જરૂરિયાતો અનુસાર કસ્ટમાઇઝ કરવા અને કોઈપણ મંજૂરી વગર, પાર્ટનર ડેશબોર્ડ દ્વારા આખો પ્લાન બનાવવા માટે, તમારા બિઝનેસ પર તમારું સંપૂર્ણ નિયંત્રણ છે તેની ખાતરી કરવા માટે તમને અનુકૂળતા આપે છે.<br /><br />
            <b className={styles["orangeTxt"]}>નોંધ:</b>&nbsp; તમે અમારા સ્ટાન્ડર્ડ MTF વ્યાજ તમારા ક્લાયન્ટ પાસેથી વસૂલ કરી શકો છો અને 5% કમાઈ શકો છો. જો તમે તમારા ક્લાયન્ટ પાસેથીથી 9.99% થી નીચે અને 6.99% p.a સુધી વ્યાજ વસૂલવા માંગો છો, તો તમને કોઈ શેરિંગ મળશે નહીં.
        </>
    )
}

export default Q11Gu