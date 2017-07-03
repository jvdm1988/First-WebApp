const express = require("express");

const WorkshopModel = require("../models/workshop-model.js");

const router = express.Router();


// ROUTE TO WORKSHOP LIST VIEW --------------------------------------------
router.get("/workshops", (req, res, next) => {
  WorkshopModel.find((err, WorkshopResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("workshop-views/workshop-list-view.ejs", {
      workshopsAndStuff : WorkshopResults
    });
  });
});
// END ROUTE TO WORKSHOPS LIST VIEW -------------------------------------------


// ROUTE TO WORKSHOPS DETAILS VIEW -----------------------------------------
router.get("/workshops/:workshopId/details", (req, res, next) => {
  WorkshopModel.findById(
    req.params.eventId,
    (err, eventFromDb) => {
      if (err) {
        next(err);
        return;
      }
      res.locals.workshopDetails = workshopFromDb;
      res.render("workshop-views/workshop-detail-view.ejs");
    }
  );
});
// END ROUTE TO WORKSHOP DETAILS VIEW -------------------------------------


const multer = require("multer");
const myUploader = multer({
  // "dest" (destination) is a multer setting to specify where to upload files
  dest: __dirname + "../public/uploads/"
  // save uploaded files inside public/uploads/
});


// ROUTE TO ADD NEW WORKSHOP VIEW -----------------------------------------
// STEP #1 of form submission for creating a new workshop
router.get("/workshops/new", (req, res, next) => {
  res.render("workshop-views/new-workshop-views.ejs");
});

// STEP #2 of form submission for a new workshop-views
router.post("/workshops", (req, res, next) => {
  const theWorkshop = new WorkshopModel({
    category: req.body.workshopCategory,
    name: req.body.workshopName,
    location: req.body.workshopLocation,
    date: req.body.workshopDate,
    photoUrl: req.body.workshopPhotoUrl,
    description: req.body.workshopDescription
  });

  theWorkshop.save((err) => {
    // If there are errors that are NOT validation errors
    if (err && theWorkshop.errors === undefined) {
      next(err);
      return;
    }
    // If there are errors and there ARE validation errors
    if (err && theWorkshop.errors) {
      // display the form again
      res.render("workshop-views/new-workshop-views.ejs");
      return;
    }
    //STEP #3 of form submission for a new workshop
    // if saved succesfully, redirect to an URL
    res.redirect("/workshops");
  });
});
// END ROUTE TO ADD NEW WORKSHOP VIEW -------------------------------------



// ROUTE TO EDIT WORKSHOP VIEW --------------------------------------------

// END ROUTE TO EDIT WORKSHOP VIEW ----------------------------------------



// ROUTE TO DELETE WORKSHOP VIEW ------------------------------------------

// END ROUTE TO DELETE WORKSHOP VIEW --------------------------------------


module.exports = router;
