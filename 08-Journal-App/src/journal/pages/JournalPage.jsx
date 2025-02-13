import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const dispatch = useDispatch()
  const {isSaving, active: note} = useSelector(state => state.journal)

  const onClickNewNote = () => {

    dispatch(startNewNote())
  }
  return (
    <>
        <JournalLayout>

          {
            (!!note)
            ?  <NoteView/> 
            : <NothingSelectedView/>
          }

            {/* <Typography>Commodo ipsum commodo enim aute aliqua consequat consequat voluptate voluptate.</Typography> */}
           
            {/* <NoteView/> */}


            <IconButton
            onClick={onClickNewNote}
            size='large'
            disabled={isSaving}
            sx={{
              color: 'white',
              backgroundColor:'black',
              ':hover': {backgroundColor: '#526126', opacity:0.9},
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
            >
              <AddOutlined sx={{fontSize: 30}}/>
            </IconButton>
        </JournalLayout>
        
    </>
    
  )
}
