import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  logincontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff', // Set the background color to white
 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff', // Set the background color to white
},

input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
},
  header: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginlogo: {
    width: 166, // Set the desired width of the image
    height: 152, // Set the desired height of the image
    resizeMode: 'contain', // Use 'contain' to fit the entire image without cropping
    marginBottom: 20,
  },
 
  greeting: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  homeSearchImage: {
    width: 350,
    height: 210,
    alignSelf: 'center',
    marginVertical: 5,
  },
  searchContainer: {
    marginLeft: 21,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchText: {
    marginLeft: 5,
    color: '#000',
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  moreHome: {
    marginLeft: 170,
    width: 33,
    height: 20,
    flexShrink: 0,
    color: '#5884E8',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  levelup: {
      marginTop: 20,
      width: 25,
      height: 26,
      marginLeft: 20,
      flexShrink: 0,
      },
  leveltext: {
    marginTop: 24,
    width: 90,
    height: 20,
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Mplus1p-Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  leveltext2: {
    marginLeft: 21,
    marginTop: 8,
    width: 216,
    height: 20,
    flexShrink: 0,
    textAlign: 'center',
    fontSize: 11,
  },
  studylevel: {
    marginTop: 20,
    width: 350,
    height: 110,
    marginLeft: 21,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  customTuner: {
    marginTop: 20,
    marginLeft: 21,
    width: 150,
    height: 215,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#7279DF',
    shadowOffset: {
      width: 0,
      height: 3.843583106994629,
    },
    shadowOpacity: 0.1, // Adjust shadowOpacity to 0.1 for 10% shadow
    shadowRadius: 17,
    elevation: 17,
    flexDirection: 'row', // Arrange nested containers horizontally
    justifyContent: 'space-between', // Add space between nested containers
  },
  nestedContainer: {
    marginTop: 29,
    marginLeft: 31,
    width: 88,
    height: 88,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    flexShrink: 0,
    backgroundColor: '#B29BF2', // Color for Nested Container 1 and 3
    borderRadius: 29,
  },
 
});

export default styles;
