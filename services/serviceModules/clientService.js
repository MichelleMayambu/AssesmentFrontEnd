import base from "~/services/axiosBase";

//service calls to Assesment Api
export default {
    namespaced: true,
    createNewClient: (payload) => {
      return base.api.post("/api/client/AddClient",payload);
    },
    updateClientAddress:(payload) => {
        return base.api.post("/api/client/AddClientAddress",payload);
    },
    getClientList:(payload) => {
        return base.api.get("/api/client/GetClientList",payload);
    }
  };