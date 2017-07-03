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



// ROUTE TO ADD NEW WORKSHOP VIEW -----------------------------------------

// END ROUTE TO ADD NEW WORKSHOP VIEW -------------------------------------



// ROUTE TO EDIT WORKSHOP VIEW --------------------------------------------

// END ROUTE TO EDIT WORKSHOP VIEW ----------------------------------------



// ROUTE TO DELETE WORKSHOP VIEW ------------------------------------------

// END ROUTE TO DELETE WORKSHOP VIEW --------------------------------------


module.exports = router;
