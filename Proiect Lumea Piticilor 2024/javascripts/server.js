const server = {
  async getPlaces() {
    return fetch("http://localhost:3000/places").then((response) => {
      if (response.ok) return response.json();

      return [];
    });
  },
  async getPlacesById(id) {
    return fetch(`http://localhost:3000/places/${id}`).then((response) => {
      if (response.ok) return response.json();

      return null;
    });
  },
  async updatePlaces(id, payload) {
    return fetch(`http://localhost:3000/places/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  },
  async getReviews() {
    return fetch("http://localhost:3000/reviews").then((response) => {
      if (response.ok) return response.json();

      return [];
    });
  },

  async addNewReview(payload) {
    return fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  },
  async updateReview(id, payload) {
    return fetch(`http://localhost:3000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  },
};
