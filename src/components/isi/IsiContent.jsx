import React from "react"
import { Container, Row, Col } from "react-bootstrap"

class IsiContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <section>
        <h4 className='purple extra-bold isi-header-text mulish'>
          INDICATION
        </h4>
        <p>
          Myfembree is indicated for the management of heavy menstrual bleeding associated with uterine
          leiomyomas (fibroids) in premenopausal women. <u>Limitations of Use</u>: Use of Myfembree
          should be limited to 24 months due to the risk of continued bone loss which may not be reversible.
        </p>
        <h4 className='purple extra-bold isi-header-text mulish'>
          IMPORTANT SAFETY INFORMATION
        </h4>
        {/* <div className='black-box-container box-box-margin'> */}
          <p className='extra-bold'>
          <span className='purple'>BOXED WARNING:</span> THROMBOEMBOLIC DISORDERS AND VASCULAR EVENTS
          </p>
          <ul className='black-box-ul'>
            <li>
              Estrogen and progestin combination products, including Myfembree, increase the risk of thrombotic
              or thromboembolic disorders including pulmonary embolism, deep vein thrombosis, stroke and
              myocardial infarction, especially in women at increased risk for these events.
            </li>
            <li>
              Myfembree is contraindicated in women with current or a history of thrombotic or thromboembolic
              disorders and in women at increased risk for these events, including women over 35 years of age
              who smoke or women with uncontrolled hypertension.
            </li>
          </ul>
        {/* </div> */}
        <h4 className='purple extra-bold isi-header-text mulish'>
          CONTRAINDICATIONS
        </h4>
        <p>
          Myfembree is contraindicated in women with any of the following: high risk of arterial, venous
          thrombotic, or thromboembolic disorder; pregnancy; known osteoporosis; current or history of breast
          cancer or other hormone-sensitive malignancies; known hepatic impairment or disease; undiagnosed
          abnormal uterine bleeding; known hypersensitivity to components of Myfembree.
        </p>
        <h4 className='purple extra-bold isi-header-text mulish'>
          WARNINGS AND PRECAUTIONS
        </h4>
        <p>
          <strong className='purple'>Thromboembolic Disorders:</strong> {' '}
          Discontinue immediately if an arterial or venous
          thrombotic, cardiovascular, or cerebrovascular event occurs or is suspected. Discontinue at
          least 4 to 6 weeks before surgery associated with an increased risk of thromboembolism, or
          during periods of prolonged immobilization, if feasible. Discontinue immediately if there is
          sudden unexplained partial or complete loss of vision, proptosis, diplopia, papilledema, or
          retinal vascular lesions and evaluate for retinal vein thrombosis as these have been reported
          with estrogens and progestins.
        </p>
        <p>
          <strong className='purple'>Bone Loss:</strong> {' '}
          Myfembree may cause a decrease in bone mineral density (BMD) in
          some patients, which may be greater with increasing duration of use and may not be completely
          reversible after stopping treatment. Consider the benefits and risks in patients with a history
          of low trauma fracture or risk factors for osteoporosis or bone loss, including medications that
          may decrease BMD. Assessment of BMD by dual-energy X-ray absorptiometry (DXA) is recommended at
          baseline and periodically thereafter. Consider discontinuing Myfembree if the risk of bone loss
          exceeds the potential benefit.
        </p>
        <p>
          <strong className='purple'>Hormone-Sensitive Malignancies:</strong> {' '}
          Discontinue Myfembree if a hormone-sensitive
          malignancy is diagnosed. Surveillance measures in accordance with standard of care, such as
          breast examinations and mammography are recommended. Use of estrogen alone or estrogen plus
          progestin has resulted in abnormal mammograms requiring further evaluation.
        </p>
        <p>
          <strong className='purple'>Depression, Mood Disorders, and Suicidal Ideation:</strong> {' '}
          Promptly evaluate patients
          with mood changes and depressive symptoms including shortly after initiating treatment, to
          determine whether the risks of continued therapy outweigh the benefits. Patients with new
          or worsening depression, anxiety, or other mood changes should be referred to a mental health
          professional, as appropriate. Advise patients to seek immediate medical attention for suicidal
          ideation and behavior and reevaluate the benefits and risks of continuing Myfembree.
        </p>
        <p>
          <strong className='purple'>Hepatic Impairment and Transaminase Elevations:</strong> {' '}
          Steroid hormones may be poorly
          metabolized in these patients. Instruct women to promptly seek medical attention for symptoms or
          signs that may reflect liver injury, such as jaundice or right upper abdominal pain. Acute liver
          test abnormalities may necessitate the discontinuation of Myfembree use until the liver tests
          return to normal and Myfembree causation has been excluded.
        </p>
        <p>
          <strong className='purple'>Gallbladder Disease or History of Cholestatic Jaundice:</strong> {' '}
          Discontinue Myfembree
          if signs or symptoms of gallbladder disease or jaundice occur. For women with a history of
          cholestatic jaundice associated with past estrogen use or with pregnancy, assess the risk-benefit
          of continuing therapy. Studies among estrogen users suggest a small increased relative risk of
          developing gallbladder disease.
        </p>
        <p>
          <strong className='purple'>Elevated Blood Pressure:</strong> {' '}
          For women with well-controlled hypertension, monitor
          blood pressure and stop Myfembree if blood pressure rises significantly.
        </p>
        <p>
          <strong className='purple'>Change in Menstrual Bleeding Pattern and Reduced Ability to Recognize Pregnancy:</strong> {' '}
          Advise
          women to use non-hormonal contraception during treatment and for one week after discontinuing
          Myfembree. Avoid concomitant use of hormonal contraceptives. Myfembree may delay the ability to
          recognize pregnancy because it alters menstrual bleeding. Perform testing if pregnancy is suspected
          and discontinue Myfembree if pregnancy is confirmed.
        </p>
        <p>
          <strong className='purple'>Risk of Early Pregnancy Loss:</strong> {' '}
          Myfembree can cause early pregnancy loss. Exclude
          pregnancy before initiating and advise women to use effective non-hormonal contraception.
        </p>
        <p>
          <strong className='purple'>Uterine Fibroid Prolapse or Expulsion:</strong> {' '}
          Advise women with known or suspected
          submucosal uterine fibroids about the possibility of uterine fibroid prolapse or expulsion and
          instruct them to contact their physician if severe bleeding and/or cramping occurs.
        </p>
        <p>
          <strong className='purple'>Alopecia:</strong> {' '}
          Alopecia, hair loss, and hair thinning were reported in phase 3 trials
          with Myfembree. Consider discontinuing Myfembree if hair loss becomes a concern. Whether the hair
          loss is reversible is unknown.
        </p>
        <p>
          <strong className='purple'>Effects on Carbohydrate and Lipid Metabolism:</strong> {' '}
          More frequent monitoring in
          Myfembree-treated women with prediabetes and diabetes may be necessary. Myfembree may decrease
          glucose tolerance and result in increased blood glucose concentrations. Monitor lipid levels
          and consider discontinuing if hypercholesterolemia or hypertriglyceridemia worsens. In women
          with pre-existing hypertriglyceridemia, estrogen therapy may be associated with elevations in
          triglycerides levels leading to pancreatitis. Use of Myfembree is associated with increases
          in total cholesterol and LDL-C.
        </p>
        <p>
          <strong className='purple'>Effect on Other Laboratory Results:</strong> {' '}
          Patients with hypothyroidism and
          hypoadrenalism may require higher doses of thyroid hormone or cortisol replacement therapy.
          Use of estrogen and progestin combinations may raise serum concentrations of binding
          proteins (e.g., thyroid-binding globulin, corticosteroid-binding globulin), which may reduce
          free thyroid or corticosteroid hormone levels. Use of estrogen and progestin may also affect
          the levels of sex hormone-binding globulin, and coagulation factors.
        </p>
        <p>
          <strong className='purple'>Hypersensitivity Reactions:</strong> {' '}
          Immediately discontinue Myfembree if a hypersensitivity
          reaction occurs.
        </p>
        <p>
          <strong className='purple'>ADVERSE REACTIONS:</strong>{' '}
          <strong className='purple'>Most common adverse reactions</strong> for Myfembree (incidence ≥3% and
          greater than placebo) were hot flush/hyperhidrosis/night sweats, abnormal uterine bleeding,
          alopecia, and decreased libido. These are not all the possible side effects of Myfembree.
        </p>
        <p>
          <strong className='purple'>DRUG INTERACTIONS:</strong>{' '}
          <strong className='purple'>P-gp Inhibitors:</strong> Avoid use of Myfembree with oral P-gp inhibitors.
          If use is unavoidable, take Myfembree first, separate dosing by at least 6 hours, and monitor patients
          for adverse reactions. {' '}
          <strong className='purple'>Combined P-gp and Strong CYP3A Inducers:</strong> Avoid use of Myfembree
          with combined P-gp and strong CYP3A inducers.
        </p>
        <p>
          <strong className='purple'>LACTATION:</strong>{' '}
          Advise women not to breastfeed while taking Myfembree.
        </p>
        <p className='lower-isi-callout'>
          <strong>Please see full</strong> {' '}
          <a
            className='isi-link extra-bold'
            href='https://www.myovant.com/myfembree-prescribing-information.pdf'
            target='_blank'
          >
            Prescribing Information including BOXED WARNING
          </a>.
        </p>
      </section>
    )
  }
}

export default IsiContent
