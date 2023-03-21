import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import { TextInput, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import Select from 'components/Form/Select'
import Input from 'components/Form/Input'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Events from '../Evento/data'
import useEvents from 'hooks/useEvents'
import { useNavigation } from '@react-navigation/native'
import useUsers from 'hooks/useUsers'
// import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window')
const form = [
  {
    name: 'type',
    type: Select,
    text: 'Selecione o tipo:',
    options: ['Corrida', 'Esporte', 'Academia', 'Yoga', 'Bicicleta', 'Natação'],
    placeholder: 'Tipo',
  },
  {
    name: 'name',
    type: Input,
    text: 'Digite a nome:',
    placeholder: 'Nome'
  },
  {
    name: 'locale',
    type: Input,
    text: 'Digite a localização:',
    placeholder: 'Localização'
  },
  {
    name: 'description',
    type: Input,
    text: 'Digite a descrição:',
    placeholder: 'Descrição'
  },
]
export default function CriarEvento() {
  const { users} = useUsers()
  const navigation = useNavigation() 
  const { createEvent } = useEvents();
  const [formValue, setFormValue] = useState({
    type: '',
    name: '',
    locale: '',
    description: '',
  })
  const swiperList = useRef(null)

  const handleSlide = (index) => {
    swiperList.current.scrollToIndex({
      index: index+1,
      animated: true
    })
  }
  return (
    <View style={style.container}>
      <SwiperFlatList
      data={form}
      ref={swiperList}
      showPagination={true}
      renderItem={({item, index}) => {
        const List = item.type
        const last = index == form.length - 1
        return (
          <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
            <List
          texto={item.text}
          options={item.options}
          placeholder={item.placeholder}
          value={formValue[item.name]}
          onChange={(value) => { setFormValue((prevForm) => ({...prevForm, [item.name]: value}))}}
          />
          <TouchableOpacity onPress={() => {
            if(last){
              createEvent(formValue, users.id)
            }else{
              handleSlide(index)
            }
          }}>
            <Text style={style.button}>{last ? 'Finalizar' : 'Próximo'}</Text>
          </TouchableOpacity>
          </View>
        )
      }} />
    </View>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6bb314'
  },
  selecType: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20
  },
  textType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#6bb314',
    paddingBottom: 10,
    width: '50%'
  },
  button: {
    fontSize: 18,
    color: '#333333',
    marginTop: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#FFFF',
    borderRadius: 7,
    fontWeight: 'bold'
  }
})