import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Constants/Colors';
import Icon from '../../Constants/Icons';

export default function AppInput({
  value,
  onBtnPress,
  placeholder,
  onChange,
  isPass,
  isIcon,
  isDropdown,
  iconName,
  iconType,
  options,
  inputContainer = {},
  type,
  placeholderColor,
  isText,
  textBtn,
  editAble,
  textBtnColor,
  isError = false,
  errorText = 'Error text',
  ...props
}) {
  const [visible, setVisible] = useState(isPass ? false : true);
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <>
        {isPass ? (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Ionicons
              name={visible ? 'eye-outline' : 'eye-off-outline'}
              color={Colors.WHITE}
              size={22}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {isIcon ? (
          <TouchableOpacity>
            <Icon name={iconName} type={iconType} Colors={Colors.TEXT_COLOR} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor ? placeholderColor : Colors.TEXT_COLOR
          }
          autoCapitalize='characters'
          value={value}
          onChangeText={val => onChange(val)}
          selectionColor={Colors.WHITE}
          secureTextEntry={!visible}
          {...props}
          style={[styles.input, props?.style ? props.style : {}]}
          cursorColor={Colors.TEXT_COLOR}
          keyboardType={type}
          editable={editAble}
        />
      </>
      {isError ? (
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {errorText}
        </Text>
      ) : null}

      {isText ? (
        <TouchableOpacity onPress={onBtnPress}>
          <Text
            style={{
              color: textBtnColor ? textBtnColor : Colors.PRIMARY,
              fontSize: 14,
              fontFamily: fonts.latoRegular,
              fontWeight: 'bold',
            }}>
            {textBtn}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.INPUT_BG,
    height: 40,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: -1,
  },
  input: {
    color: Colors.TEXT_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    marginStart: 15,
  },
});