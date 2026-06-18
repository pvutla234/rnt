import { useUserStore } from '@/store/useStore';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  const isAdmin = useUserStore(state => state.user?.is_admin);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon:({color, size})=>(
        <Ionicons name="home" color={color} size={size} />) }} />

        <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon:({color, size})=>(
        <Ionicons name="search" color={color} size={size} />) }} />

        <Tabs.Screen name="create" options={{ title: "Add", tabBarIcon:({color, size})=>(
        <Ionicons name="add-circle" color={color} size={size} />) }} />

        <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon:({color, size})=>(
        <Ionicons name="heart" color={color} size={size} />) }} />

         <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon:({color, size})=>(
        <Ionicons name="person" color={color} size={size} />) }} />
      {/* <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable"/>
      </NativeTabs.Trigger> */}

      {/* <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass"/>
        <Label>Search</Label>
      </NativeTabs.Trigger>

      
      {isAdmin && (
        <NativeTabs.Trigger name="create">
          <Icon sf="plus.circle.fill"/>
          <Label>Add Property</Label>
        </NativeTabs.Trigger>
      )}

      <NativeTabs.Trigger name="saved">
        <Icon sf="heart.fill"/>
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill"/>
        <Label>Profile</Label>
      </NativeTabs.Trigger> */}
    </Tabs>
  );
}
