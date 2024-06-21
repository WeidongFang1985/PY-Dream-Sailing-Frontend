import React, {useEffect, useState} from 'react';
import './Company.css';
import {getAllCompanies} from "../../services/getAllCompanies";


const Company = () => {
  const [companies, setCompanies] = useState([]);

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
        <ul className="campaigns">
          {companies.map(company => (
            <li key={company._id} >
              <img src={company.photo} alt="companyPhoto" width={40}/>
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
