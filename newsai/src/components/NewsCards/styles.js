import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth : 'fit-content',
    minHeight : 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },

  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center', flexWrap : 'wrap',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0, backgroundColor : 'whitesmoke'
  },
});