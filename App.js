import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal } from 'react-native';
import { themes } from './src/constans/themes/themes';
import { List, ModalComponent, Input, Title } from './src/components';

export default function App() {
  const [task, setTask] = useState('')
  const [saveTask, setSaveTask] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState('')

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

  return (
    <View style={themes.container}>
      <Title/>
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
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    margin: 5,
  },
  modalTitleContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteButtonSure: {
    backgroundColor: '#8814AB',
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
  }
})