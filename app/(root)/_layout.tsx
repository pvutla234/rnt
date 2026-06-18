import { useUserSync } from "@/hooks/useUserSync";
import { useAuth } from "@clerk/expo";
import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
 const {isSignedIn, isLoaded} = useAuth();

  // sync clerk user with supabase
  useUserSync();
    
   if(!isLoaded) return null;
   if(!isSignedIn) return <Redirect href={"/sign-in"} />; // redirect to sign in page if not signed in
   return <Slot/>; 

}