import React, { useState } from 'react';
import StudentCard from './StudentCard';
import './StudentCard.css';

import taslimImage from './taslim.jpg';
import rahatImage from './rahat.jpg';
import barhaImage from './barha.jpg';

const App = () => {
  const [fieldOrder, setFieldOrder] = useState([
    'department',
    'imageUrl',
    'id',
    'name',
    'email',
  ]);

  const students = [
    {
      id: 1,
      name: 'Taslim Hosen Shanto',
      email: 'taslim@gmail.com',
      department: 'Computer Science',
      imageUrl: taslimImage,
    },
    {
      id: 2,
      name: 'Rahat Ibna Hossain',
      email: 'Rahat@gmail.com',
      department: 'Physics',
      imageUrl: rahatImage,
    },
    {
      id: 3,
      name: 'Barha Meherun Pritha',
      email: 'Barha@gmail.com',
      department: 'Mathematics',
      imageUrl: barhaImage,
    },
  ];

  const toggleFieldOrder = () => {
    const newOrder = [...fieldOrder];
    const firstField = newOrder.shift();
    newOrder.push(firstField);
    setFieldOrder(newOrder);
  };

  return (
    <div>
      <h1>Student Information</h1>
      <button onClick={toggleFieldOrder}>Update</button>
      <div className="student-card-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            fieldOrder={fieldOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
