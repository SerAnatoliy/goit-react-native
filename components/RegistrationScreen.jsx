import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import AddAvatarButton from "../components/AddAvatarButton";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  const onSubmitHandler = () => {
    const values = { login, email, password };
    console.log(values);

    Keyboard.dismiss();
    setEmail("");
    setPassword("");
    setLogin("");
    setIsSecure(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Image
          source={require("../assets/images/background.jpg")}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.formContainer}>
          {/* Avatar */}
          <AddAvatarButton />

          <Text style={styles.title}>Реєстрація</Text>

          {/* Inputs */}
          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input placeholder="Логін" value={login} onChangeText={setLogin} />

            <Input
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              isSecure={isSecure}
              rightButton={
                <Text
                  style={styles.showButton}
                  onPress={() => setIsSecure(!isSecure)}
                >
                  {isSecure ? "Показати" : "Сховати"}
                </Text>
              }
            />
          </View>

          {/* Botón de registro */}
          <View style={[styles.innerContainer, styles.buttonContainer]}>
            <Button onPress={onSubmitHandler}>
              <Text style={styles.loginButtonText}>Зареєстуватися</Text>
            </Button>

            {/* Enlace a iniciar sesión */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Вже є акаунт? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={[styles.signUpText, styles.signUpRef]}>
                  Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  innerContainer: { gap: 16 },
  inputContainer: { marginTop: 32 },
  buttonContainer: { marginTop: 43 },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    position: "absolute",
    paddingHorizontal: 16,
    paddingTop: 92,
    bottom: 0,
    width: SCREEN_WIDTH,
    height: "70%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  showButton: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.blue,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
  },
  signUpContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: colors.blue,
  },
  signUpRef: {
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
