import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const imageWidth = screenWidth * 0.8;
  const imageHeight = isPortrait ? imageWidth * (9 / 16) : imageWidth * (3 / 8);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        {isPortrait ? (
          // Chế độ dọc
          <View style={styles.portraitContainer}>
            <Image
              source={require("./assets/sky.jpg")}
              style={{ width: imageWidth, height: imageHeight, marginTop: 20 }}
              resizeMode="contain"
            />
            <TextInput style={styles.input} placeholder="Enter text here" />
            <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
              <Button title="Button 1" onPress={() => {}} />
            </View>
            <View style={[styles.buttonContainer, { width: screenWidth / 2 }]}>
              <Button title="Button 2" onPress={() => {}} />
            </View>
          </View>
        ) : (
          // Chế độ ngang
          <View style={styles.landscapeContainer}>
            <Image
              source={require("./assets/sky.jpg")}
              style={{
                width: imageWidth,
                height: imageHeight,
                marginBottom: 20,
              }}
              resizeMode="contain"
            />
            <TextInput style={styles.input} placeholder="Enter text here" />
            <View style={[styles.buttonRow, { width: screenWidth }]}>
              <View style={{ width: screenWidth / 3 }}>
                <Button title="Button 1" onPress={() => {}} color="blue" />
              </View>
              <View style={{ width: screenWidth / 3 }}>
                <Button title="Button 2" onPress={() => {}} color="blue" />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  portraitContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  landscapeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default App;
