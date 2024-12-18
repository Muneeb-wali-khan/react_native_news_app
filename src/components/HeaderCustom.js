import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const HeaderCustom = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 60,
        paddingHorizontal: 20,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 0},
        shadowOpacity: 0.5,
        paddingRight:25,
        shadowRadius: 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', gap: 25}}>
        <TouchableOpacity>
          <AntDesign name="sharealt" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="bookmark" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderCustom;
