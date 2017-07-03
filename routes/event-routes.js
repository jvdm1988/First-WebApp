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


const multer = require("multer");
const myUploader = multer({
  // "dest" (destination) is a multer setting to specify where to upload files
  dest: __dirname + "../public/uploads/"
  // save uploaded files inside public/uploads/
});


// ROUTE TO ADD NEW EVENT VIEW -----------------------------------------
// STEP #1 of form submission for creating a new event
router.get("/events/new", (req, res, next) => {
  res.render("event-views/new-event-views.ejs");
});

// STEP #2 of form submission for a new event-views
router.post("/events", (req, res, next) => {
  const theEvent = new EventModel({
    category: req.body.eventCategory,
    name: req.body.eventName,
    location: req.body.eventLocation,
    date: req.body.eventDate,
    photoUrl: req.body.eventPhotoUrl,
    description: req.body.eventDescription
  });

  theEvent.save((err) => {
    // If there are errors that are NOT validation errors
    if (err && theEvent.errors === undefined) {
      next(err);
      return;
    }
    // If there are errors and there ARE validation errors
    if (err && theEvent.errors) {
      // display the form again
      res.render("event-views/new-event-views.ejs");
      return;
    }
    //STEP #3 of form submission for a new event
    // if saved succesfully, redirect to an URL
    res.redirect("/events");
  });
});
// END ROUTE TO ADD NEW EVENT VIEW -------------------------------------



// ROUTE TO EDIT EVENT VIEW --------------------------------------------

// END ROUTE TO EDIT EVENT VIEW ----------------------------------------



// ROUTE TO DELETE EVENT VIEW ------------------------------------------

// END ROUTE TO DELETE EVENT VIEW --------------------------------------



module.exports = router;
