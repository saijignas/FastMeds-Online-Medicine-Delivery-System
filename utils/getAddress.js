const axios = require('axios');

const getAddress = async (lat, long) => {
  // console.log(lat,long);
  try{
    const response = await axios.get(
      `https://apis.mapmyindia.com/advancedmaps/v1/${process.env.GEO_API_KEY}/rev_geocode?lat=${lat}&lng=${long}`
    );
    let city = response.data.results[0].city.toLowerCase();
    if (city === '') city = response.data.results[0].state.toLowerCase();
  
    // console.log(city);
    return {
      city,
      address: response.data.results[0].formatted_address.toLowerCase(),
    };
  }catch(e){
    // throw new ApiError("city could not be found");
    res.status(500).send({msg:"city could not be detected"});
  }
  
};

module.exports = getAddress;
