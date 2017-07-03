const express = require("express");

const EventModel = require("../models/event-model.js");

const router = express.Router();


// ROUTE TO EVENTS LIST VIEW --------------------------------------------
router.get("/events", (req, res, next) => {
  EventModel.find((err, EventResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("event-views/event-list-view.ejs", {
      eventsAndStuff : EventResults
    });
  });
});
// END ROUTE TO EVENTS LIST VIEW ----------------------------------------


// ROUTE TO EVENT DETAILS VIEW -----------------------------------------
router.get("/events/:eventId/details", (req, res, next) => {
  EventModel.findById(
    req.params.eventId,
    (err, eventFromDb) => {
      if (err) {
        next(err);
        return;
      }
      res.locals.eventDetails = eventFromDb;
      res.render("event-views/event-details-view.ejs");
    }
  );
});
// END ROUTE TO EVENT DETAILS VIEW -------------------------------------


// ROUTE TO ADD NEW EVENT VIEW -----------------------------------------

// END ROUTE TO ADD NEW EVENT VIEW -------------------------------------



// ROUTE TO EDIT EVENT VIEW --------------------------------------------

// END ROUTE TO EDIT EVENT VIEW ----------------------------------------



// ROUTE TO DELETE EVENT VIEW ------------------------------------------

// END ROUTE TO DELETE EVENT VIEW --------------------------------------


module.exports = router;
