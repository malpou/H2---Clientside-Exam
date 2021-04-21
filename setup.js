export const dataPrefix = {
  hair_color: "hair color",
  birth_year: "year of birth",
  mass: "weight",
  release_date: "release date",
  average_lifespan: "average lifespan",
  average_height: "average height",
  cost_in_credits: "price",
  max_atmosphering_speed: "maximum speed",
  vehicle_class: "vehicle classification",
  startship_class: "starship classification"
};

export const undefinedValues = ["n/a", "unknown"];

export const setup = {
  people: {
    headingKey: "name",
    previewData: ["height", "gender", "birth_year", "mass"]
  },
  planets: {
    headingKey: "name",
    previewData: ["terrain", "population", "diameter", "climate"]
  },
  films: {
    headingKey: "title",
    previewData: ["director", "producer", "release_date"]
  },
  species: {
    headingKey: "name",
    previewData: [
      "average_lifespan",
      "average_height",
      "language",
      "classification"
    ]
  },
  vehicles: {
    headingKey: "name",
    previewData: [
      "manufacturer",
      "cost_in_credits",
      "max_atmosphering_speed",
      "length",
      "vehicle_class"
    ]
  },
  starships: {
    headingKey: "name",
    previewData: [
      "manufacturer",
      "cost_in_credits",
      "max_atmosphering_speed",
      "length",
      "startship_class"
    ]
  }
};
