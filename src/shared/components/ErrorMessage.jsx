import React                from 'react'
import { makeStyles }       from '@material-ui/styles'
import { Typography }       from '@material-ui/core'
import WarningRoundedIcon   from '@material-ui/icons/WarningRounded'

const useStyles = makeStyles(theme => ({
  error: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    color: theme.palette.error.main,
    textAlign: 'center',
  },
}))

const ErrorMessage = ({ message, link }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.error}>
      <WarningRoundedIcon
        color="error"
        fontSize="large"
      />
      <Typography
        variant="h4"
        className={classes.text}
        gutterBottom
      >
        { message }
      </Typography>
      { link ? (
        <Typography
          variant="overline"
          className={classes.text}
        >
          <a className={classes.text} href={link.route}>{ link.text }</a>
        </Typography>
      ) : null }
    </div>
  )
}

export default ErrorMessage