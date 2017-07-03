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
    // photoUrl: req.body.eventPhotoUrl,
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
// STEP #1 of form submission of editing an Event
router.get("/events/:myId/edit", (req, res, next) => {
  EventModel.findById(
    req.params.myId,
    (err, eventFromDb) => {
      if (err) {
        next(err);
        return;
      }
      res.locals.eventDetails = eventFromDb;
      res.render("event-views/edit-event-views.ejs");
    }
  );
});

// STEP #2 of form submissionediting an Event
router.post("/events/:myId/update", (req, res, next) => {
  EventModel.findByIdAndUpdate(
    req.params.myId, //1st arg -> id of document to update
    { //2nd arg -> object of fields to update
      category: req.body.eventCategory,
      name: req.body.eventName,
      location: req.body.eventLocation,
      date: req.body.eventDate,
      photoUrl: req.body.eventPhotoUrl,
      description: req.body.eventDescription
    },
    (err, eventFromDb) => { //3rd arg -> callback
      if (err) {
        next(err);
        return;
      }
      res.redirect("/events/" + eventFromDb._id);
    }
  );
});
// END ROUTE TO EDIT EVENT VIEW ----------------------------------------



// ROUTE TO DELETE EVENT VIEW ------------------------------------------
router.post("/events/:myId/delete", (req, res, next) => {
  EventModel.findByIdAndRemove(
    req.params.myId,
    (err, eventFromDb) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect("/events");
    }
  );
});
// END ROUTE TO DELETE EVENT VIEW --------------------------------------



module.exports = router;
