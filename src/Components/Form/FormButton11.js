/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text } from 'react-native';


const FormButton = (prpos) => {
  return (

    < >
      <TouchableOpacity class="p-4" style={tailwind('bg-gray-900 px-3 py-3 mx-3 my-3  w-32 rounded-md')} onClick={prpos.onClick}>
        <Text style={tailwind('text-white font-bold text-center')}>
          {prpos.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};




export default FormButton;
