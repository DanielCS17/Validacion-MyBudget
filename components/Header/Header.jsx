import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <View style={styles.border}>
            <Text style={styles.patrimonio}>Patrimonio</Text>
        </View>
        <View style={styles.border}>
            <Text style={styles.patrimonio}>0 €</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff1e1',
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      height: 150,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#8d6e63',
      marginTop: 100
    },

    patrimonio: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },

    border: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: '#ccbeaf',
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#8d6e63'
    }
  });

export default Header