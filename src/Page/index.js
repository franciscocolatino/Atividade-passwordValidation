import { object, string, number, date, InferType } from 'yup';
import { Modal, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/input'
import styles from './style'

export default function Page() {

  const [modalVisible, setModalVisible] = useState(false);

  const [password, setPassword] = useState('');

  // CRIANDO SISTEMA DE VALIDAÇÃO COM O YUP
  const schema = object({
    password: string().min(6, 'Senha muito pequena')
  })

  return (
    <View style={styles.container}>
      <Input
        secureTextEntry={true}
        placeholder="Digite uma senha"
        onChangeText={(text) => setPassword(text)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{password}</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.button} onPress={async () => {
        try {
          await schema.validate({
            password: password
          })
        } catch (err) {
          setPassword(err.errors[0]);
        }
        setModalVisible(!modalVisible)
      }}>
        <Text style={styles.buttonText}>Mostrar senha</Text>
      </Pressable>

    </View>
  )
}