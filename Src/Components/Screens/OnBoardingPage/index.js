import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";


export function OnBoardingPage1({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "space-between", flex: 1, backgroundColor: "#FFFFFF", }}>
      <View style={{ marginTop: "30%", alignItems: "center" }}>
        <Image source={require('../../Pictures/1-Ilustration.jpg')} style={{ width: 300, height: 300, marginBottom: "20%" }} />
        <Text style={{ fontSize: 20, fontFamily: "sans-serif-medium", color: "#57636F", }}>SHOPPING FROM HOME</Text>
      </View>
      <View style={{ width: "55%", alignItems: "center", marginTop: "10%" }}>
        <Text style={{ fontSize: 18, fontFamily: "sans-serif-medium", textAlign: "center", lineHeight: 30, color: "#7A8D9C" }}>Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Interger Maximus accumsan erat ide facilisis. </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "10%" }}>

        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.replace("Sign In")} style={{ width: 150, height: 60, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "#ACBAC3", }}>SKIP</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.replace("On Boarding2")} style={{ width: 150, height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 35 }}>
              <Text style={{ fontSize: 25, color: "#FFFFFF" }}>NEXT</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )
};
export function OnBoardingPage2({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "space-between", flex: 1, backgroundColor: "#FFFFFF", }}>
      <View style={{ marginTop: "30%", alignItems: "center" }}>
        <Image source={require('../../Pictures/2-Ilustration.jpg')} style={{ width: 300, height: 300, marginBottom: "20%" }} />
        <Text style={{ fontSize: 20, fontFamily: "sans-serif-medium", color: "#57636F", }}>PRODUK ORIGINAL</Text>
      </View>
      <View style={{ width: "55%", alignItems: "center", marginTop: "10%" }}>
        <Text style={{ fontSize: 18, fontFamily: "sans-serif-medium", textAlign: "center", lineHeight: 30, color: "#7A8D9C" }}>Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Interger Maximus accumsan erat ide facilisis. </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "10%" }}>

        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.replace("Sign In")} style={{ width: 150, height: 60, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "#ACBAC3", }}>SKIP</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.replace("On Boarding3")} style={{ width: 150, height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 35 }}>
              <Text style={{ fontSize: 25, color: "#FFFFFF" }}>NEXT</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )
};
export function OnBoardingPage3({ navigation }) {


  return (
    <View style={{ alignItems: "center", justifyContent: "space-between", flex: 1, backgroundColor: "#FFFFFF", }}>
      <View style={{ marginTop: "30%", alignItems: "center" }}>
        <Image source={require('../../Pictures/3-Illustration.jpg')} style={{ width: 300, height: 300, marginBottom: "20%" }} />
        <Text style={{ fontSize: 20, fontFamily: "sans-serif-medium", color: "#57636F", }}>EXPRESS DELIVERY</Text>
      </View>
      <View style={{ width: "55%", alignItems: "center", marginTop: "10%" }}>
        <Text style={{ fontSize: 18, fontFamily: "sans-serif-medium", textAlign: "center", lineHeight: 30, color: "#7A8D9C" }}>Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Interger Maximus accumsan erat ide facilisis. </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "10%" }}>

        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.replace("Sign In")} style={{ width: 150, height: 60, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "#ACBAC3", }}>SKIP</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.replace("Sign In")} style={{ width: 150, height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 35 }}>
              <Text style={{ fontSize: 25, color: "#FFFFFF" }}>NEXT</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )
};