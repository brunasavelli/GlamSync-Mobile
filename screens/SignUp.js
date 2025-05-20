import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    setIsEmailValid(emailRegex.test(text));
  };

  const validatePhone = (text) => {
    const phoneRegex = /^\d{10,}$/;
    setPhoneNumber(text);
    setIsPhoneValid(phoneRegex.test(text));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Ionicons name="chevron-back" size={24} color="pink" />
              </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>Create your new account</Text>
            </View>


            <View style={styles.form}>

              <View style={styles.inputContainer}>
                <Ionicons name="person" size={20} color="pink" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>

              { }
              <View style={styles.inputContainer}>
                <Ionicons name="mail" size={20} color="pink" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="user@gmail.com"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={validateEmail}
                  autoCapitalize="none"
                />
                {email.length > 0 && (
                  <Ionicons
                    name={isEmailValid ? "checkmark-circle" : "close-circle"}
                    size={20}
                    color={isEmailValid ? "green" : "#F08080"}
                    style={styles.validationIcon}
                  />
                )}
              </View>

              { }
              <View style={styles.inputContainer}>
                <Ionicons name="call" size={20} color="pink" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={validatePhone}
                />
                {phoneNumber.length > 0 && (
                  <Ionicons
                    name={isPhoneValid ? "checkmark-circle" : "close-circle"}
                    size={20}
                    color={isPhoneValid ? "green" : "#F08080"}
                    style={styles.validationIcon}
                  />
                )}
              </View>

              { }
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed" size={20} color="pink" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.validationIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>

              { }
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>

              { }
              <View style={styles.rememberMeContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe ? (
                    <Ionicons name="checkmark-circle" size={20} color="#F08080" />
                  ) : (
                    <Ionicons name="ellipse-outline" size={20} color="#F08080" />
                  )}
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>

              { }
              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Or continue with</Text>
                <View style={styles.divider} />
              </View>

              { }
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/img/google.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/img/apple.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
              </View>

              { }
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>

              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    paddingTop: 20,
    paddingBottom: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    height: '100%',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,

  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#F08080',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#f9f9f9',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  validationIcon: {
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#F08080',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 8,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#666',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#999',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: '#999',
    fontSize: 14,
    fontStyle: 'underline'
  },
  loginLink: {
    color: '#F08080',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: "underline",
  },
});