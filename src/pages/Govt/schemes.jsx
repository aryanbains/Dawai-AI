// src/GovtSchemes.jsx
import React from 'react';

const schemes = [
  {
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    description: "A health insurance scheme providing coverage of up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization to over 10.74 crore poor and vulnerable families.",
    link: "https://nha.gov.in/PM-JAY"
  },
  {
    name: "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
    description: "A pension scheme for senior citizens which provides an assured return of 8% per annum for 10 years.",
    link: "https://pib.gov.in/newsite/PrintRelease.aspx?relid=175361"
  },
  {
    name: "National Programme for the Health Care of Elderly (NPHCE)",
    description: "A program aimed at providing dedicated healthcare services to elderly people both at primary, secondary, and tertiary levels.",
    link: "https://vikaspedia.in/health/nrhm/national-health-programmes-1/national-programme-for-the-health-care-for-the-elderly-nphce"
  },
  {
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    description: "Provides a monthly pension to senior citizens above the age of 60 years who are living below the poverty line.",
    link: "https://www.myscheme.gov.in/schemes/nsap-ignoaps"
  },
  {
    name: "Varishtha Mediclaim Policy",
    description: "Health insurance policy that caters specifically to senior citizens, covering hospitalization expenses, critical illness, etc.",
    link: "https://nationalinsurance.nic.co.in/sites/default/files/VARISTHA%20Mediclaim%20for%20Senior%20Citizens%20Prospectus.pdf"
  },
  {
    name: "Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)",
    description: "Aims to correct regional imbalances in the availability of affordable and reliable tertiary healthcare services and to augment facilities for quality medical education in the country.",
    link: "https://pmssy.mohfw.gov.in/"
  },
  {
    name: "National Health Mission (NHM)",
    description: "Encompasses two sub-missions, the National Rural Health Mission (NRHM) and the National Urban Health Mission (NUHM), aiming to improve healthcare delivery across rural and urban areas.",
    link: "https://nhm.gov.in/"
  },
  {
    name: "Rashtriya Swasthya Bima Yojana (RSBY)",
    description: "Provides health insurance coverage for BPL families and unorganized sector workers, offering cashless hospitalization at empaneled hospitals.",
    link: "http://www.rsby.gov.in/"
  },
  {
    name: "Janani Suraksha Yojana (JSY)",
    description: "A safe motherhood intervention under the NHM, promoting institutional deliveries among poor pregnant women to reduce maternal and neonatal mortality.",
    link: "https://main.mohfw.gov.in/?q=Organisation/departments-health-and-family-welfare/activities-health-and-family-welfare/janani-suraksha-yojana"
  },
  {
    name: "Mission Indradhanush",
    description: "Aims to cover all children and pregnant women who are partially or unvaccinated against vaccine-preventable diseases, providing immunization services to the unreached.",
    link: "https://www.drishtiias.com/daily-updates/daily-news-analysis/mission-indradhanush-1"
  },
  {
    name: "Integrated Child Development Services (ICDS)",
    description: "Aims to improve the health, nutrition, and education of young children and mothers through anganwadi centers.",
    link: "https://wcd.nic.in/integrated-child-development-services-icds-scheme"
  },
  {
    name: "Deendayal Antyodaya Yojana - National Urban Livelihoods Mission (DAY-NULM)",
    description: "Focuses on improving the quality of life of the urban poor through capacity building, enhancing access to sustainable livelihood opportunities, and providing shelters equipped with essential services.",
    link: "https://nulm.gov.in/"
  },
  {
    name: "National AIDS Control Programme (NACP)",
    description: "Aims to prevent and control the spread of HIV/AIDS through targeted interventions, awareness campaigns, and providing treatment to affected individuals.",
    link: "https://naco.gov.in/"
  },
];

const GovtSchemes = () => {
  const cardStyle = {
    background: '#E6F2EF', // Light version of #00856F
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
    width: 'calc(33% - 40px)',
    boxSizing: 'border-box'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#E6F2EF', // Light version of #00856F
    padding: '40px'
  };

  const headerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    color: '#004C3F', // Darker shade for text
    fontWeight: 'bold',
    fontSize: '2em',
  };

  const schemeNameStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Government Schemes for Older People</h1>
      {schemes.map((scheme, index) => (
        <div key={index} style={cardStyle}>
          <h2 style={schemeNameStyle}>{scheme.name}</h2>
          <p>{scheme.description}</p>
          <a href={scheme.link} target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
      ))}
    </div>
  );
};

export default GovtSchemes;
