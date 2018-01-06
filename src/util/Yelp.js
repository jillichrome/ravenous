const apiKey = 'pDBkJ2ggg8s-fA-F34UPWmbThVosVaIWE-y4puLijhaLMYdbl2krqfJ3xJOmgj3ASwFRDy-vv1pEaqqZcdneqtq7b_1JOtRARBwzMunXQUxYeGg8MrLidvnHd8lOWnYx';

const Yelp = {
  search(term, location, sortby) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`,{
      headers: {'Authorization': `Bearer ${apiKey}`}
    }).then(response => {
      if(response.ok) {
        return response.json();
      }
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    })
  }
};

export default Yelp;
