import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, } from 'react-native';
import { products } from '../../constants/data/products'
import { styles } from './styles';

export default function Form({ prop }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [desarrollador, setDesarrollador] = useState('');
  const [categoryId, setCategoryId] = useState();

  const selectedCategoryAccion = () => {
    setCategoryId(1)
  }
  const selectedCategoryRPG = () => {
    setCategoryId(2)
  }
  const selectedCategoryPlataformas = () => {
    setCategoryId(3)
  }
  const selectedCategoryEstrategia = () => {
    setCategoryId(4)
  }
  const selectedCategoryAventura = () => {
    setCategoryId(5)
  }

  const pushObject = () => {

    const sum = products.length+1;

    products.push({
        name: name,
        price: price,
        id: sum,
        fullImage: prop,
        image: prop,
        categoryId: categoryId,
        descripcion: descripcion,
        desarrollador : desarrollador})
    Alert.alert( 'Realizado con exito!', 'Producto agregado correctamente' )
    setName('');
    setPrice('');
    setDescripcion('');
    setDesarrollador('');
    setCategoryId('');
  }

  return (
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <Text style={styles.text}>Título</Text>
                <TextInput type="text" name="name"  placeholder="Ingrese el Titulo" onChangeText={setName} value={name}/>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>Precio</Text>
                <TextInput type="text" name="price" keyboardType='numeric' placeholder="Ingrese el Precio" onChangeText={setPrice} value={price}/>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>Desarrollador</Text>
                <TextInput type="text" name="desarrollador" placeholder="Ingrese su desarrollador" onChangeText={setDesarrollador} value={desarrollador}/>
            </View>
            <View style={styles.form}>
                <Text style={styles.text}>Descripción</Text>
                <TextInput type="text" name="descripcion" placeholder="Ingrese la descipción" onChangeText={setDescripcion} value={descripcion}/>
            </View>
            <Text style={styles.textCategoriesTitle}>Seleccione la categoría</Text>
            <View style={styles.categories}>
                <TouchableOpacity onPress={selectedCategoryAccion} value={categoryId} style={styles.buttonsCategories}><Text style={styles.textCategories}>Acción</Text></TouchableOpacity>
                <TouchableOpacity onPress={selectedCategoryRPG} style={styles.buttonsCategories}><Text style={styles.textCategories}>RPG</Text></TouchableOpacity>
                <TouchableOpacity onPress={selectedCategoryPlataformas} style={styles.buttonsCategories}><Text style={styles.textCategories}>Plataformas</Text></TouchableOpacity>
                <TouchableOpacity onPress={selectedCategoryEstrategia} style={styles.buttonsCategories}><Text style={styles.textCategories}>Estrategia</Text></TouchableOpacity>
                <TouchableOpacity onPress={selectedCategoryAventura} style={styles.buttonsCategories}><Text style={styles.textCategories}>Aventura</Text></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity 
            onPress={pushObject}
            style={styles.buttonADDItem}
            >
                <Text style={styles.textButton}>Agregar producto</Text>
            </TouchableOpacity>
            </View>
        </View>
  );
}