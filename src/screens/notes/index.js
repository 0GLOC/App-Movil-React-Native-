import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { themes } from '../../../src/constans/themes/themes';
import { List, ModalComponent, Input, SwitchScreen } from '../../components/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Notes({ navigation, route }) {
  const [task, setTask] = useState('')
  const [saveTask, setSaveTask] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState('')
  let [loaded] = useFonts({
    Kdam: require("../../../assets/fonts/KdamThmorPro-Regular.ttf"),
    Nuosu: require("../../../assets/fonts/NuosuSIL-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const onHandleInput = (text) => {
    setTask(text);
  }

  const onHandleSubmit = () => {
    setTask('');
    setSaveTask((currentSaveTask) => [
      ...currentSaveTask, 
      { id: Math.random(), value: task },
    ]);
    setTask('');
  }

  const onHandleDelete = (itemSelected) => {
    setSaveTask((currentSaveTask) =>
     currentSaveTask.filter((task) => task.id !== itemSelected.id)
    );
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const handleModal = (id) => {
    setItemSelected(saveTask.filter((item) => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  let content = <SwitchScreen/>

  if (saveTask.length < 8){
    content = (
      <>
        <View style={styles.containerTask}>
        <Input
        value={task}
        onChangeText={onHandleInput}
        />
        <Button 
        title='Agregar' 
        color='#8814AB' 
        onPress={() => onHandleSubmit()}
        disabled={task.length === 0}
        />
        <StatusBar style="auto" />
        </View>
        <List
          saveTask={saveTask}
          onPressItem={handleModal}
        />
        <ModalComponent
          animationType='slide'
          visible={modalVisible}
          onRequestClose={() => null}
        >
          <View style = {styles.modalContent}>
            <View style = {styles.modalTitleContainer}>
              <Text style = {styles.modalTitle}>Borrar Nota</Text>
              <TouchableOpacity 
              onPress={() => setModalVisible(!modalVisible)}>
                <Text style = {styles.deleteButtonSure}>x</Text>
              </TouchableOpacity>
            </View>
            <Text style = {styles.modalText}>Estas seguro?</Text>
            <Text style = {styles.modalMessage}>{itemSelected.value}</Text>
            <Button
            title='Borrar'
            color={'#A70E0E'}
            onPress={() => onHandleDelete(itemSelected)}/>
          </View>
          </ModalComponent>
      </>
    )
  } else {
    content = (
      <View>
        <SwitchScreen/>
        <View style={styles.buttonRouteContainer}>
            <Button color = '#8814AB' title='Volver al inicio' onPress={() => navigation.navigate('Login')}/>
        </View>
      </View>
    )
  }

  return (
    <View style={themes.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    marginTop: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'fffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    fontFamily: 'Kdam',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Nuosu',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: 'Kdam',
  },
  modalMessage: {
    fontSize: 16,
    fontFamily: 'Kdam',
    marginVertical: 20,
    margin: 5,
  },
  modalTitleContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Kdam',
  },
  deleteButtonSure: {
    backgroundColor: '#8814AB',
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
    fontFamily: 'Kdam',
  },
  buttonRouteContainer: {
    marginVertical: '15%',
    marginHorizontal: '20%',
}
})