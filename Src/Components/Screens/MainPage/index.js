import React from "react";
import { Text, View, TouchableOpacity, ScrollView, TextInput, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function MaginPage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", marginTop: "15%" }}>
      <View style={{ backgroundColor: "#F6F6F7", height: "35%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <View style={{ width: "95%", alignItems: "center", alignSelf: "center" }}>
          <View style={{ justifyContent: "space-around", alignItems: "center", height: 40, flexDirection: "row", width: "100%" }}>
            <View style={{ width: "80%", height: "100%", justifyContent: "center" }}>
              <TextInput placeholder={"Search"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#FFFFFF", borderRadius: 30, paddingLeft: 15, height: "100%" }} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: -55 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Search Page")} style={{ alignItems: "center", justifyContent: "center", borderRadius: 30, position: "absolute" }}>
                <Image source={require("../../Icons/Search_icon2.png")} style={{ width: 60, height: 40, borderRadius: 30, }} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ alignItems: "center", width: 60, justifyContent: "center", borderRadius: 30, }}>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 40, height: 40, borderRadius: 30, }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: "5%", marginLeft: "8%" }}>
          <Text style={{ fontSize: 27, color: "#7A8D9C" }}>Category</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }} >
          <View style={{ width: "100%" }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/WomenFashion.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/MenFashion.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/ChildClothes.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/Food_drink.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/Kitchen_tools.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/Furniture.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/Hobby.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/ChildClothes.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 10 }} >
                <Image source={require("../../componentIcons/Electronic.png")} style={{ width: 65, height: 100 }} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={{ width: "100%", height: "18%", justifyContent: "center", alignItems: "center", marginVertical: "8%" }}>
          <View style={{ backgroundColor: "#FFA771", width: "90%", height: "100%", borderRadius: 15, justifyContent: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginHorizontal: "5%", flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../../componentIcons/Purse_Icon.png")} style={{ width: 24, height: 20 }} />
                <Text style={{ fontSize: 15, color: "#FFFFFF", marginLeft: "8%", fontWeight: "bold", marginRight: "16%" }}>₺1.500</Text>
              </View>
              <View style={{ marginHorizontal: "5%", alignItems: "center" }}>
                <Image source={require("../../componentIcons/Pay.png")} style={{ width: 22, height: 41 }} />
              </View>
              <View style={{ marginHorizontal: "5%", alignItems: "center" }}>
                <Image source={require("../../componentIcons/TopUP.png")} style={{ width: 35, height: 41 }} />
              </View>
              <View style={{ marginHorizontal: "5%", alignItems: "center" }}>
                <Image source={require("../../componentIcons/More.png")} style={{ width: 28, height: 41 }} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: "4%" }}>
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, color: "#7A8D9C" }}>Sale Discount</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }} >
        <View style={{ width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }} >
              <View style={{ width: 140, height: 180, backgroundColor: "#F6F6F7", borderRadius: 20, alignItems: "flex-end" }}>
                <Image source={require("../../componentIcons/Vector14.png")} style={{ width: 30, height: 40, marginRight: "15%" }} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ marginTop: "2%" }}>
        <Text style={{ fontSize: 20, color: "#7A8D9C", marginLeft: "5%" }}>Popular</Text>
      </View>
      <ScrollView>
        <View style={{ marginLeft: "2%", }}>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Vinta Backpack
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $78
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Kimono Clogs
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $65
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Kimono Clogs
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $65
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Kimono Clogs
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $65
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Kimono Clogs
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $65
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 100, height: 120, backgroundColor: "#F6F6F7", marginVertical: "2%", borderRadius: 10 }} >
            </View>
            <View style={{ justifyContent: "center", }}>
              <Text style={{ color: "#57636F", fontSize: 20 }}>
                Kimono Clogs
              </Text>
              <Text style={{ color: "#126881", fontSize: 35 }}>
                $65
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: "10%" }}>
                  <Image source={require("../../componentIcons/rate_2.png")} style={{ width: 95, height: 15 }} />
                </View>
                <View>
                  <Text>4.9</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end" }} >
              <View>
                <Image source={require("../../componentIcons/Love_Icon2_2.png")} style={{ width: 20, height: 17, marginVertical: "50%" }} />
              </View>
              <View>
                <Image source={require("../../Icons/Shopcart_icon1.png")} style={{ width: 50, height: 30, borderRadius: 30, }} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View >
  )
};