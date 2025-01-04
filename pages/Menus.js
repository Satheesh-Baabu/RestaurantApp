import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://projectbackend-pfyy.onrender.com/menulist')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log('Error fetching data', err));
  }, []);

  const handleAddToCart = (item) => {
    console.log(`Added to cart: ${item.foodname}`);
    // Add your "Add to Cart" functionality here
  };

  return (
    <View>
      <Text style={styles.title}>Menus</Text>
      <ScrollView style={styles.container}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.row, styles.head]}>
            <Text style={styles.headerText}>Image</Text>
            <Text style={styles.headerText}>Food Name</Text>
            <Text style={styles.headerText}>Description</Text>
            <Text style={styles.headerText}>Food Type</Text>
            <Text style={styles.headerText}>Price</Text>
            <Text style={styles.headerText}>Add Cart</Text>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.row}>
              <Image
                source={{ uri: `https://projectbackend-pfyy.onrender.com/${item.filename}` }}
                style={styles.image}
              />
              <Text style={styles.text}>{item.foodname}</Text>
              <Text style={styles.text}>{item.description}</Text>
              <Text style={styles.text}>{item.foodtype}</Text>
              <Text style={styles.text}>Rs.{item.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  table: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C1C0B9',
    paddingVertical: 10,
  },
  head: {
    backgroundColor: '#f1f8ff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 5,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Menus;
