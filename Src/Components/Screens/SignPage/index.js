import React from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";

export function SignPage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ backgroundColor: "#7BCFE9", height: "35%", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} >
        <View style={{ marginTop: "10%", height: "30%", alignItems: "flex-end", justifyContent: "center", marginRight: "8%", }}>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "20%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <Text style={{ fontSize: 40, color: "#FFFFFF", fontWeight: "bold" }} >Sign in</Text>
        </View>
        <View style={{ alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", width: "70%" }}>
          <Text style={{ fontSize: 15, color: "#FFFFFF", lineHeight: 30 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer maximus accumsan erat id facilisis.</Text>
        </View>
      </View>
      <View style={{ width: "80%", justifyContent: "center", alignSelf: "center" }}>
        <View style={{ marginVertical: "5%", width: "100%", justifyContent: "center", marginTop: "12%" }} >
          <TextInput placeholder={"Password"} underlineColor="transparent" style={{ paddingLeft: 15, backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30 }} />
        </View>
        <View style={{ width: "100%", justifyContent: "center", }} >
          <TextInput secureTextEntry={true} placeholder={"Password"} underlineColor="transparent" style={{ paddingLeft: 15, backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30 }} />
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginRight: "4%", marginTop: "2%", height: "5%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot Page")}>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", marginVertical: "12%", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 16, color: "#7A8D9C" }}>Or Sign in with social media</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#F6F6F7", alignItems: "center", borderRadius: 30 }}>
            <View style={{ width: "100%", flexDirection: "row", height: "100%", alignItems: "center", }}>
              <View style={{ position: "absolute", marginLeft: "5%" }}>
                <Image source={require("../../Icons/google.png")} style={{ width: 30, height: 30, }} />
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#57636F", }}>CONTINUE WITH GOOGLE</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "5%" }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#1877F2", alignItems: "center", borderRadius: 30 }}>
            <View style={{ width: "100%", flexDirection: "row", height: "100%", alignItems: "center", }}>
              <View style={{ position: "absolute", marginLeft: "5%", marginBottom: "1.5%" }}>
                <Image source={require("../../Icons/Facebook.png")} style={{ width: 30, height: 30, }} />
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#FFFFFF" }}>CONTINUE WITH FACEBOOK</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};

export function SignPage2({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ backgroundColor: "#7BCFE9", height: "35%", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} >
        <View style={{ marginTop: "10%", height: "30%", alignItems: "flex-end", justifyContent: "center", marginRight: "8%", }}>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
            <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }} >SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "20%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <Text style={{ fontSize: 40, color: "#FFFFFF", fontWeight: "bold" }} >Sign up</Text>
        </View>
        <View style={{ alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", width: "70%" }}>
          <Text style={{ fontSize: 15, color: "#FFFFFF", lineHeight: 30 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer maximus accumsan erat id facilisis.</Text>
        </View>
      </View>
      <View style={{ width: "80%", justifyContent: "center", alignSelf: "center" }}>
        <View style={{ marginVertical: "1%", width: "100%", justifyContent: "center", marginTop: "8%" }} >
          <TextInput placeholder={"Your name"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15, }} />
        </View>
        <View style={{ width: "100%", justifyContent: "center", marginVertical: "1%" }} >
          <TextInput placeholder={"Your email"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15, }} />
        </View>
        <View style={{ width: "100%", justifyContent: "center", marginVertical: "1%" }} >
          <TextInput placeholder={"Your password"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15 }} />
        </View>
        <View style={{ width: "100%", justifyContent: "center", marginVertical: "1%" }} >
          <TextInput placeholder={"Confirm password"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15 }} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", marginVertical: "5%", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 16, color: "#7A8D9C" }}>Or Sign up with social media</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#F6F6F7", alignItems: "center", borderRadius: 30 }}>
            <View style={{ width: "100%", flexDirection: "row", height: "100%", alignItems: "center", }}>
              <View style={{ position: "absolute", marginLeft: "5%" }}>
                <Image source={require("../../Icons/google.png")} style={{ width: 30, height: 30, }} />
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#57636F", }}>CONTINUE WITH GOOGLE</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "5%" }}>
          <TouchableOpacity onPress={() => navigation.replace("Main Page")} style={{ width: "100%", height: 60, backgroundColor: "#1877F2", alignItems: "center", borderRadius: 30 }}>
            <View style={{ width: "100%", flexDirection: "row", height: "100%", alignItems: "center", }}>
              <View style={{ position: "absolute", marginLeft: "5%", marginBottom: "1.5%" }}>
                <Image source={require("../../Icons/Facebook.png")} style={{ width: 30, height: 30, }} />
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "#FFFFFF" }}>CONTINUE WITH FACEBOOK</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};


export function ForgotPage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ backgroundColor: "#7BCFE9", height: "35%", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} >
        <View style={{ marginTop: "10%", height: "30%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
            <Image source={require("../../Icons/Back_Button1.png")} style={{ width: 20, height: 20, }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "20%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <Text style={{ fontSize: 40, color: "#FFFFFF", fontWeight: "bold" }} >Forgot password</Text>
        </View>
        <View style={{ alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", width: "70%" }}>
          <Text style={{ fontSize: 15, color: "#FFFFFF", lineHeight: 30 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer maximus accumsan erat id facilisis.</Text>
        </View>
      </View>
      <View style={{ width: "80%", justifyContent: "center", alignSelf: "center" }}>
        <TextInput placeholder={"Enter Your Verify Code"} underlineColor="transparent" style={{ paddingLeft: 15, backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30 }} />
        <View style={{ height: "10%" }}>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", height: "15%" }}>
          <Text style={{ color: "#ACBAC3" }}>Code was send your email</Text>
          <Text style={{ color: "#126881" }}>suleymanistemihan@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginRight: "2%", color: "#ACBAC3" }} >This code will expire on</Text>
          <Text style={{ color: "#126881" }} >5 minutes</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("New Password")} style={{ width: "100%", height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
          <TouchableOpacity style={{ width: "100%", height: 60, backgroundColor: "#ACBAC3", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>RESEND CODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};


export function NewPassword({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ backgroundColor: "#7BCFE9", height: "35%", borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} >
        <View style={{ marginTop: "10%", height: "30%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot Page")}>
            <Image source={require("../../Icons/Back_Button1.png")} style={{ width: 20, height: 20, }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "20%", alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", }}>
          <Text style={{ fontSize: 40, color: "#FFFFFF", fontWeight: "bold" }} >Set a new password</Text>
        </View>
        <View style={{ alignItems: "flex-start", justifyContent: "center", marginLeft: "8%", width: "70%" }}>
          <Text style={{ fontSize: 15, color: "#FFFFFF", lineHeight: 30 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer maximus accumsan erat id facilisis.</Text>
        </View>
      </View>
      <View style={{ width: "80%", justifyContent: "center", alignSelf: "center", marginTop: "8%" }}>
        <View style={{ marginVertical: "1%", width: "100%", justifyContent: "center", marginTop: "8%" }} >
          <TextInput placeholder={"Enter New Password"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15, }} />
        </View>
        <View style={{ marginVertical: "1%", width: "100%", justifyContent: "center", marginTop: "8%" }} >
          <TextInput placeholder={"Confirm new password"} underlineColor="transparent" spellCheck={false} autoCorrect={false} style={{ backgroundColor: "#F6F6F7", borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, paddingLeft: 15, }} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: "50%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Sign In")} style={{ width: "100%", height: 60, backgroundColor: "#126881", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 25, color: "#FFFFFF" }}>SAVE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
};