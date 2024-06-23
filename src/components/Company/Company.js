import React, {useEffect, useState} from 'react';
import './Company.css';
import {getAllCompanies} from "../../services/getAllCompanies";


const Company = () => {
  const [companies, setCompanies] = useState([]);
  console.log(companies)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const fetchedCompanies = await getAllCompanies();
        setCompanies(fetchedCompanies)
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="company">
      <h3>Sponsors</h3>
      {companies.length > 0 ? (
        <ul className="companies">
          {companies.map(company => (
            <li key={company._id} className="companies-item">
              <div className="companies-title">
                <img src={company.photo} alt="companyPhoto"/>
                <h4>{company.company_name}</h4>
              </div>
              <p>{company.service}</p>
            </li>

          ))}
        </ul>
      ) : (
        <p>No campaigns available.</p>
      )}
    </div>
  );
};

export default Company;
