import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";

const App = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get("window");
    setIsPortrait(height >= width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      handleOrientationChange
    );
    return () => {
      subscription?.remove();
    };
  }, []);

  const { width: screenWidth } = Dimensions.get("window");
  const imageWidth = screenWidth * 0.8;
  const imageHeight = isPortrait ? imageWidth * (9 / 16) : imageWidth * (1 / 5);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          barStyle={isPortrait ? "light-content" : "dark-content"}
          backgroundColor={isPortrait ? "#000000" : "#ffffff"}
          translucent={false}
        />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          {isPortrait ? (
            // Chế độ dọc
            <View style={styles.portraitContainer}>
              <Image
                source={require("./assets/minecraft.png")}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  marginTop: 20,
                }}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { width: "80%", marginVertical: 10 }]}
                placeholder="Enter text here"
                multiline={true}
                numberOfLines={3}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[
                    styles.customButton,
                    {
                      backgroundColor: Platform.select({
                        ios: "blue", // iOS: nền xanh nước biển
                        android: "green", // Android: nền xanh lá
                      }),
                    },
                  ]}
                  onPress={() => {}}
                >
                  <Text
                    style={[
                      styles.customButtonText,
                      {
                        color: Platform.select({
                          ios: "white", // iOS: chữ trắng
                          android: "white", // Android: chữ trắng
                        }),
                      },
                    ]}
                  >
                    Button 1
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[
                    styles.customButton,
                    {
                      backgroundColor: Platform.select({
                        ios: "blue",
                        android: "green",
                      }),
                    },
                  ]}
                  onPress={() => {}}
                >
                  <Text
                    style={[
                      styles.customButtonText,
                      {
                        color: Platform.select({
                          ios: "white",
                          android: "white",
                        }),
                      },
                    ]}
                  >
                    Button 2
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // Chế độ ngang
            <View style={styles.landscapeContainer}>
              <Image
                source={require("./assets/minecraft.png")}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  marginBottom: 20,
                }}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { width: "90%", marginVertical: 10 }]}
                placeholder="Enter text here"
                multiline={true}
                numberOfLines={3}
              />
              <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.customButton,
                      {
                        backgroundColor: Platform.select({
                          ios: "blue",
                          android: "green",
                        }),
                      },
                    ]}
                    onPress={() => {}}
                  >
                    <Text
                      style={[
                        styles.customButtonText,
                        {
                          color: Platform.select({
                            ios: "white",
                            android: "white",
                          }),
                        },
                      ]}
                    >
                      Button 1
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.customButton,
                      {
                        backgroundColor: Platform.select({
                          ios: "blue",
                          android: "green",
                        }),
                      },
                    ]}
                    onPress={() => {}}
                  >
                    <Text
                      style={[
                        styles.customButtonText,
                        {
                          color: Platform.select({
                            ios: "white",
                            android: "white",
                          }),
                        },
                      ]}
                    >
                      Button 2
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  portraitContainer: {
    alignItems: "center",
  },
  landscapeContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "40%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  customButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  customButtonText: {
    fontSize: 16,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    borderRadius: 5,
  },
});

export default App;
