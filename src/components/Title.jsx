// src/components/Title.jsx
import { useEffect } from 'react';

const Title = ({ title }) => {
  useEffect(() => {
    // Set the document title
    document.title = title ? `${title} ` : 'Innoshop chibuike innocent ';
  }, [title]);

  return null; // No UI is needed for this component
};

export default Title;
