// src/client/client.ts
import axios from "axios";

// src/services/user/user.mapper.ts
var mappers = {
  get: (response) => ({
    email: response.email,
    id: response.id,
    name: response.name,
    phone: response.phone,
    username: response.username,
    website: response.website
  })
};

// src/services/user/user.services.ts
var createUserServices = (client2) => ({
  get: async ({ id }) => {
    const response = await client2.get(`/users/${id}`);
    return mappers.get(response.data);
  }
});

// src/client/client.ts
var client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
var createClient = () => {
  return {
    userServices: createUserServices(client)
  };
};
export {
  createClient
};
