import React, { useState, useEffect } from "react";

function App() {
  //loading and the dog image
  const [dogImage, setDogImage] = useState(null);

  //Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch the random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Set the dogImage state with the fetched image URL
        setDogImage(data.message);
      });
  }, []);
  //Conditional rendering based on whether the dog image has loaded
  if (!dogImage) {
    // Display "Loading..." while waiting for the image
    return <p>Loading...</p>;
  }

  //Display the dog image once it's fetched
  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
