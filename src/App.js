import './App.css';
import React from 'react';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <>
      <PageLayout button_id='350' hidden={false}>
        <li className="form-line" data-type="control_text" id="id_1">
          <div id="cid_1" className="form-input-wide" data-layout="full">
            <div id="text_1" className="form-html" data-component="text" tabIndex="-1">
              <p style={{ textAlign: 'center' }}>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/image_2024-09-04_091851753.66d7dfcdf2b163.35034501.png"
                  alt=""
                />
              </p>
              <p style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '18pt' }}>
                  <strong>FUNCTION REPORT - ADULT</strong>
                </span>
              </p>
              <p style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '12pt' }}>
                  <strong>
                    READ ALL OF THIS INFORMATION<br />YOU BEGIN COMPLETING THIS FORM
                  </strong>
                </span>
              </p>
              <p style={{ textAlign: 'center' }}>
                <strong>IF YOU NEED HELP</strong>
              </p>
              <p>
                If you need help with this form, complete as much of it as you can and call the phone number provided
                on the letter sent with the form, or contact the person who asked you to complete the form. If you need
                the address or phone number for the office that provided the form, you can get it by calling Social
                Security at 1-800-772-1213.
              </p>
              <p style={{ textAlign: 'center' }}>
                <strong>HOW TO COMPLETE THIS FORM</strong>
              </p>
              <p>
                The information that you give us on this form will be used by the office that makes the disability
                decision on your disability claim. You can help them by completing as much of the form as you can.
              </p>
              <p>It is important that you tell us about your activities and abilities.</p>
              <ul style={{ listStyleType: 'square' }}>
                <li>Print or type.</li>
                <li>
                  DO NOT LEAVE ANSWERS BLANK. If you do not know the answer or the answer is "none" or "does not
                  apply," please write "don't know" or "none" or "does not apply."
                </li>
                <li>Do not ask a doctor or hospital to complete this form.</li>
                <li>
                  Be sure to explain an answer if the question asks for an explanation, or if you think you need to
                  explain an answer.
                </li>
                <li>
                  If more space is needed to answer any questions, use the "REMARKS" section on Page 10, and show the
                  number of the question being answered.
                </li>
                <li>If a specific activity is performed with the help of others, please indicate that.</li>
              </ul>
            </div>
          </div>
        </li>
      </PageLayout>
      <PageLayout button_id='352'>
        <PrivacyActStatement />
      </PageLayout>
    </>
  );
}

// Place inside App.js or another component

function PrivacyActStatement() {
  return (
    <li className="form-line" data-type="control_text" id="id_351">
      <div id="cid_351" className="form-input-wide" data-layout="full">
        <div id="text_351" className="form-html" data-component="text" tabIndex={-1}>
          <p className="text-center">
            <img
              src="https://www.jotform.com/uploads/linerlegal/form_files/image_2024-09-04_100921371.66d7eba3e2cd37.37734783.png"
              alt=""
              className="mx-auto"
            />
          </p>
          <p className="text-center">
            <span className="text-2xl font-bold">
              Privacy Act Statements
              <br />
              Collection and Use of Personal Information
            </span>
          </p>
          <p>
            Sections 205(a), 223(d), and 1631 of the Social Security Act, as amended, allow us to collect this
            information. Furnishing us this information is voluntary. However, failing to provide all or part of the
            information may prevent an accurate and timely decision on any claim filed.
          </p>
          <p>
            We will use the information you provide to determine benefits eligibility. We may also share the
            information for the following purposes, called routine uses:
          </p>
          <p>
            • To third party contacts (e.g., employers and private pension plans) in situations where the party to
            be contacted has, or is expected to have, information relating to the individual's capability to manage
            his or her benefits or payments, or his or her eligibility for entitlement to benefits or eligibility
            for payments, under the Social Security program; and
          </p>
          <p>
            • To contractors and other Federal agencies, as necessary, for the purpose of assisting the Social
            Security Administration (SSA) in the efficient administration of its programs. We will disclose
            information under this routine use only in situations in which we may enter into a contractual or
            similar agreement to obtain assistance in accomplishing an SSA function relating to this system record.
          </p>
          <p>
            In addition, we may share this information in accordance with the Privacy Act and other Federal laws.
            For example, where authorized, we may use and disclose this information in computer matching programs,
            in which our records are compared with other records to establish or verify a person's eligibility for
            Federal benefit programs and for repayment of incorrect or delinquent debts under these programs.
          </p>
          <p>
            A list of additional routine uses is available in our Privacy Act System of Records Notices (SORN)
            60-0089, entitled Claims Folders System, as published in the Federal Register (FR) on October 31, 2019,
            at 84 FR 58422, and 60-0320, entitled Electronic Disability Claim File, as published in the FR on June
            6, 2020 at 85 FR 34477. Additional information, and a full listing of all of our SORNs, is available on
            our website at{' '}
            <a
              href="http://www.ssa.gov/privacy"
              target="_blank"
              rel="nofollow"
              className="text-blue-600 underline"
            >
              www.ssa.gov/privacy
            </a>
            .
          </p>
          <p>
            <strong>Paperwork Reduction Act Statement -</strong> This information collection meets the requirements
            of 44 U.S.C. § 3507, as amended by section 2 of the Paperwork Reduction Act of 1995. You do not need to
            answer these questions unless we display a valid Office of Management and Budget control number. We
            estimate that it will take about 61 minutes to read the instructions, gather the facts, and answer the
            questions.{' '}
            <strong>
              SEND OR BRING THE COMPLETED FORM TO YOUR LOCAL SOCIAL SECURITY OFFICE. You can find your local Social Security office through SSA's website at{' '}
            </strong>
            <a
              href="http://www.socialsecurity.gov"
              target="_blank"
              rel="nofollow"
              className="text-blue-600 underline"
            >
              www.socialsecurity.gov
            </a>
            .
            <strong>
              Offices are also listed under U. S. Government agencies in your telephone directory or you may
              call Social Security at 1-800-772-1213 (TTY 1-800-325-0778).
            </strong>{' '}
            <em>
              You may send comments regarding this burden estimate or any other aspect of this collection, including suggestions for
              reducing this burden to: SSA, 6401 Security Blvd, Baltimore, MD 21235-6401.{' '}
              <strong>
                Send <span className="underline">only</span> comments relating to our time estimate or other
                aspects of this collection to this address, not the completed form
              </strong>
            </em>
            <strong>. </strong>
          </p>
        </div>
      </div>
    </li>
  );
}

function JotformForm({ children }) {
  // You can implement testSubmitFunction in React if needed
  const handleSubmit = (e) => {
    if (typeof window.testSubmitFunction !== 'undefined') {
      const result = window.testSubmitFunction();
      if (!result) e.preventDefault();
      return result;
    }
    // Default: allow submit
    return true;
  };

  return (
    <form
      className="jotform-form"
      onSubmit={handleSubmit}
      action="https://submit.jotform.com/submit/242470914597465"
      method="post"
      name="form_242470914597465"
      id="242470914597465"
      acceptCharset="utf-8"
      autoComplete="on"
    >
      <input type="hidden" name="formID" value="242470914597465" />
      <input type="hidden" id="JWTContainer" value="" />
      <input type="hidden" id="cardinalOrderNumber" value="" />
      <input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1754405007629" />
      <input type="hidden" id="submitSource" name="submitSource" value="unknown" />
      <input type="hidden" id="submitDate" name="submitDate" value="undefined" />
      <input type="hidden" id="buildDate" name="buildDate" value="1754405007629" />
      <input type="hidden" name="uploadServerUrl" value="https://upload.jotform.com/upload" />
      <input type="hidden" name="eventObserver" value="1" />
      <div role='main' className='form-all'>
        {children}
      </div>
    </form>
  );
}

export default App;
