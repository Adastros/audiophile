const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// Flattens a multi-level, nested object into a single-level object
const flattenObj = (obj) => {
  let result = {};

  for (let i in obj) {
    // Checks if the value for a key is object. If true, recursively call this function
    // until all nested objects are moved into the top-level of the results variable.
    if (
      typeof obj[i] === "object" &&
      !Array.isArray(obj[i]) &&
      obj[i] !== null
    ) {
      const temp = flattenObj(obj[i]);

      // Create a new key name by concatenating the nested object
      // key names. Assign the final value to the new key name.
      for (let j in temp) {
        result[`${i}.${j}`] = temp[j];
      }
    } else {
      // If the value isn't an object, assign it directly to the results object
      result[i] = obj[i];
    }
  }

  return result;
};

// Parses a flattened object that uses the "." to separate nested keys
// back into it's original object structure
const unflattenObj = (obj) => {
  let result = {};

  for (let i in obj) {
    let keys = i.split("."); // split the key from flattened object

    // Use the split keys to recreate the object's original structure
    keys.reduce((acc, cur, j) => {
      // If the key exists in results, return variable result unchanged
      if (acc[cur]) return acc[cur];

      // If this is not the last key name, assign an empty object as the value.
      // Otherwise, return the value from the flattened object.
      return keys.length - 1 === j ? (acc[cur] = obj[i]) : (acc[cur] = {});
    }, result);
  }

  return result;
};

const cloudinaryUrlConverter = (obj) => {
  let newObj = {};

  Object.keys(obj).forEach((key) => {
    if (key.includes("image")) {
      newObj[key] = cloudinary.url(obj[key], { secure: true });
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

const readLocalFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, `../data/${fileName}.json`),
      "utf8",
      (err, data) => {
        if (err) reject(err);

        const flatData = flattenObj(JSON.parse(data));
        const convertedData = cloudinaryUrlConverter(flatData);
        const pageData = unflattenObj(convertedData);

        resolve(pageData);
      }
    );
  });
};

module.exports = {
  flattenObj,
  unflattenObj,
  cloudinaryUrlConverter,
  readLocalFile,
};
