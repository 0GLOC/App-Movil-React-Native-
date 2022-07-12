import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import Form from '../../components/form/form';
import { colors } from '../../constants/themes/colors';

export default function AddGames() {
  const [image, setImage] = useState();
  const [hasPermission, setHasPermission] = useState(true);

  const fetchData = async () => {
    if(Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permiso Denegado','Activa los permisos necesarios')
            setHasPermission(status === false)
            }
        };
  };

  console.log( 'image', image)

  useEffect(() => {
    fetchData();
  }, [])

  const pickImage = async () => {

    if(hasPermission){
      
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      fetchData();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
            <TouchableOpacity 
            style={styles.buttonADD}
            onPress={pickImage} 
            ><Text style={styles.textButton}>
                Selecciona una imagen
                </Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 350, height: 300, alignSelf: 'center', borderWidth: 2, borderColor: colors.default }} />}
        </View>
        <View>
          <Form prop={image}/>
        </View>
      </ScrollView>
    </View>
  );
}