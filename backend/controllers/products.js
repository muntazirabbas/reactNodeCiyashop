const asyncHandler = require("../middleware/async");

exports.getProducts = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    success: 1,
    data: [
      { id: 1, name: "Product1" },
      { id: 1, name: "Product1" }
    ]
  });
});
