const express = require("express");
const router = express.Router();
const toyListingController = require("../controller/toyListingController.js");

// Define routes
router.post("/", toyListingController.createToyListing);
router.get("/", toyListingController.getAllToyListings);
router.get("/:id", toyListingController.getToyListing);
router.get("/enums/:fieldName", toyListingController.getEnumValues);
router.put("/:id", toyListingController.updateToyListing);
router.delete("/:id", toyListingController.deleteToyListing);

// Get categories from the enum values in the model
router.get("/categories", toyListingController.getCategories);

module.exports = router;
