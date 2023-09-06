const url ='https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';

const propertyDOM = document.querySelector('.property-center');

const fetchData = async () => {
  propertyDOM.innerHTML ='<div class="loading"></div>';
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'effd046944mshab918ceb096ff70p104d4cjsnd580b285ad6c',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.hits;
  } catch (error) {
    console.error(error);
    return [];
  }
}
const displayProperties = (properties) => {
  const propertyList = properties
    .map((property) => {
      const imageUrl = property.coverPhoto ? property.coverPhoto.url : '';
      return `
        <div class="property">
          <img src="${imageUrl}" alt="${property.title}" width="300" class= "image" height="200">
          <h3>${property.title}</h3>
          <p>ID: ${property.id}</p>
          <p class="price">Price: ${property.price}</p>
          <p class="price">Rooms: ${property.rooms}</p>
          <p class="price">Baths: ${property.baths}</p>
          <p class="price">Location: ${property.area}</p>
        </div>
      `;
    })
    .join('');
    propertyDOM.innerHTML =   ` <div class="property-container">
    ${propertyList}
    </div>`
};
const start = async () => {
  const data = await fetchData();
  displayProperties(data);
};

start();


/*async function fetchProperties() {
  const url =
    'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'effd046944mshab918ceb096ff70p104d4cjsnd580b285ad6c',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.hits;
  } catch (error) {
    console.error(error);
    return [];
  }
}
function displayProperties(properties) {
  const propertiesHtml = properties.map((property) => {
    const imageUrl = property.coverPhoto ? property.coverPhoto.url : '';
    return `
      <div class="property">
        <img src="${imageUrl}" alt="${property.title}" width="300" height="200">
        <h3>${property.title}</h3>
        <p>ID: ${property.id}</p>
        <p>Price: ${property.price}</p>
        <p>Rooms: ${property.rooms}</p>
        <p>Baths: ${property.baths}</p>
        <p>Location: ${property.area}</p>
      </div>
    `;
  });

  const explorePage = document.getElementById('explore');
  explorePage.innerHTML = propertiesHtml.join('');
}

function init() {
  fetchProperties()
    .then((properties) => {
      displayProperties(properties);
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener('DOMContentLoaded', init);*/