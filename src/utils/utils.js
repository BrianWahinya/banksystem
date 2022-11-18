// Fetch data
export const fetchData = async (url) => {
  const response = await fetch(url);
  const respJson = await response.json();
  return respJson;
};

// Post data
export const postData = async (url) => {
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // your expected POST request payload goes here
      title: "My post title",
      body: "My post content."
    })
  };
  const response = await fetch(url, settings);
  const respJson = await response.json();
  return respJson;
};

// Check if data is null, empty or undefined
// Items is an array
export const isValid = (items) => {
  let result;
  items.forEach((item) => {
    if (item !== "" && item !== null && item !== undefined) {
      result = true;
    } else {
      result = false;
    }
  });
  return result;
};
