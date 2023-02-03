function calculateFrequencies(input, dictionary) {
  if (typeof input !== "string" && input instanceof String === false) {
    throw new Error("Input should be a string");
  } else {
    let ok = true;
    for (let string of dictionary) {
      if (typeof string != "string" && string instanceof String === false)
        ok = false;
    }
    if (ok === false) {
      throw new Error("Invalid dictionary format");
    } else {
      let items = input.split(" ").map((e) => e.toLowerCase());
      let dictCopy = dictionary.map((e) => e.toLowerCase());

      const result = {};
      let total = 0;

      for (const item of items) {
        if (dictCopy.includes(item)) {
          total++;
        }
      }
      for (const item of items) {
        if (dictCopy.includes(item)) {
        } else {
          result[`${item}`] = 1 / (items.length - total);
        }
      }
      return result;
    }
  }
}

const app = {
  calculateFrequencies,
};

module.exports = app;
