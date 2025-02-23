import { createSlice } from '@reduxjs/toolkit';
 export const journalSlice = createSlice({
    name: 'journal',
        initialState: {
          isSaving: false,
          messageSave: '',
          notes: [],
          active: null,
        //   actives: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 12345678,
        //     imageUrls: [],
        //   }
         },
        reducers: {
          savingNewNote: (state) =>{
            state.isSaving = true
          },
           addNewEmtyNotes: (state, action) => {
              state.notes.push(action.payload);
              state.isSaving = false
           },
           setActiveNote: (state, action) => {
              state.active = action.payload
              state.messageSave = ''
           },
           setNote: (state, action) => {
              state.notes = action.payload
           },
           setSaving: (state) => {
               state.isSaving = true
               state.messageSave = ''
           },
           updateNote: (state, action) => {
               state.isSaving = false
               state.notes = state.notes.map(note => {

                  if(note.id === action.payload.id) {
                     return action.payload;
                  }

                  return note;
               })

               state.messageSave = `${action.payload.title}, actualizada correctamente`
           },
           deleteNoteById: (state, action) => {
               state.active = null;
               state.notes = state.notes.filter(note => note.id !== action.payload)
           },
           clearNotesLogout: (state) => {
               state.isSaving = false
               state.messageSave = ''
               state.notes = []
               state.active = null
           },
           setPhotosToActiveNote: (state, action) => {
               state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
               state.isSaving = false
           }
         },
     
});
export const { addNewEmtyNotes, clearNotesLogout, setActiveNote, setNote, setSaving, updateNote, deleteNoteById, savingNewNote, setPhotosToActiveNote } = journalSlice.actions;