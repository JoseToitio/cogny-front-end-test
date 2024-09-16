import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BuyItem } from "../screens/BuyItem/BuyItem"
import ShopCart from "../screens/ShopCart/ShopCart"

const {Navigator, Screen} = createNativeStackNavigator()
export default function AppRoutes () {
  return (
    <Navigator initialRouteName="BuyItem" screenOptions={{ headerShown: false, animation: "none" }} >
      <Screen name="BuyItem" component={BuyItem} />
      <Screen name="ShopCart" component={ShopCart}/>
    </Navigator>
  )
}
