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
var createUserServices = (client) => ({
  get: async ({ id }) => {
    const response = await client.get(`/users/${id}`);
    return mappers.get(response.data);
  }
});

// src/client/client.ts
var createClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });
  return {
    userServices: createUserServices(client)
  };
};
export {
  createClient
};
