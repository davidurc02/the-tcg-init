import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

export default function SectionOption1() {
  const [apiResponse, setApiResponse] = useState({})
  const [apiCallsCount, setApiCallsCount] = useState(0)
  const classes = useStyles()

  const callAPI = () => {
    fetch('http://localhost:3001/')
      .then(res => res.text())
      .then(res => {
        console.log('asd')
        setApiResponse({ apiResponse: res })
        setApiCallsCount(apiCallsCount + 1)
      })
  }
  return (
    <>
      <div>Section 1</div>
      <Button variant="contained" color="primary" className={classes.button} onClick={callAPI}>
        Call API
      </Button>
      <Typography variant="h2" gutterBottom>
        {apiResponse.apiResponse ? `${apiResponse.apiResponse} ${apiCallsCount}` : '--'}
      </Typography>
    </>
  )
}
