export async function fetchData () {
    try {
        const response = await fetch('');
        if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      const jsonData = JSON.parse(data);

      return jsonData;
    } catch (error) {
        console.log('Error fetching data:', error );
    }
}

fetchData()
.then((data) => {
    console.log('Fetch data:' , data);
})
.catch((error) => {
    console.log('Fetch error:' , error);
});

