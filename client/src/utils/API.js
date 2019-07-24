import axios from "axios";

export default {
  // Gets all donations
  getFood: function() {
    return axios.get("/api/food");
  },
  // Gets the book with the given id
  getFoodById: function(id) {
    return axios.get("/api/food/" + id);
  },

  updateFoodById: function(id, food) {
    return axios.put("/api/food/" + id, food);
  },

  getOrganization: function(){
    return axios.get("/api/organization");
  },

  addOrganization: function(organization){
    return axios.post("/api/organization", organization);
  }
  

};
