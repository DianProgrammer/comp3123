/*
Purpose: 
Set up all of the routes/paths for our server

*/ 



const express = require('express');
const router = express.Router();
const NotesModel = require("../models/NotesModel.js");

//Fill in the routes and methods below from the lab instructions 


//In URL you will see localhost:8081/api/notes
router.post("/notes", async (request, response) => {
    // Validation of the POST body
    if (!request.body.content) {
        return response.status(400).send({
            message: "Note content in the POST body cannot be left empty"
        })
    }

    //If the content of the coby existed 
    try{
        const note = new NotesModel({
            noteTitle: request.body.content.noteTitle,
            noteDescription: request.body.content.noteDescription,
            priority: request.body.content.priority,
            dateAdded: request.body.content.dateAdded,
            dateUpdated: request.body.content.dateUpdated
        })

        const savedNote = await note.save()
        response.status(201).send(savedNote)

    }catch(error){
        response.status(500).send({
            message: error.message || "Some error occurred while creating the note"
        })
    }
})


//Required homework: Complete the remaining GET, PUT, and delete method routes here nod
//GET all the notes
router.get("/notes", async (request, response) => {

    //try section
    try {
        //define variable
        //Wait until to get response from find method to get back data
        const notes = await NotesModel.find();

        //show response
        response.status(200).send(notes);

    } catch (error) {
        //show the status code of error
        response.status(500).send({
            //show the error message content
            message: error.message
        });
    }
});


//GET note base on the ID
router.get("/notes/:noteId", async(request, response) => {

    //try section
    try{
        //define variable
        //wait until to get response from findById method base on Id
        const note = await NotesModel.findById(request.params.noteId)

        //check by if statement
        //if the note does not exists
        if(!note){
            //should return : status code
            return response.status(404).send({

                //show this message
                message: "Note not found"
            })
        }

        //else : if it exists : show me the status code = 200
        response.status(200).send(note)
    }

    //catch section
    catch(error){

        //show error message
        response.status(500).send({
            message: error.message
        })
    }
})


//Update the note base on the Id 
router.put("/notes/:noteId", async (request, response) => {

    //try section 
    try {
        //define variable 
        //wait until to gte response from findByIdAndUpdate
        const note = await NotesModel.findByIdAndUpdate(

            //send request to get notId
            request.params.noteId, 

            //send request to get content of it 
            request.body.content,

            {new:true}
        )

        //check by if statement 
        //if the note does not exists 
        if(!note){
            //return status code : 404
            return response.status(404).send({

                //show the content message 
                message: "Note not found!"
            })
        }

        //if it is exists 
        response.status(200).send(note)
    }

    //catch section 
    catch(error){
        //show status code for error message 
        response.status(500).send({
            message: error.message
        })
    }
})


//Delete note base on the Id
router.delete("/notes/:noteId", async(request, response) => {

    //try section
    try{
        //define the variable
        //wait until get data by the findByIdAndDelete method
        const note = await NotesModel.findByIdAndDelete(
            request.params.noteId)

        //check by if statement
        //if the note does not exists
        if(!note){
            //return status code: 404
            return response.status(404).send({

                //show the content message
                message: "Note not found"
            })
        }

        //else : show the success message
        response.status(200).send({
            //show the content message
            message: "Note deleted"
        })

    }

    //catch section
    catch(error){
        //show the error message
        response.status(500).send({

            //show the content of error message
            message: error.message
        })
    }
})
module.exports = router;