import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Set the background color as needed
    // Other container styles...
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    // Other header styles...
  },
  logo: {
    width: 100,
    height: 40,
  },
  searchButton: {
    padding: 8,
  },
  searchButtonImage: {
    width: 24,
    height: 24,
  },
  greeting: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Mplus1p-Bold', // Use the correct font family name
  },
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
    marginLeft: 27,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, // Adjust the margin as needed
  },
  searchText: {
    marginLeft: 5, // Adjust the margin as needed
    color: '#000',
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22, // Adjust the line height as needed
  },
  moreHome: {
    marginLeft: 170,
    width: 33,
    height: 20,
    flexShrink: 0,
    color: '#5884E8',
    textAlign: 'center',
    fontFamily: 'Mplus1p-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  neomoBox: {
    width: 150,
    height: 233,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: 'black',

    // Box shadow
    shadowColor: '#7279DF',
    shadowOffset: {
        width: 0,
        height: 3.843583106994629,
    },
    shadowOpacity: 0.12,
    shadowRadius: 17,
    elevation: 17,
},

});

export default styles;
