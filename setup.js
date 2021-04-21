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
  starship_class: "starship classification",
  eye_color: "eye color",
  skin_color: "skin color",
  orbital_period: "orbital period",
  rotation_period: "rotation period",
  surface_water: "surface water",
  episode_id: "movie number",
  opening_crawl: "openning crawl",
  skin_colors: "skin colors",
  eye_colors: "eye colors",
  cargo_capacity: "cargo capacity",
  hyperdrive_rating: "hyperdrive rating"
};

export const undefinedValues = ["n/a", "unknown"];

export const setup = {
  people: {
    headingKey: "name",
    previewData: ["height", "gender", "birth_year", "mass"],
    fullData: [
      "birth_year",
      "eye_color",
      "films",
      "gender",
      "hair_color",
      "height",
      "homeworld",
      "mass",
      "skin_color",
      "species",
      "starships",
      "vehicles"
    ]
  },
  planets: {
    headingKey: "name",
    previewData: ["terrain", "population", "diameter", "climate"],
    fullData: [
      "climate",
      "diameter",
      "films",
      "gravity",
      "orbital_period",
      "population",
      "residents",
      "rotation_period",
      "surface_water",
      "terrain"
    ]
  },
  films: {
    headingKey: "title",
    previewData: ["director", "producer", "release_date"],
    fullData: [
      "characters",
      "director",
      "episode_id",
      "opening_crawl",
      "planets",
      "producer",
      "release_date",
      "species",
      "starships",
      "title",
      "vehicles"
    ]
  },
  species: {
    headingKey: "name",
    previewData: [
      "average_lifespan",
      "average_height",
      "language",
      "classification"
    ],
    fullData: [
      "average_height",
      "average_lifespan",
      "classification",
      "designation",
      "eye_colors",
      "films",
      "hair_color",
      "homeworld",
      "language",
      "name",
      "people",
      "skin_colors"
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
    ],
    fullData: [
      "cargo_capacity",
      "consumables",
      "cost_in_credits",
      "crew",
      "films",
      "length",
      "manufacturer",
      "max_atmosphering_speed",
      "model",
      "passengers",
      "pilots",
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
    ],
    fullData: [
      "MGLT",
      "cargo_capacity",
      "consumables",
      "cost_in_credits",
      "crew",
      "films",
      "hyperdrive_rating",
      "length",
      "manufacturer",
      "max_atmosphering_speed",
      "model",
      "passengers",
      "pilots",
      "starship_class"
    ]
  }
};
