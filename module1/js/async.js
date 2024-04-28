async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }
  
  // Usage example:
  async function getData() {
    try {
      const data = await fetchData();
      console.log('Data fetched successfully:', data);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getData();
  