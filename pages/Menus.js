import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios'

const Menus = () => {
    const [data,setData]=useState([]);
  const head = ["Image",'Food Name',"Description","Food Type", 'Price', 'Add Cart'];
  useEffect(()=>{
    axios.get('https://projectbackend-pfyy.onrender.com/menulist')
    .then((res)=>{
      console.log(res.data)
      const formattedData = res.data.map((item, index) => [
        item.filename,
        item.foodname,
        item.description, 
        item.foodtype,
        `Rs.${item.price}`,
        "Add"
      ]);
      setData(formattedData);})
    .catch(err=>console.log("Error fetching data",err))
  },[])
    
  return (
    <View>
      <Text style={styles.title}>Menus</Text>
      <ScrollView style={styles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row data={head} style={styles.head} textStyle={styles.headerText} />
          <Rows data={data} textStyle={styles.text} />
        </Table>
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
  head: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  text: {
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 14,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Menus;
