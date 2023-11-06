import React from 'react';

const useDate = () => {
    const today = new Date();

    // Get the individual components of the date
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Month is 0-based, so add 1
    const day = today.getDate();
  
    // Format the date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    return (
      <>
        <p>{formattedDate}</p>
      </>
    );
};

export default useDate;
 