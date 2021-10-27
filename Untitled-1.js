const form = formidable({ multiples: true });
form.parse(req, async (error, fields, files) => {
  const { name, description } = fields;
  const errors = [];
  if (name === "") {
    errors.push({ msg: "Title is required" });
  }
  if (description === "") {
    errors.push({ msg: "Description is required" });
  }
  if (Object.keys(files).length === 0) {
    errors.push({ msg: "Image is required" });
  } else {
    const { type } = files.image;
    const split = type.split("/");
    const extension = split[1].toLowerCase();
    if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
      errors.push({ msg: `${extension} is not a valid extension` });
    } else {
      files.image.name = uuidv4() + "." + extension;
    }
  }
  if (errors.length !== 0) {
    return res.status(400).json({ errors, files });
  } else {
    const newPath = __dirname + `/../images/${files.image.name}`;
    fs.copyFile(files.image.path, newPath, async (error) => {
      if (!error) {
        try {
          const response = await Subscription.create({
            name,
            image: files.image.name,
            description,
          });
          return res.status(200).json({
            msg: "successfully subscribed",
            response,
          });
        } catch (error) {
          return res.status(500).json({ errors: error, msg: error.message });
        }
      }
    });
  }
});
