import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from "expo-router";
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  
  const [form, setForm] = useState({
    username: '',
    email:'',
    password:'',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    createUser();
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center min-h-[83vh] px-4 my-6"
        // style={{
        //   minHeight: Dimensions.get("window").height - 100,
        // }}
        >
         <Image source={images.logo}
         resizeMode='contain'
         className="w-[115px] h-[34px]"
         />

         <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
          Sign up to Aora
         </Text>
         <FormField
           title="username"
           value={form.username}
           handleChangeText={(e) => setForm({...form, username: e})}
           otherStyles="mt-10"
         />

         <FormField
           title="Email"
           value={form.email}
           handleChangeText={(e) => setForm({...form, email: e})}
           otherStyles="mt-7"
           keyboardType="email-address"
         />
         <FormField
           title="Password"
           value={form.password}
           handleChangeText={(e) => setForm({...form, password: e})}
           otherStyles="mt-7"
         />

         <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
         />

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Have an account already?
          </Text>
          <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp