import React from 'react';
import './StudentCard.css';

const StudentCard = ({ student, fieldOrder }) => {
  const { imageUrl, id, name, email, department } = student;
  

  const renderFields = () => {
    return fieldOrder.map((field) => {
      switch (field) {
        case 'department':
          return (
            <p className="student-department">Department: {department}</p>
          );
          case 'imageUrl':
          return (
            <div className="profile-picture">
              <img src={imageUrl} alt="Profile" />
            </div>
          );
        case 'id':
          return <p className="student-id">ID: {id}</p>;
          case 'name':
            return <h2 className="student-name">{name}</h2>;

        case 'email':
          return <p className="student-email">Email: {email}</p>;
        
        default:
          return null;
      }
    });
  };

  return <div className="student-card">{renderFields()}</div>;
};

export default StudentCard;
