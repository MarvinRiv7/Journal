import { CloudUploadTwoTone, DeleteForever, SaveAlt, SaveAltRounded, SaveAltSharp, SaveAsTwoTone, UploadFile } from "@mui/icons-material"
import { Button, Grid, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
import { useRef } from "react"


export const NoteView = () => {

    const dispatch = useDispatch()

  const {active: note, messageSave, isSaving} = useSelector(state => state.journal)

  const {body, title, date, onInputChange, formState} = useForm(note)

  const dateString = useMemo(() => {

    const newDate = new Date(date)

    return newDate.toUTCString()
  },[date])

  const fileInputRef = useRef()

  useEffect(() => {
     dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {

    if(messageSave.length > 0) {
      Swal.fire('Nota actualizada', messageSave, 'success')
    }
  }, [messageSave])
  
  
  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {
      if(target.files === 0) return

      dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }

  return (
      <Grid container
      className="animate__animated animate__pulse animate__faster"
      direction='row'
      justifyContent='space-between'
      sx={{mb:1}}
      alignItems='center'
      >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>

            <input 
            type="file" 
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{display: 'none'}}
            />
            <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
            >
              <CloudUploadTwoTone/>
            </IconButton>
            <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{padding: 2}}>
                <SaveAsTwoTone sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label='Titulo'
            sx={{border: 'none', mb:1}}
            name="title"
            value={title}
            onChange={onInputChange}
            />
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="Que sucedio el dia de hoy"
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
            />
        </Grid>

        <Grid container justifyContent='end'>
            <Button
            onClick={onDelete}
            sx={{mt:2}}
            color="error"
            >
              <DeleteForever/>
              Borrar nota
            </Button>
        </Grid>

        <ImageGallery images={note.imageUrls}/>

      </Grid>
  )
}
